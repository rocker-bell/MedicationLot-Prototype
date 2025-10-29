// import {Routes, Route} from "react-router-dom";
// import Landing_page from "./Components/Landing_page.jsx";
// import Demander_devis from "./Components/demander_devis.jsx";
// import Demo from "./Components/Demo.jsx";
// import Dashboard from "./Components/dashboard.jsx";
// const App = () => {
//   return (
//     <>
//         <Routes>
//             <Route path="/" element={<Landing_page/>} />
//             <Route path="/demander_devis" element={<Demander_devis/>} />
//             <Route path="/Demo" element={<Demo/>} />
//             <Route path="/Dashboard" element={<Dashboard/>} />
           
//         </Routes>
//     </>
//   )
// }

// export default App;


// import React, { useState } from 'react';
// import { Routes, Route } from "react-router-dom";

// // Components
// import Landing_page from "./Components/Landing_page.jsx";
// import Demander_devis from "./Components/demander_devis.jsx";
// import Demo from "./Components/Demo.jsx";
// import Dashboard from "./Components/dashboard.jsx";
// import ProtectedRoute from "./Components/ProtectedRoute.jsx"; // 🟢 Import the Guard

// const App = () => {
//     // 🟢 Core state to track user login status and wallet connection
//     const [userData, setUserData] = useState(null); 
//     const [signer, setSigner] = useState(null); 
//     const [message, setMessage] = useState("");
    
//     // 🟢 Define the login status
//     const isLoggedIn = !!userData && !!userData.address; // True if userData and address exist

//     return (
//         <>
//             <Routes>
//                 {/* 1. Public Routes */}
//                 <Route path="/" element={<Landing_page/>} />
//                 <Route path="/demander_devis" element={<Demander_devis/>} />

//                 {/* 2. Login/Register Route - Pass state setters to allow login/registration */}
//                 <Route 
//                     path="/Demo" 
//                     element={
//                         <Demo 
//                             userData={userData}
//                             setUserData={setUserData}
//                             signer={signer}
//                             setSigner={setSigner}
//                             message={message}
//                             setMessage={setMessage}
//                         />
//                     } 
//                 />

//                 {/* 3. Protected Routes Group */}
//                 {/* All routes inside this <Route> are protected by the ProtectedRoute component */}
//                 <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} redirectPath="/Demo" />}>
                    
//                     {/* The Dashboard is the protected content */}
//                     <Route 
//                         path="/Dashboard" 
//                         element={
//                             <Dashboard 
//                                 userData={userData} 
//                                 setUserData={setUserData}
//                                 setSigner={setSigner} // Needed for logout
//                                 setMessage={setMessage} // Needed for logout
//                             />
//                         } 
//                     />
                    
//                 </Route>
                
//             </Routes>
//         </>
//     );
// }

// export default App;

// App.jsx
// import React, { useState, useEffect } from 'react'; // 🟢 Import useEffect
// import { Routes, Route, useNavigate } from "react-router-dom"; // 🟢 Import useNavigate

// import Demander_devis from "./Components/demander_devis.jsx";
// import Demo from "./Components/Demo.jsx";
// import Dashboard from "./Components/dashboard.jsx";

// // Components (imports remain the same)
// import Landing_page from "./Components/Landing_page.jsx";
// // ... other imports ...
// import ProtectedRoute from "./Components/ProtectedRoute.jsx"; 

// const App = () => {
//     const navigate = useNavigate(); // 🟢 Initialize useNavigate
    
//     const [userData, setUserData] = useState(null); 
//     const [signer, setSigner] = useState(null); 
//     const [message, setMessage] = useState("");
//     const [contract, setContract] = useState(null);
//     const isLoggedIn = !!userData && !!userData.address;

//     // 🟢 NEW: Use useEffect to watch for a confirmed login state
//     // useEffect(() => {
//     //     if (isLoggedIn) {
//     //         // State is confirmed, now we can safely navigate
//     //         // This is guaranteed to run AFTER App.jsx re-renders and isLoggedIn is true
//     //         navigate("/Dashboard", { replace: true });
//     //     }
//     // }, [isLoggedIn, navigate]); // Rerun this when isLoggedIn changes

//     return (
//         <>
//             <Routes>
//                 {/* 1. Public Routes */}
//                 <Route path="/" element={<Landing_page/>} />
//                 <Route path="/demander_devis" element={<Demander_devis/>} />

