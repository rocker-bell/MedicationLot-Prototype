


// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { BrowserProvider, Contract, formatUnits } from "ethers"; 
// import contractABI from "./UserAuthABI"; 
// import "../Styles/Demo.css";

// // Your contract's EVM address
// const contractAddress = "0xdbc22b309b0c46e43c08d39c7f8acf119e091651";  

// // Hedera Testnet Chain ID (0x128 in hex)
// const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

// const Demo = ({ 
//     userData, 
//     setUserData, 
//     signer, 
//     setSigner, 
//     contract, 
//     setContract, 
//     message, 
//     setMessage
// }) => {
    
//     const navigate = useNavigate();
//     const location = useLocation();
//     const fromPage = location.state?.from || "/Dashboard";

//     const DECIMALS = 18;
//     const initialRegisterActive = location.state?.registerActive || false;
//     const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);

//     // Input states
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const [registerUsername, setRegisterUsername] = useState("");
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");

//     // Immediate redirect if user session exists
//     useEffect(() => {
//         if (userData && userData.address) {
//             navigate("/Dashboard", { replace: true });
//             setMessage("Session restored. Welcome back!");
//         }
//     }, [userData, navigate, setMessage]);

//     // --- 1. Connection and Initialization ---
//     const connectAndSetup = async () => {
//         if (typeof window.ethereum === 'undefined') {
//             setMessage("MetaMask is not installed. Please install it.");
//             return;
//         }

//         try {
//             const provider = new BrowserProvider(window.ethereum);
//             await provider.send("eth_requestAccounts", []);
            
//             const network = await provider.getNetwork();
//             if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
//                 setMessage("MetaMask is connected but on the wrong network. Please switch to Hedera Testnet.");
//                 return;
//             }

//             const _signer = await provider.getSigner();
//             setSigner(_signer);
            
//             const _contract = new Contract(contractAddress, contractABI, _signer);
//             setContract(_contract);

//             setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);

//         } catch (error) {
//             console.error("MetaMask connection failed:", error);
//             setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`);
//         }
//     };

//     useEffect(() => {
//         connectAndSetup();

//         window.ethereum?.on('accountsChanged', connectAndSetup);
//         window.ethereum?.on('chainChanged', connectAndSetup);

//         return () => {
//             window.ethereum?.removeListener('accountsChanged', connectAndSetup);
//             window.ethereum?.removeListener('chainChanged', connectAndSetup);
//         };
//     }, []); 

//     // --- 2. Register ---
//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         if (!contract || !signer) {
//             setMessage("Wallet not connected or contract not initialized.");
//             return;
//         }

//         try {
//             setMessage("Sending registration transaction... (Confirm in MetaMask)");
            
//             const txResponse = await contract.register(registerEmail, registerPassword, registerUsername);
//             setMessage(`Transaction sent: ${txResponse.hash}. Waiting for confirmation...`);

//             const txReceipt = await txResponse.wait(); 
            
//             if (txReceipt.status === 1) { 
//                 const creditTxResponse = await contract.requestCredits(100);
//                 await creditTxResponse.wait();
                
//                 setMessage("Registration successful! 100 credits assigned. Switching to login.");
                
//                 setRegisterUsername("");
//                 setRegisterEmail("");
//                 setRegisterPassword("");
//                 setIsLoginActive(true);
//             } else {
//                 setMessage("Transaction reverted. Registration failed.");
//             }
//         } catch (err) {
//             console.error("Registration error:", err);
//             setMessage(`Registration failed. Error: ${err.reason || err.message}`);
//         }
//     };

//     // --- 3. Login ---
//     // const handleLogin = async (e) => {
//     //     e.preventDefault();
//     //     setMessage("");

//     //     if (!contract || !signer) {
//     //         setMessage("Wallet not connected or contract not initialized.");
//     //         return;
//     //     }
        
//     //     if (!loginPassword || !loginEmail) {
//     //         setMessage("Please enter both email and password.");
//     //         return;
//     //     }

