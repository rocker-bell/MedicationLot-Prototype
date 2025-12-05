import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"; 
import { ethers, Contract, BrowserProvider, formatUnits, parseUnits } from 'ethers';

// Import Components and ABIs...
import Demo from "./Components/Demo.jsx";
import Dashboard from "./Components/dashboard.jsx";
import Landing_page from "./Components/Landing_page.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx"; 
import LotTrackerABI from "./Components/LotTrackerABI.js";
import CreditTokenABI from './Components/CreditTokenABI.js'; 
import Demander_devis from './Components/demander_devis.jsx';
import Success from './Components/Success.jsx';
import Dashboard_Admin from "./Components/AdminDashboard.jsx"

// Constants
const LOTTRACKR_ADDRESS = "0xdB04e79caEa24AF20b4ad1AaAb0Ed2e67DCb9449"; 
const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c";
const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

const App = () => {
    const navigate = useNavigate();
    
    // 1. State (including localStorage initialization)
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null;
    }); 
    
    const [signer, setSigner] = useState(null); 
    const [message, setMessage] = useState("");
    const [contract, setContract] = useState(null); 
    const [creditTokenContract, setCreditTokenContract] = useState(null); 
    
    const isLoggedIn = !!userData && !!userData.address;

    // 2. Centralized Connection Logic
    const connectAndSetup = useCallback(async () => {
        if (typeof window.ethereum === 'undefined') {
            setMessage("MetaMask is not installed. Please install it.");
            return;
        }

        try {
            const provider = new BrowserProvider(window.ethereum);
            
            // 💡 Check if accounts are already connected (avoids unnecessary popup)
            const accounts = await provider.listAccounts();
            if (accounts.length === 0) {
                 // If no accounts, request connection
                 await provider.send("eth_requestAccounts", []);
            }

            const network = await provider.getNetwork();
            if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
                setMessage("MetaMask is connected but on the wrong network. Please switch to **Hedera Testnet**.");
                setSigner(null);
                setContract(null);
                setCreditTokenContract(null);
                return;
            }

            const _signer = await provider.getSigner();
            const _lotTrackrContract = new Contract(LOTTRACKR_ADDRESS, LotTrackerABI, _signer);
            const _creditTokenContract = new Contract(CREDIT_TOKEN_ADDRESS, CreditTokenABI, _signer);
            
            setSigner(_signer);
            setContract(_lotTrackrContract);
            setCreditTokenContract(_creditTokenContract);

            setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);
        } catch (error) {
            console.error("MetaMask connection failed:", error);
            const errorMessage = (error.message && error.message.includes('user rejected')) ? 'User rejected connection.' : error.message || "Network error.";
            setMessage(`Connection failed. Error: ${errorMessage}`);
            setSigner(null);
            setContract(null);
            setCreditTokenContract(null);
        }
    }, []); // Removed setMessage from dependencies


    // 3. 🟢 CRITICAL FIX: Handle Wallet Events AND Auto-Connect on Refresh
    useEffect(() => {
        // If we have a user session (from localStorage) but no signer (from refresh), connect.
        if (isLoggedIn && !signer) {
            console.log("App.js: User session found, attempting wallet auto-reconnect...");
            connectAndSetup();
        }
        
        // Listen for external wallet changes
        window.ethereum?.on('accountsChanged', connectAndSetup);
        window.ethereum?.on('chainChanged', connectAndSetup);

        return () => {
            window.ethereum?.removeListener('accountsChanged', connectAndSetup);
            window.ethereum?.removeListener('chainChanged', connectAndSetup);
        };
    }, [isLoggedIn, signer, connectAndSetup]); 
    
    // 4. Synchronize userData state with localStorage
    useEffect(() => {
        if (userData && userData.address) {
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            localStorage.removeItem('userData');
            // Clear signer/contract on logout
            setSigner(null);
            setContract(null);
            setCreditTokenContract(null);
        }
    }, [userData]); 

    return (
        <>
            <Routes>
                {/* 1. Public Routes */}
                <Route path="/Success" element={<Success/>}/>
                <Route path="/" element={<Landing_page/>} />
                <Route path="/demander_devis" element={
                    <Demander_devis
                
                        userData={userData}
                            setUserData={setUserData}
                            setSigner={setSigner}
                            signer={signer}
                            message={message}
                            setMessage={setMessage}
                            contract={contract} // Pass LotTrackr contract
                            setContract={setContract}
                            
                            creditTokenContract={creditTokenContract} 
                            connectAndSetup={connectAndSetup} // Pass the connection function
                />} />

                {/* 2. Login/Register Route */}
                <Route 
                    path="/Demo" 
                    element={
                        <Demo 
                            userData={userData}
                            setUserData={setUserData}
                            setSigner={setSigner}
                            signer={signer}
                            message={message}
                            setMessage={setMessage}
                            contract={contract} // Pass LotTrackr contract
                            setContract={setContract}
                            creditTokenContract={creditTokenContract} 
                            connectAndSetup={connectAndSetup} // Pass the connection function
                        />
                    } 
                />

                {/* 3. Protected Routes Group */}
                {/* <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} redirectPath="/Demo" />}>
                    <Route 
                        path="/Dashboard" 
                        element={
                            <Dashboard 
                                userData={userData} 
                                setUserData={setUserData} 
                                setMessage={setMessage} 
                                signer={signer} 
                                contract={contract} 
                                creditTokenContract={creditTokenContract} 
                            />
                        } 
                    />
                </Route>


                <Route 
                        path="admin_dashboard" 
                        element={
                            <Dashboard_Admin
                                userData={userData} 
                                setUserData={setUserData} 
                                setMessage={setMessage} 
                                signer={signer} 
                                contract={contract} 
                                creditTokenContract={creditTokenContract} 
                            />
                        } 
                    >
                </Route> */}

                 <Route 
                        path="admin_dashboard" 
                        element={
                            <Dashboard_Admin
                                userData={userData} 
                                setUserData={setUserData} 
                                setMessage={setMessage} 
                                signer={signer} 
                                contract={contract} 
                                creditTokenContract={creditTokenContract} 
                            />
                        } 
                    >
                </Route> 


                 {/* Protected Routes (Requires login) */}
            <Route element={<ProtectedRoute isLoggedIn={!!userData?.address} />}>
                
                {/* USER Dashboard */}
                <Route 
                    path="/Dashboard" 
                    element={
                        <Dashboard 
                            userData={userData} 
                            setUserData={setUserData} 
                            signer={signer}
                            contract={contract}
                            setMessage={setMessage}
                            creditTokenContract={creditTokenContract}
                        />
                    } 
                />

               {/* ADMIN Dashboard (THIS IS THE ONE YOU WANT TO ADD) */}

            </Route>
                
            </Routes>
        </>
    );
}

export default App;