//                 {/* 2. Login/Register Route - Pass state setters */}
//                 {/* <Route 
//                     path="/Demo" 
//                     element={
//                         <Demo 
//                             // ... pass all props as before ...
//                             userData={userData}
//                             setUserData={setUserData} // This is the function that triggers the useEffect
//                             signer={signer}
//                             setSigner={setSigner}
//                             message={message}
//                             setMessage={setMessage}
//                         />
//                     } 
//                 /> */}

//                 <Route 
//     path="/Demo" 
//     element={
//         <Demo 
//             userData={userData}
//             setUserData={setUserData}
//             signer={signer}
//             setSigner={setSigner}
//             message={message}
//             setMessage={setMessage}
//             // 🟢 ADD THESE LINES:
//             contract={contract} 
//             setContract={setContract} 
//         />
//     } 
// />

//                 {/* 3. Protected Routes Group - Uses the same isLoggedIn status */}
//                 <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} redirectPath="/Demo" />}>
                    
//                     {/* The Dashboard is the protected content */}
//                     <Route 
//                         path="/Dashboard" 
//                         element={
//                             <Dashboard 
//                                 userData={userData} 
//                                 // ... pass other props ...
//                                 setUserData={setUserData}
//                                 setSigner={setSigner} 
//                                 setMessage={setMessage} 
//                             />
//                         } 
//                     />
                    
//                 </Route>
                
//             </Routes>
//         </>
//     );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate } from "react-router-dom"; 

// import Demander_devis from "./Components/demander_devis.jsx";
// import Demo from "./Components/Demo.jsx";
// import Dashboard from "./Components/dashboard.jsx";
// import Landing_page from "./Components/Landing_page.jsx";
// import ProtectedRoute from "./Components/ProtectedRoute.jsx"; 

// const App = () => {
//     const navigate = useNavigate();
    
//     // 🟢 FIX 1: Load userData from localStorage on component mount
//     const [userData, setUserData] = useState(() => {
//         const savedUserData = localStorage.getItem('userData');
//         try {
//             return savedUserData ? JSON.parse(savedUserData) : null;
//         } catch (e) {
//             console.error("Could not parse userData from localStorage", e);
//             return null;
//         }
//     }); 
    
//     const [signer, setSigner] = useState(null); 
//     const [message, setMessage] = useState("");
//     const [contract, setContract] = useState(null);
    
//     // isLoggedIn status is derived from the restored or live userData state
//     const isLoggedIn = !!userData && !!userData.address;

//     // 🟢 FIX 2: Synchronize userData state with localStorage
//     useEffect(() => {
//         if (userData && userData.address) {
//             // Save user data when a session is active
//             localStorage.setItem('userData', JSON.stringify(userData));
//         } else {
//             // Clear user data (e.g., on logout)
//             localStorage.removeItem('userData');
//         }
//     }, [userData]); 

//     // NOTE: The commented-out navigation useEffect is correctly removed, 
//     // relying only on ProtectedRoute.

//     return (
//         <>
//             <Routes>
//                 {/* 1. Public Routes */}
//                 <Route path="/" element={<Landing_page/>} />
//                 <Route path="/demander_devis" element={<Demander_devis/>} />

//                 {/* 2. Login/Register Route - Pass state setters */}
//                 <Route 
//                     path="/Demo" 
//                     element={
//                         <Demo 
//                             userData={userData}
//                             setUserData={setUserData} // Critical for saving state to App & localStorage
//                             signer={signer}
//                             setSigner={setSigner}
//                             message={message}
//                             setMessage={setMessage}
//                             contract={contract} 
//                             setContract={setContract} 
//                         />
//                     } 
//                 />

//                 {/* 3. Protected Routes Group - Uses the isLoggedIn status derived above */}
//                 <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} redirectPath="/Demo" />}>
                    
//                     {/* The Dashboard is the protected content */}
//                     <Route 
//                         path="/Dashboard" 
//                         element={
//                             <Dashboard 
//                                 userData={userData} 
//                                 setUserData={setUserData} // Critical for logging out (setting to null)
//                                 setSigner={setSigner} 
//                                 setMessage={setMessage} 
//                             />
//                         } 
//                     />
                    
//                 </Route>
//             </Routes>
//         </>
//     );
// }

// export default App;


// import React, { useState, useEffect, useCallback } from 'react';
// import { Routes, Route, useNavigate } from "react-router-dom"; 
// import { ethers, Contract, BrowserProvider } from 'ethers'; // 👈 NEW: Import Ethers components