//     //     try {
//     //         const userEVMAddress = await signer.getAddress(); 
            
//     //         setMessage("Checking account status...");

//     //         // ⚡ Use dynamic call to avoid ethers.js proxy issues
//     //         const isBanned = await contract["getBannedStatus"](userEVMAddress);
//     //         if (isBanned) {
//     //             setMessage("🔴 Login failed. Your account has been banned from interaction.");
//     //             return; 
//     //         }
            
//     //         setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

//     //         const txResponse = await contract.login(loginEmail, loginPassword); 
//     //         const txReceipt = await txResponse.wait(); 

//     //         if (txReceipt.status !== 1) {
//     //             throw new Error("Login transaction failed on chain.");
//     //         }
            
//     //         setMessage("Login successful! Fetching user data...");

//     //         const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
            
//     //         const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
//     //         const credit = formatUnits(creditsBigInt, DECIMALS); 
            
//     //         const newUserData = {
//     //             address: userEVMAddress,
//     //             email: email, 
//     //             username: username,
//     //             credits: credit,
//     //             creationTime: creationTime.toString()
//     //         };

//     //         setMessage(`Login successful! Welcome back, ${username}.`);
//     //         setUserData(newUserData);
//     //         navigate("/Dashboard", { replace: true });
            
//     //     } catch (err) {
//     //         console.error("Login failed:", err);
            
//     //         const revertReason = err.reason || (err.data && err.data.message) || err.message;
            
//     //         if (revertReason.includes("Account is banned")) {
//     //              setMessage("🔴 Login failed. Your account is banned from interaction.");
//     //         } else if (revertReason.includes("User not registered")) {
//     //             setMessage("Login failed. The connected wallet is not registered.");
//     //         } else if (revertReason.includes("Invalid email or password")) {
//     //             setMessage("Login failed. Invalid email or password.");
//     //         } else {
//     //             setMessage(`Login failed. Check your wallet status. Error: ${revertReason}`);
//     //         }
//     //     }
//     // };

// //     const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     if (!signer) {
// //         setMessage("Wallet not connected yet.");
// //         return;
// //     }

// //     const userEVMAddress = await signer.getAddress();

// //     // Use a read-only contract to avoid TypeError
// //     const provider = new BrowserProvider(window.ethereum);
// //     const contractReadOnly = new Contract(contractAddress, contractABI, provider);

// //     try {
// //         const isBanned = await contractReadOnly.getBannedStatus(userEVMAddress);
// //         if (isBanned) {
// //             setMessage("🔴 Login failed. Your account has been banned.");
// //             return;
// //         }

// //         // proceed with login transaction using signer
// //         const contractTx = new Contract(contractAddress, contractABI, signer);
// //         const txResponse = await contractTx.login(loginEmail, loginPassword);
// //         await txResponse.wait();

// //         setMessage("Login successful!");
// //          setUserData(newUserData);
// //         navigate("/Dashboard", { replace: true });
// //     } catch (err) {
// //         console.error("Login failed:", err);
// //         setMessage(`Login failed: ${err.message}`);
// //     }
// // };

// const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (!signer) {
//         setMessage("Wallet not connected yet.");
//         return;
//     }

//     const userEVMAddress = await signer.getAddress();

//     // Read-only contract for view functions
//     const provider = new BrowserProvider(window.ethereum);
//     const contractReadOnly = new Contract(contractAddress, contractABI, provider);

//     try {
//         // Check banned status
//         const isBanned = await contractReadOnly.getBannedStatus(userEVMAddress);
//         if (isBanned) {
//             setMessage("🔴 Login failed. Your account has been banned.");
//             return;
//         }

//         // State-changing login transaction
//         const contractTx = new Contract(contractAddress, contractABI, signer);
//         const txResponse = await contractTx.login(loginEmail, loginPassword);
//         const txReceipt = await txResponse.wait();
//         if (txReceipt.status !== 1) {
//             throw new Error("Login transaction failed on-chain.");
//         }

