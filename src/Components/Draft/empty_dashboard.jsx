import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers, Contract, BrowserProvider } from 'ethers'; // Make sure Ethers is imported
import "../Styles/dashboard.css"; 
import LotTrackerABI from "./LotTrackerABI.js"

// 🟢 ACCEPT ALL NECESSARY PROPS - Using 'contract' instead of 'contractInstance'
// Removed setContract as this component shouldn't set the contract, only use it.
function Dashboard({ setSigner, setUserData, setMessage, userData, signer, contract }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('dashboard'); 
    const navigate = useNavigate();

    // State for Devis section views
    const [devisView, setDevisView] = useState('buttons'); 
    
    // State for Add Product form
    const [newProductData, setNewProductData] = useState({
        name: '', 
        manufacturer: '', 
        manufactureDate: '', 
        initialLocation: '', 
        metadataURI: '' 
    });
    
    // State for Check Product form
    const [checkProductId, setCheckProductId] = useState('');
    const [checkedProductResult, setCheckedProductResult] = useState(null);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    // Constant for the minimum credit requirement
    const TRANSACTION_COST_CREDITS = 1;

    // --- Connection/Setup (Redundant, but kept for context until parent refactoring) ---
    const contractAddress = "0x14b73dec132db19ddbafc6f4dbaf3756207ff4d6";
    const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

    const connectAndSetup = async () => {
        // ... (This logic is usually handled by the parent component)
        if (typeof window.ethereum === 'undefined') {
            setMessage("MetaMask is not installed. Please install it.");
            return;
        }

        try {
            const provider = new BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            
            const network = await provider.getNetwork();
            if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
                setMessage("MetaMask is connected but on the wrong network. Please switch to **Hedera Testnet**.");
                return;
            }

            const _signer = await provider.getSigner();
            setSigner(_signer);
            
            // NOTE: This creates a new contract instance locally, which might override the parent state
            // It's generally better to let the parent pass the initialized contract via prop 'contract'
            const _contract = new Contract(contractAddress, LotTrackerABI, _signer);
            // setContract(_contract); // If setContract existed as a prop, uncomment this

            setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);
        } catch (error) {
            console.error("MetaMask connection failed:", error);
            setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`);
        }
    };

    useEffect(() => {
        // Keeping this for the sake of completeness based on your provided context,
        // though it's still best practice to manage connection state higher up.
        connectAndSetup();

        window.ethereum?.on('accountsChanged', connectAndSetup);
        window.ethereum?.on('chainChanged', connectAndSetup);

        return () => {
            window.ethereum?.removeListener('accountsChanged', connectAndSetup);
            window.ethereum?.removeListener('chainChanged', connectAndSetup);
        };
    }, []); 
    // --------------------------------------------------------------------------

    const handleLogout = () => {
        if (setSigner) setSigner(null);
        if (setUserData) setUserData(null);
        if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
        navigate("/", { replace: true }); 
    };

    // 💡 Helper function to convert 'YYYY-MM-DD' date string to Unix timestamp (seconds)
    const dateToUnixTimestamp = (dateString) => {
        if (!dateString) return 0;
        const date = new Date(dateString + 'T00:00:00Z');
        return Math.floor(date.getTime() / 1000);
    };

    // 🚀 FIXED CONTRACT CALL FOR INSERT (Write Function) - Using 'contract' prop
    const handleAddProductSubmit = async (e) => {
        e.preventDefault();

        // Check for necessary components (using 'contract' prop)
        if (!userData?.address || !contract || !signer) {
            setMessage("Error: Wallet not connected or contract not initialized. Please refresh connection.");
            return;
        }

        // 1. Check for sufficient credits
        if (userData.credits < TRANSACTION_COST_CREDITS) {
            setMessage(`Transaction rejected: Insufficient credits. You need ${TRANSACTION_COST_CREDITS} credit(s) to insert a product.`);
            return;
        }

        const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);

        // Prepare the final arguments
        const args = [
            newProductData.name,
            newProductData.manufacturer,
            ethers.toBigInt(timestampInSeconds), // Ethers v6 standard
            newProductData.initialLocation,
            newProductData.metadataURI,
        ];

        try {
            const userEVMAddress = await signer.getAddress(); 
            setMessage(`Preparing transaction for product ${newProductData.name}...`);

            // Use the 'contract' prop and connect to the signer
            const contractWithSigner = contract.connect(signer);

            // 2. Execute the transaction
            const tx = await contractWithSigner.insert(...args, {
                // value: ethers.parseEther("0.00000001") // Uncomment if your contract is payable
            })

            setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

            const receipt = await tx.wait(); 

            // 3. Update local user credits on success
            if (receipt.status === 1) {
                const newCredits = userData.credits - TRANSACTION_COST_CREDITS;
                setUserData(prev => ({ ...prev, credits: newCredits })); 
                setMessage(`✅ Product "${newProductData.name}" successfully added! Credits deducted. (New balance: ${newCredits})`);
            } else {
                setMessage(`Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
            }

        } catch (error) {
            console.error("Error inserting product:", error);
            setMessage(`Transaction failed: ${error.reason || error.message || 'User rejected or network error. Check console for details.'}`);
        }

        // Reset form and view
        setNewProductData({
            name: '', manufacturer: '', manufactureDate: '', 
            initialLocation: '', metadataURI: ''
        });
        setDevisView('buttons');
    };
    
    // 🔍 FIXED CONTRACT CALL FOR PULL (Read/View Function) - Using 'contract' prop
    const handleCheckProductSubmit = async (e) => {
        e.preventDefault();
        
        // Use the consistent prop name: 'contract'
        if (!contract) {
            setMessage("Error: Contract not initialized.");
            return;
        }

        const tokenId = checkProductId.trim();
        if (!/^\d+$/.test(tokenId)) {
            setMessage("Error: Lot ID must be a number.");
            setCheckedProductResult(null);
            return;
        }
        
        setCheckedProductResult(null); 
        setMessage(`Fetching details for Lot ID ${tokenId}...`);

        try {
            // Call the 'pull' function on the 'contract' prop
            const [lotStruct, historyArray] = await contract.pull(tokenId);

            const result = {
                lotId: lotStruct.lotId.toString(),
                name: lotStruct.name,
                currentHandler: lotStruct.currentHandler,
                manufacturer: lotStruct.manufacturer,
                // Convert BigInt manufactureDate to milliseconds
                manufactureDate: Number(lotStruct.manufactureDate) * 1000, 
                currentOwner: lotStruct.currentOwner,
                currentLocation: lotStruct.currentLocation,
                status: lotStruct.status.toString(),
                history: historyArray,
            };

            setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
            setCheckedProductResult(result);
        } catch (error) {
            console.error("Error checking product:", error);
            setMessage(`Error fetching Lot ID ${tokenId}. It may not exist or the transaction failed.`);
            setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
        }
    };

    // --- Content Renderers and Helpers (Same as previous output) ---
    
    const formatKey = (key) => {
        switch (key) {
            case 'lotId': return 'Lot ID';
            case 'name': return 'Product Name';
            case 'currentHandler': return 'Current Handler';
            case 'currentLocation': return 'Current Location';
            case 'currentOwner': return 'Current Owner Address';
            case 'manufactureDate': return 'Manufacture Date';
            case 'manufacturer': return 'Manufacturer Name';
            case 'metadataURI': return 'Metadata URI';
            case 'status': {
                const statusMap = { '0': 'INACTIVE', '1': 'ACTIVE', '2': 'DISCARDED' };
                return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
            }
            default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
    }

    const renderAddDevisForm = () => (
        <form onSubmit={handleAddProductSubmit} className="devis-form">
            <h3>Add New Product (Lot/Devis)</h3>
            
            {Object.keys(newProductData).map(key => (
                <div key={key} className="form-group">
                    <label htmlFor={key}>{formatKey(key)}:</label>
                    <input
                        id={key}
                        type={key === 'manufactureDate' ? 'date' : 'text'} 
                        required
                        placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
                        value={newProductData[key]}
                        onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
                        className="form-input"
                    />
                </div>
            ))}
            
            <button type="submit" className="btn-primary">Submit Devis (Cost: {TRANSACTION_COST_CREDITS} Credit)</button>
            <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => setDevisView('buttons')}
            >
                Back to Options
            </button>
        </form>
    );

    const renderCheckDevisForm = () => (
        <div className="devis-check-view">
            <form onSubmit={handleCheckProductSubmit} className="check-form">
                <div className="form-group-inline">
                    <label htmlFor="checkId">Enter Lot ID:</label>
                    <input
                        id="checkId"
                        type="text"
                        required
                        value={checkProductId}
                        onChange={(e) => {
                            setCheckProductId(e.target.value);
                            setCheckedProductResult(null); 
                        }}
                        className="form-input"
                        placeholder="e.g., 123 (Lot ID)"
                    />
                    <button type="submit" className="btn-check-submit">Check Devis (Call Pull)</button>
                </div>
            </form>

            {checkedProductResult && (
                <div className="product-result">
                    <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
                    {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
                        <p className="not-found">Status: {checkedProductResult.status}</p>
                    ) : (
                        <div className="dashboard-widget">
                            {Object.entries(checkedProductResult)
                                .filter(([key]) => key !== 'history' && key !== 'status')
                                .map(([key, value]) => (
                                    <p key={key}>
                                        <strong>{formatKey(key)}:</strong> 
                                        {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
                                    </p>
                                ))}
                            
                            <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
                            <hr/>
                            <h5>Ownership History:</h5>
                            {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
                                <ol>
                                    {checkedProductResult.history.map((address, index) => (
                                        <li key={index}>{address}</li>
                                    ))}
                                </ol>
                            ) : (<p>No history recorded yet.</p>)}
                        </div>
                    )}
                </div>
            )}
            
            <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => {
                    setDevisView('buttons');
                    setCheckProductId('');
                    setCheckedProductResult(null);
                }}
            >
                Back to Options
            </button>
        </div>
    );


    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard':
                return (
                    <div className="dashboard-content">
                        <h2>Your User Data</h2>
                        <div className="dashboard-widget">
                            <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
                            <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
                            <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
                            <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
                            <p>
                                <strong>Creation Time : </strong> 
                                {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
                            </p>
                        </div>
                    </div>
                );
            case 'users':
                return (
                    <section className='Dashboard-users'>
                        <h2>User Management Section</h2>
                        <p>This section will contain the list of registered users and admin tools.</p>
                    </section>
                );

            case 'devis':
                return (
                    <section className='Dashboard-devis'>
                        <h2>Devis Management</h2>
                        <p>Manage product additions and track existing products on the chain.</p>
                        
                        {devisView === 'buttons' && (
                            <div className="devis-container-btns">
                                <button 
                                    className='btn-add-devise' 
                                    onClick={() => setDevisView('add')}
                                >
                                    Add New Product
                                </button>
                                <button 
                                    className='btn-check-devise' 
                                    onClick={() => setDevisView('check')}
                                >
                                    Check Product Status
                                </button>
                            </div>
                        )}

                        {devisView === 'add' && renderAddDevisForm()}
                        {devisView === 'check' && renderCheckDevisForm()}

                        {message && <div className="form-message">{message}</div>}


                    </section>
                ); 
            case 'settings':
                return (
                    <section className='Dashboard-settings'>
                        <h2>Account Settings</h2>
                        <p>This section will contain user-specific settings like password change or profile update options.</p>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="dashboard-container">
            <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
                <div className="sidebar-header">
                    <span className="sidebar-title">Dashboard</span>
                    <button onClick={toggleSidebar} className="close-btn">&times;</button>
                </div>
                <ul className="sidebar-links">
                    <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
                    <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
                    <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
                    <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
                </ul>
            </div>

            <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
                <header className="dashboard-header">
                    <div className="header-left">
                        <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
                    </div>
                    <div className="header-right">
                        <button className="header-btn">Notifications</button>
                        <button className="header-btn">Profile</button>
                    </div>
                </header>

                <main className="dashboard-body">
                    {renderContent()}
                </main>

                <footer className="dashboard-footer">
                    <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
                </footer>
            </div>

            <div className="back-to-website">
                <button className="back-btn logout-btn" onClick={handleLogout}>
                    Logout 🚪
                </button>
                <button className="back-btn" onClick={() => navigate('/')}> 
                    Back to Website 
                </button>
            </div>
        </div>
    );
}

export default Dashboard;