// import Demander_devis from "./Components/demander_devis.jsx";
// import Demo from "./Components/Demo.jsx";
// import Dashboard from "./Components/dashboard.jsx";
// import Landing_page from "./Components/Landing_page.jsx";
// import ProtectedRoute from "./Components/ProtectedRoute.jsx"; 

// // ⚠️ IMPORTANT: Import ABI and define constants for contract initialization
// import LotTrackerABI from "./Components/LotTrackerABI.js";
// const contractAddress = "0x14b73dec132db19ddbafc6f4dbaf3756207ff4d6"; 

// const App = () => {
//     const navigate = useNavigate();
    
//     // 🟢 State Management
//     const [userData, setUserData] = useState(() => {
//         const savedUserData = localStorage.getItem('userData');
//         try {
//             return savedUserData ? JSON.parse(savedUserData) : null;
//         } catch (e) {
//             console.error("Could not parse userData from localStorage", e);
//             return null;
//         }
//     }); 
    
//     const [signer, setSigner] = useState(null); 
//     const [message, setMessage] = useState("");
//     const [contract, setContract] = useState(null); // Contract instance is managed here
    
//     const isLoggedIn = !!userData && !!userData.address;

//     // 🟢 FIX 1: Synchronize userData state with localStorage
//     useEffect(() => {
//         if (userData && userData.address) {
//             localStorage.setItem('userData', JSON.stringify(userData));
//         } else {
//             localStorage.removeItem('userData');
//         }
//     }, [userData]); 

//     // 🚀 FIX 2: Initialize the Contract Instance
//     // This runs once on mount. The contract starts connected to a read-only Provider.
//     // When the signer state updates, we re-initialize the contract using the signer.
//     useEffect(() => {
//         const initializeContract = async () => {
//             let _contractInstance;
            
//             // 1. Determine the Provider/Signer
//             if (signer) {
//                 // If signer is available, use it (allows for write operations)
//                 _contractInstance = new Contract(contractAddress, LotTrackerABI, signer);
//             } else if (typeof window.ethereum !== 'undefined') {
//                 // If MetaMask is present but not connected, use a read-only provider
//                 const provider = new BrowserProvider(window.ethereum);
//                 _contractInstance = new Contract(contractAddress, LotTrackerABI, provider);
//             } else {
//                  // Fallback: If no MetaMask, use a standard Ethers Provider (e.g., RPC) for read-only if possible
//                  // For now, we'll keep it simple and just set it to null if no provider is found
//                  _contractInstance = null;
//             }

//             setContract(_contractInstance);
//         };

//         initializeContract();
//     }, [signer]); // Rerun whenever the signer changes (connect/disconnect)

//     return (
//         <>
//             <div className="App-message-bar">{message}</div> {/* Optional: Message display */}
//             <Routes>
//                 {/* 1. Public Routes */}
//                 <Route path="/" element={<Landing_page/>} />
//                 <Route path="/demander_devis" element={<Demander_devis/>} />

//                 {/* 2. Login/Register Route - Pass ALL state setters */}
//                 <Route 
//                     path="/Demo" 
//                     element={
//                         <Demo 
//                             userData={userData}
//                             setUserData={setUserData}
//                             signer={signer}
//                             setSigner={setSigner} // Allows Demo to set the signer on connection
//                             message={message}
//                             setMessage={setMessage}
//                             contract={contract} 
//                             setContract={setContract} 
//                         />
//                     } 
//                 />

//                 {/* 3. Protected Routes Group */}
//                 <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} redirectPath="/Demo" />}>
                    
//                     {/* 🚀 FIX 3: Pass signer and contract to Dashboard */}
//                     <Route 
//                         path="/Dashboard" 
//                         element={
//                             <Dashboard 
//                                 userData={userData} 
//                                 setUserData={setUserData} 
//                                 signer={signer} // 👈 CRITICAL: Pass signer for write operations
//                                 contract={contract} // 👈 CRITICAL: Pass contract instance
//                                 setSigner={setSigner} 
//                                 setMessage={setMessage} 
//                             />
//                         } 
//                     />
                    
//                 </Route>
//             </Routes>
//         </>
//     );
// }

// export default App;


// In App.jsx

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
                <Route path="/" element={<Landing_page/>} />
                <Route path="/demander_devis" element={<Demander_devis/>} />

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
                <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} redirectPath="/Demo" />}>
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
                
            </Routes>
        </>
    );
}

export default App;