//         setMessage("Login successful! Fetching user data...");

//         // --- Fetch user data from contract ---
//         const [email, username, creationTime] = await contractReadOnly.getUserInfoByAddress(userEVMAddress);
//         const creditsBigInt = await contractReadOnly.checkUserCredit(userEVMAddress);
//         const credit = formatUnits(creditsBigInt, 18); // adjust decimals if needed

//         const newUserData = {
//             address: userEVMAddress,
//             email,
//             username,
//             credits: credit,
//             creationTime: creationTime.toString(),
//         };

//         setUserData(newUserData); // This updates App.jsx and triggers the redirect
//         // navigate("/Dashboard", { replace: true }); // now this will actually run
//         navigate(fromPage, { replace: true })

//     } catch (err) {
//         console.error("Login failed:", err);
//         const revertReason = err.reason || (err.data && err.data.message) || err.message;
//         setMessage(`Login failed: ${revertReason}`);
//     }
// };


//     return (
//         <div className="DemoWrapper">
//             <Link to="/" className="back-link">← Back to Home</Link>

//             <div className="ContainerLogin_register">
//                 <div className="toggle-container">
//                     <button
//                         className={`toggle-btn login-toggle ${isLoginActive ? "active" : ""}`}
//                         onClick={() => setIsLoginActive(true)}
//                     >
//                         Login
//                     </button>
//                     <button
//                         className={`toggle-btn register-toggle ${!isLoginActive ? "active" : ""}`}
//                         onClick={() => setIsLoginActive(false)}
//                     >
//                         Register
//                     </button>
//                 </div>

//                 <div className="forms-container">
//                     {/* Login Form */}
//                     {isLoginActive && (
//                         <div className="form-container DemoLogin">
//                             <h3>Welcome Back</h3>
//                             <form onSubmit={handleLogin}>
//                                 <label className="from-label">email</label>
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     value={loginEmail}
//                                     onChange={(e) => setLoginEmail(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 <label className="from-label">password</label>
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={loginPassword}
//                                     onChange={(e) => setLoginPassword(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 <button type="submit" disabled={!signer} className="submit-btn login-btn">Login</button>
//                             </form>
//                         </div>
//                     )}

//                     {/* Register Form */}
//                     {!isLoginActive && (
//                         <div className="form-container DemoRegister">
//                             <h3>Create Account</h3>
//                             <form onSubmit={handleRegister}>
//                                 <label className="from-label">username</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Username"
//                                     value={registerUsername}
//                                     onChange={(e) => setRegisterUsername(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 <label className="from-label">email</label>
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     value={registerEmail}
//                                     onChange={(e) => setRegisterEmail(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 <label className="from-label">password</label>
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={registerPassword}
//                                     onChange={(e) => setRegisterPassword(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 <button type="submit" disabled={!signer} className="submit-btn register-btn">Register</button>
//                             </form>
//                         </div>
//                     )}
//                 </div>

//                 {/* Message */}
//                 {message && <div className="form-message">{message}</div>}

//                 {/* User data */}
//                 {userData && (
//                     <div className="user-data">
//                         <h4>Your Data:</h4>
//                         <p>Address: {userData.address}</p>
//                         <p>Email: {userData.email}</p>
//                         <p>Username: {userData.username}</p>
//                         <p>Credits: {userData.credits}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Demo;


import { useState, useEffect, useCallback } from "react"; // 🟢 Import useCallback
import { Link, useNavigate, useLocation } from "react-router-dom";
// 🟢 Import all necessary ethers components
import { BrowserProvider, Contract, formatUnits, ethers } from "ethers"; 
import contractABI from "./UserAuthABI"; 
import "../Styles/Demo.css";
import { sha256 } from 'js-sha256'; // 🟢 IMPORTED: sha256 for hashing

// Your contract's EVM address
const contractAddress = "0xdbc22b309b0c46e43c08d39c7f8acf119e091651";  
const HEDERA_TESTNET_CHAIN_ID = '0x128'; // 296

// 🟢 Hedera Testnet Configuration
const HEDERA_TESTNET_PARAMS = {
    chainId: HEDERA_TESTNET_CHAIN_ID, // 296
    chainName: 'Hedera Testnet',
    nativeCurrency: {
        name: 'HBAR',
        symbol: 'HBAR',
        decimals: 18,
    },
    rpcUrls: ['https://testnet.hashio.io/api'],
    blockExplorerUrls: ['https://hashscan.io/testnet/'],
};

const Demo = ({ 
    userData, 
    setUserData, 
    signer, 
    setSigner, 
    contract, 
    setContract, 
    message, 
    setMessage
}) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from || "/Dashboard";
    
    const initialRegisterActive = location.state?.registerActive || false;
    const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);

    // Input states
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // Immediate redirect if user session exists
    useEffect(() => {
        if (userData && userData.address && signer) { // Check for signer too
            navigate("/Dashboard", { replace: true });
        }
    }, [userData, signer, navigate]);

    // --- 1. Connection and Initialization ---
    // 🟢 FIX: Wrap in useCallback to prevent stale closures
    const connectAndSetup = useCallback(async () => {
        if (!setMessage || !setSigner || !setContract) {
            console.warn("connectAndSetup called before props were ready.");
            return; 
        }
        if (typeof window.ethereum === 'undefined') {
            setMessage("MetaMask is not installed. Please install it.");
            return;
        }

        try {
            const provider = new BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            
            const network = await provider.getNetwork();
            
            // 🟢 FIX: Handle wrong network
            if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
                setMessage("Wrong network. Attempting to add Hedera Testnet...");
                try {
                    // Attempt to add the Hedera Testnet
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [HEDERA_TESTNET_PARAMS],
                    });
                    // After adding, the 'chainChanged' listener will automatically 
                    // re-run connectAndSetup. We return here to wait for that.
                    return;
                } catch (addError) {
                    console.error("Failed to add Hedera Testnet:", addError);
                    setMessage("Failed to add/switch to Hedera Testnet. Please add it manually in MetaMask.");
                    return;
                }
            }

            const _signer = await provider.getSigner();
            setSigner(_signer); 
            
            const _contract = new Contract(contractAddress, contractABI, _signer);
            setContract(_contract); 

            setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);

        } catch (error) {
            console.error("MetaMask connection failed:", error);
            setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`);
        }
    }, [setMessage, setSigner, setContract]); // 🟢 Dependencies added

    // 🟢 FIX: Add connectAndSetup to the dependency array
    useEffect(() => {
        if (!signer) {
            connectAndSetup();
        }

        window.ethereum?.on('accountsChanged', connectAndSetup);
        window.ethereum?.on('chainChanged', connectAndSetup);

        return () => {
            window.ethereum?.removeListener('accountsChanged', connectAndSetup);
            window.ethereum?.removeListener('chainChanged', connectAndSetup);
        };
    }, [connectAndSetup, signer]); // 🟢 Dependencies added

    // --- 2. Register ---
    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!contract || !signer) {
            setMessage("Wallet not connected or contract not initialized.");
            return;
        }
        
        // 🟢 FIX: Hash the password before sending it
        const hashedPassword = sha256.hex(registerPassword);

        try {
            setMessage("Sending registration transaction... (Confirm in MetaMask)");
            
            // Send the HASH
            const txResponse = await contract.register(registerEmail, hashedPassword, registerUsername);
            setMessage(`Transaction sent: ${txResponse.hash}. Waiting for confirmation...`);

            const txReceipt = await txResponse.wait(); 
            
            if (txReceipt.status === 1) { 
                const creditTxResponse = await contract.requestCredits(100); 
                await creditTxResponse.wait();
                
                setMessage("Registration successful! 100 credits assigned. Switching to login.");
                
                setRegisterUsername("");
                setRegisterEmail("");
                setRegisterPassword("");
                setIsLoginActive(true);
            } else {
                setMessage("Transaction reverted. Registration failed.");
            }
        } catch (err) {
            console.error("Registration error:", err);
            setMessage(`Registration failed. Error: ${err.reason || err.message}`);
        }
    };

    // --- 3. Login ---
    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!contract || !signer) {
            setMessage("Wallet not connected or contract not initialized.");
            return;
        }
        
        if (!loginPassword || !loginEmail) {
            setMessage("Please enter both email and password.");
            return;
        }
        
        // 🟢 FIX: Hash the password
        const hashedPassword = sha256.hex(loginPassword);
        console.log("Client-side hash being sent:", hashedPassword); 

        try {
            const userEVMAddress = await signer.getAddress(); 
            
            setMessage("Checking account status...");
            // 🟢 FIX: Use array access for reliability
            const isBanned = await contract["getBannedStatus"](userEVMAddress);
            if (isBanned) {
                setMessage("🔴 Login failed. Your account has been banned from interaction.");
                return; 
            }
            
            setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

            // 🟢 Send the HASH
            const txResponse = await contract.login(loginEmail, loginPassword);
            const txReceipt = await txResponse.wait(); 

            if (txReceipt.status !== 1) {
                throw new Error("Login transaction failed on chain (status 0).");
            }
            
            setMessage("Login successful! Fetching user data...");

            // 4. Fetch User Data
            // 🟢 FIX: Corrected destructuring order (email, username, creationTime)
            const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
            
            // Fetch Credits
            const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
            
            // 🟢 FIX: Use toString() for internal credit counter (0 decimals)
            const creditsReadable = creditsBigInt.toString(); 
            
            // Prepare and update the state
            const newUserData = {
                address: userEVMAddress,
                email: email, 
                username: username,
                credits: creditsReadable,
                creationTime: creationTime.toString()
            };

            setMessage(`Login successful! Welcome back, ${username}.`);
            setUserData(newUserData); // This updates App.jsx and triggers the redirect
            
//            if (loginEmail === "admin@admin.admin") {
//     console.log("Redirecting to admin_dashboard");
//     navigate("/admin_dashboard", { replace: true });
// } else {
//     navigate(fromPage, { replace: true });
// }

//         if (loginEmail === "admin@admin.admin") {
//     console.log("Redirecting to admin_dashboard");

//     // Check if fromPage is set (i.e., the user came from a specific page)
//     if (fromPage) {
//         console.log("Redirecting to:", fromPage);
//         navigate(fromPage, { replace: true });
//     } else {
//         // If fromPage is not set, go directly to admin_dashboard
//         console.log("No fromPage set. Redirecting directly to admin_dashboard.");
//         navigate("/admin_dashboard", { replace: true });
//     }
// } else {
//     // For non-admin users, redirect to the page they came from or fallback to /handledevis
//     if (!loginEmail === "admin@admin.admin" && fromPage) {
//         console.log("Redirecting to:", fromPage);
//         navigate(fromPage, { replace: true });
//     } else {
//         console.log("Redirecting to handledevis");
//         navigate("/Dashboard", { replace: true });
//     }
// }

// if (loginEmail === "rocker_bell@email.co") {
//     console.log("Admin detected. Redirecting to admin_dashboard");

//     // Check if fromPage is set (i.e., the user came from a specific page)
//     if (fromPage) {
//         console.log("Redirecting to:", fromPage);
//         navigate(fromPage, { replace: true });
//     } else {
//         // If fromPage is not set, go directly to admin_dashboard
//         console.log("No fromPage set. Redirecting directly to admin_dashboard.");
//         navigate("/admin_dashboard", { replace: true });
//     }
// } else {
//     console.log("Non-admin detected. Handling normal login flow.");

//     // For non-admin users, redirect to the page they came from or fallback to /Dashboard
//     if (fromPage) {
//         console.log("Redirecting to:", fromPage);
//         navigate(fromPage, { replace: true });
//     } else {
//         console.log("Redirecting to Dashboard");
//         navigate("/Dashboard", { replace: true });
//     }
// }


console.log("loginEmail:", loginEmail);  // Check if loginEmail is correct

if (loginEmail === "rocker_bell@email.co") {
    console.log("Admin detected. Redirecting to admin_dashboard");

    // Check if fromPage is set (i.e., the user came from a specific page)
    if (fromPage) {
        console.log("fromPage is set to:", fromPage);
        navigate(fromPage, { replace: true });
    } else {
        // If fromPage is not set, go directly to admin_dashboard
        console.log("No fromPage set. Redirecting directly to admin_dashboard.");
        navigate("/admin_dashboard", { replace: true });
    }
} else {
    console.log("Non-admin detected. Handling normal login flow.");

    // For non-admin users, redirect to the page they came from or fallback to /Dashboard
    if (fromPage) {
        console.log("Redirecting to:", fromPage);
        navigate(fromPage, { replace: true });
    } else {
        console.log("Redirecting to Dashboard");
        navigate("/Dashboard", { replace: true });
    }
}

        } catch (err) {
            console.error("Login failed:", err);
            
            const revertReason = err.reason || (err.data && err.data.message) || err.message;
            
            if (revertReason.includes("Account is banned")) {
                 setMessage("🔴 Login failed. Your account is banned from interaction.");
            } else if (revertReason.includes("User not registered")) {
                setMessage("Login failed. The connected wallet is not registered.");
            } else if (revertReason.includes("Invalid email or password")) {
                setMessage("Login failed. Invalid email or password.");
            } else {
                setMessage(`Login failed. Check your wallet status. Error: ${revertReason}`); 
            }
        }
    };

    return (
        <div className="DemoWrapper">
            <Link to="/" className="back-link">← Back to Home</Link>

            <div className="ContainerLogin_register">
                <div className="toggle-container">
                    <button
                        className={`toggle-btn login-toggle ${isLoginActive ? "active" : ""}`}
                        onClick={() => setIsLoginActive(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`toggle-btn register-toggle ${!isLoginActive ? "active" : ""}`}
                        onClick={() => setIsLoginActive(false)}
                    >
                        Register
                    </button>
                </div>

                <div className="forms-container">
                    {/* Login Form */}
                    {isLoginActive && (
                        <div className="form-container DemoLogin">
                            <h3>Welcome Back</h3>
                            <form onSubmit={handleLogin}>
                                <label className="from-label">email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    required
                                    className="form-control"
                                />
                                <label className="from-label">password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    required
                                    className="form-control"
                                />
                                <button type="submit" disabled={!signer} className="submit-btn login-btn">Login</button>
                            </form>
                        </div>
                    )}

                    {/* Register Form */}
                    {!isLoginActive && (
                        <div className="form-container DemoRegister">
                            <h3>Create Account</h3>
                            <form onSubmit={handleRegister}>
                                <label className="from-label">username</label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={registerUsername}
                                    onChange={(e) => setRegisterUsername(e.target.value)}
                                    required
                                    className="form-control"
                                />
                                <label className="from-label">email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={registerEmail}
                                    onChange={(e) => setRegisterEmail(e.target.value)}
                                    required
                                    className="form-control"
                                />
                                <label className="from-label">password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={registerPassword}
                                    onChange={(e) => setRegisterPassword(e.target.value)}
                                    required
                                    className="form-control"
                                />
                                <button type="submit" disabled={!signer} className="submit-btn register-btn">Register</button>
                            </form>
                        </div>
                    )}
                </div>

                {/* Message */}
                {message && <div className="form-message">{message}</div>}

                {/* User data */}
                {userData && (
                    <div className="user-data">
                        <h4>Your Data:</h4>
                        <p>Address: {userData.address}</p>
                        <p>Email: {userData.email}</p>
                        <p>Username: {userData.username}</p>
                        <p>Credits: {userData.credits}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Demo;