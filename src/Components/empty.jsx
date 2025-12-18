// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { Client, PrivateKey, AccountId, ContractFunctionParameters } from "@hashgraph/sdk";
// import contractABI from "./UserAuthABI"; // Use the simplified ABI for Hedera smart contract
// import "../Styles/Demo.css";
// import { JsonRpcProvider } from "ethers";



// const contractAddress = "0x42a05014306386b823329f777eb09ec1f493d69c"; // Replace with your deployed contract address

// const Demo = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const initialRegisterActive = location.state?.registerActive || false;
//   const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);

//   // Input states
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [registerUsername, setRegisterUsername] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//   // Wallet and contract
//   const [client, setClient] = useState(null);
//   const [contract, setContract] = useState(null);

//   // User info and message
//   const [userData, setUserData] = useState(null);
//   const [message, setMessage] = useState("");

//   // Set up Hedera client and contract
//   // useEffect(() => {
//   //   const setup = async () => {
//   //     try {
//   //       // Check if HashPack is installed
//   //       if (typeof window.HashPack === 'undefined') {
//   //         alert("HashPack is not installed. Please install HashPack.");
//   //         setMessage("HashPack is required to interact with this app.");
//   //         return;
//   //       }

//   //       // Create Hedera client using HashPack's account
//   //       const accountId = window.HashPack.accountId; // The account ID connected via HashPack
//   //       const privateKey = window.HashPack.privateKey; // The private key connected via HashPack

//   //       // Initialize Hedera client
//   //       const _client = Client.forTestnet(); // Or use Client.forMainnet() if deploying on mainnet
//   //       _client.setOperator(accountId, privateKey);
//   //       setClient(_client);

//   //       // Set up contract interaction
//   //       const _contract = new ContractFunctionParameters(); // You will need to load your contract ABI here and interact with it.
//   //       setContract(_contract);
//   //     } catch (error) {
//   //       console.error("Error setting up Hedera client:", error);
//   //       setMessage("Hedera client setup failed. Check console.");
//   //     }
//   //   };

//   //   setup();
//   // }, []); // Runs once on component mount

// //   useEffect(() => {
// //   const setup = async () => {
// //     try {
// //       // Check if HashPack is installed
// //       if (typeof window.HashPack === 'undefined') {
// //         alert("HashPack is not installed. Please install HashPack.");
// //         setMessage("HashPack is required to interact with this app.");
// //         return;
// //       }

// //       // Create Hedera client using HashPack's account
// //       const accountId = window.HashPack.accountId; // The account ID connected via HashPack
// //       const privateKey = window.HashPack.privateKey; // The private key connected via HashPack

// //       // Initialize Hedera client
// //       const _client = Client.forTestnet(); // Or use Client.forMainnet() if deploying on mainnet
// //       _client.setOperator(accountId, privateKey);
// //       setClient(_client);

// //       // Initialize contract (you need to set this up according to your contract)
// //       const _contract = new ContractFunctionParameters(); // Replace with actual contract initialization
// //       setContract(_contract);

// //       console.log('Contract initialized:', _contract);
// //     } catch (error) {
// //       console.error("Error setting up Hedera client:", error);
// //       setMessage("Hedera client setup failed. Check console.");
// //     }
// //   };

// //   setup();
// // }, []); // Runs once on component mount

// // useEffect(() => {
// //   const setup = async () => {
// //     try {
// //       // Ensure HashPack is installed and accessible
// //       if (!window.HashPack) {
// //         alert("HashPack is not installed or loaded correctly.");
// //         setMessage("HashPack is required to interact with this app.");
// //         return;
// //       }

// //       // Check if the user is connected with HashPack
// //       const accountId = window.HashPack.accountId;
// //       const privateKey = window.HashPack.privateKey;

// //       if (!accountId || !privateKey) {
// //         alert("Please connect your HashPack wallet.");
// //         setMessage("HashPack is not connected.");
// //         return;
// //       }

// //       // Initialize Hedera Client
// //       const _client = Client.forTestnet(); // Use testnet or mainnet
// //       _client.setOperator(accountId, privateKey);

// //       setClient(_client); // Store client
// //       console.log('HashPack connected successfully');
// //     } catch (error) {
// //       console.error("Error setting up HashPack:", error);
// //       setMessage("Error setting up HashPack.");
// //     }
// //   };

// //   setup();
// // }, []); // Only run on component mount
// //   useEffect(() => {
// //   const setup = async () => {
// //     try {
// //       // Wait a bit for HashPack to load (this could be necessary in some cases)
// //       const checkHashPack = setInterval(() => {
// //         if (window.HashPack) {
// //           clearInterval(checkHashPack);
// //           initializeHashPack();
// //         }
// //       }, 1000); // Check every second

// //       // Set a timeout to stop retrying after 10 seconds to avoid infinite loop
// //       setTimeout(() => {
// //         clearInterval(checkHashPack);
// //         alert("HashPack is not available. Please make sure it is installed and connected.");
// //       }, 10000); // Stop checking after 10 seconds
// //     } catch (error) {
// //       console.error("Error setting up HashPack:", error);
// //       setMessage("HashPack setup failed.");
// //     }
// //   };

// //   const initializeHashPack = () => {
// //     if (typeof window.HashPack === 'undefined') {
// //       alert("HashPack is not installed. Please install HashPack.");
// //       setMessage("HashPack is required to interact with this app.");
// //       return;
// //     }

// //     const accountId = window.HashPack.accountId; // Get account ID
// //     const privateKey = window.HashPack.privateKey; // Get private key (if available)

// //     if (!accountId || !privateKey) {
// //       alert("HashPack account not found. Please connect your wallet.");
// //       setMessage("HashPack account not found. Please connect your wallet.");
// //       return;
// //     }

// //     console.log('HashPack is connected:', accountId);
// //     // Initialize Hedera client (adjust according to your requirements)
// //     const _client = Client.forTestnet();
// //     _client.setOperator(accountId, privateKey);
// //     setClient(_client);
// //   };

// //   setup();
// // }, []); // Runs once on component mount


//   // Handle registration
//   // const handleRegister = async (e) => {
//   //   e.preventDefault();
//   //   setMessage("");

//   //   try {
//   //     // HashPack will provide you the account from which to send the transaction
//   //     const tx = await contract.register(registerEmail, registerPassword, registerUsername);
//   //     await tx.wait(); // Wait for transaction confirmation
//   //     setMessage("Registration successful! 100 credits assigned.");

//   //     // Automatically request 100 credits if not already granted
//   //     await contract.requestCredits(100);

//   //     // Clear fields and switch to login
//   //     setRegisterUsername("");
//   //     setRegisterEmail("");
//   //     setRegisterPassword("");
//   //     setIsLoginActive(true);
//   //   } catch (err) {
//   //     console.error(err);
//   //     setMessage("Registration failed. Email might already exist.");
//   //   }
//   // };


//   useEffect(() => {
//   const setup = async () => {
//     try {
//       // Retry until HashPack is available or timeout after 10 seconds
//       let hashPackReady = false;
//       const intervalId = setInterval(() => {
//         if (window.HashPack) {
//           clearInterval(intervalId);
//           hashPackReady = true;
//           initializeHashPack();
//         }
//       }, 1000); // Retry every 1 second

//       // Timeout after 10 seconds if HashPack is not found
//       setTimeout(() => {
//         if (!hashPackReady) {
//           clearInterval(intervalId);
//           alert("HashPack is not available. Please ensure the extension is installed and connected.");
//           setMessage("HashPack is not available. Please install HashPack.");
//         }
//       }, 10000); // Timeout after 10 seconds

//     } catch (error) {
//       console.error("Error setting up HashPack:", error);
//       setMessage("HashPack setup failed.");
//     }
//   };

//   const initializeHashPack = () => {
//     try {
//       // Check if HashPack is loaded
//       if (!window.HashPack) {
//         alert("HashPack is not installed or loaded correctly.");
//         setMessage("HashPack is required to interact with this app.");
//         return;
//       }

//       // Extract the accountId and privateKey
//       const accountId = window.HashPack.accountId;
//       const privateKey = window.HashPack.privateKey;

//       if (!accountId || !privateKey) {
//         alert("HashPack account is not available. Please connect your wallet.");
//         setMessage("Please connect your HashPack wallet.");
//         return;
//       }

//       console.log('HashPack connected:', accountId);
//       // Initialize Hedera client
//       const _client = Client.forTestnet();
//       _client.setOperator(accountId, privateKey);
//       setClient(_client); // Store client

//     } catch (error) {
//       console.error("Error initializing HashPack:", error);
//       setMessage("HashPack setup failed.");
//     }
//   };

//   setup();
// }, []); // Runs once when the component is mounted


//   const handleRegister = async (e) => {
//   e.preventDefault();
//   setMessage("");

//   if (!contract) {
//     setMessage("Contract not initialized.");
//     return;
//   }

//   try {
//     const tx = await contract.register(registerEmail, registerPassword, registerUsername);
//     await tx.wait(); // Wait for transaction confirmation
//     setMessage("Registration successful! 100 credits assigned.");

//     // Automatically request 100 credits if not already granted
//     await contract.requestCredits(100);

//     // Clear fields and switch to login
//     setRegisterUsername("");
//     setRegisterEmail("");
//     setRegisterPassword("");
//     setIsLoginActive(true);
//   } catch (err) {
//     console.error(err);
//     setMessage("Registration failed. Email might already exist.");
//   }
// };


//   // Handle login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const isValid = await contract.login(loginEmail, loginPassword);
//       if (!isValid) {
//         setMessage("Invalid login credentials.");
//         return;
//       }

//       setMessage("Login successful!");

//       // Fetch user data
//       const [userAddress] = await contract.getUserInfo();
//       const [username, , credits] = await contract.getUserInfoByAddress(userAddress);

//       setUserData({
//         address: userAddress,
//         email: loginEmail,
//         username,
//         credits: credits.toString(),
//       });

//       navigate("/dashboard"); // Navigate to dashboard or show user data here
//     } catch (err) {
//       console.error(err);
//       setMessage("Login failed.");
//     }
//   };

//   return (
//     <div className="DemoWrapper">
//       <Link to="/" className="back-link">← Back to Home</Link>

//       <div className="ContainerLogin_register">
//         <div className="toggle-container">
//           <button
//             className={`toggle-btn ${isLoginActive ? "active" : ""}`}
//             onClick={() => setIsLoginActive(true)}
//           >
//             Login
//           </button>
//           <button
//             className={`toggle-btn ${!isLoginActive ? "active" : ""}`}
//             onClick={() => setIsLoginActive(false)}
//           >
//             Register
//           </button>
//         </div>

//         <div className="forms-container">
//           {/* Login Form */}
//           {isLoginActive && (
//             <div className="form-container DemoLogin">
//               <h3>Welcome Back</h3>
//               <form onSubmit={handleLogin}>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={loginEmail}
//                   onChange={(e) => setLoginEmail(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={loginPassword}
//                   onChange={(e) => setLoginPassword(e.target.value)}
//                   required
//                 />
//                 <button type="submit">Login</button>
//               </form>
//             </div>
//           )}

//           {/* Register Form */}
//           {!isLoginActive && (
//             <div className="form-container DemoRegister">
//               <h3>Create Account</h3>
//               <form onSubmit={handleRegister}>
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   value={registerUsername}
//                   onChange={(e) => setRegisterUsername(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={registerEmail}
//                   onChange={(e) => setRegisterEmail(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={registerPassword}
//                   onChange={(e) => setRegisterPassword(e.target.value)}
//                   required
//                 />
//                 <button type="submit">Register</button>
//               </form>
//             </div>
//           )}
//         </div>

//         {/* Message */}
//         {message && <div className="form-message">{message}</div>}

//         {/* User data after login */}
//         {userData && (
//           <div className="user-data">
//             <h4>Your Data:</h4>
//             <p>Address: {userData.address}</p>
//             <p>Email: {userData.email}</p>
//             <p>Username: {userData.username}</p>
//             <p>Credits: {userData.credits}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Demo;


// works

// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { BrowserProvider, Contract, formatUnits } from "ethers"; 
// import contractABI from "./UserAuthABI"; 
// import "../Styles/Demo.css";

// // Your contract's EVM address
// // const contractAddress = "0xf2a6c446c500088149cd315fb8096fccd39bec04";  
// const contractAddress = "0xdbc22b309b0c46e43c08d39c7f8acf119e091651";  

// // Hedera Testnet Chain ID (0x128 in hex)
// const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

// // 🟢 ACCEPT ALL REQUIRED STATE AND SETTERS AS PROPS from App.jsx
// const Demo = ({ 
//     userData, 
//     setUserData, // This is the setter we call to trigger App.jsx's useEffect
//     signer, 
//     setSigner, 
//     contract, 
//     setContract, 
//     message, 
//     setMessage // Assuming message is also centrally managed
// }) => {
    
//     const navigate = useNavigate();
//     const location = useLocation();
//     const DECIMALS = 18;
//     const initialRegisterActive = location.state?.registerActive || false;
//     // 🟢 Local UI state (isLoginActive) can remain local
//     const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);

//     // 🟢 Input states (must remain local)
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const [registerUsername, setRegisterUsername] = useState("");
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");

//     // --- 1. Connection and Initialization Logic ---
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
//                 setMessage("MetaMask is connected but on the wrong network. Please switch to **Hedera Testnet**.");
//                 return;
//             }

//             const _signer = await provider.getSigner();
//             setSigner(_signer); // 🟢 Use prop setter
            
//             const _contract = new Contract(contractAddress, contractABI, _signer);
//             setContract(_contract); // 🟢 Use prop setter

//             setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`); // 🟢 Use prop setter

//         } catch (error) {
//             console.error("MetaMask connection failed:", error);
//             setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`); // 🟢 Use prop setter
//         }
//     };

//     useEffect(() => {
//         connectAndSetup();

//         // Set up listeners for changes in accounts or network
//         window.ethereum?.on('accountsChanged', connectAndSetup);
//         window.ethereum?.on('chainChanged', connectAndSetup);

//         return () => {
//             // Clean up listeners on component unmount
//             window.ethereum?.removeListener('accountsChanged', connectAndSetup);
//             window.ethereum?.removeListener('chainChanged', connectAndSetup);
//         };
//     }, []); 

//     // --- 2. Handle Contract Write Functions (Register) ---
//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setMessage(""); // 🟢 Use prop setter

//         if (!contract || !signer) {
//             setMessage("Wallet not connected or contract not initialized."); // 🟢 Use prop setter
//             return;
//         }

//         try {
//             setMessage("Sending registration transaction... (Confirm in MetaMask)"); // 🟢 Use prop setter
            
//             const txResponse = await contract.register(registerEmail, registerPassword, registerUsername);
//             setMessage(`Transaction sent: ${txResponse.hash}. Waiting for confirmation...`); // 🟢 Use prop setter

//             const txReceipt = await txResponse.wait(); 
            
//             if (txReceipt.status === 1) { 
//                 // Assuming requestCredits is part of registration success logic, though it should ideally be handled by a transfer call in Solidity
//                 // Since the original code had it here, I'm keeping it for continuity, but this might need review.
//                 const creditTxResponse = await contract.requestCredits(100);
//                 await creditTxResponse.wait();
                
//                 setMessage("Registration successful! 100 credits assigned. Switching to login."); // 🟢 Use prop setter
                
//                 setRegisterUsername("");
//                 setRegisterEmail("");
//                 setRegisterPassword("");
//                 setIsLoginActive(true);
//             } else {
//                 setMessage("Transaction reverted. Registration failed."); // 🟢 Use prop setter
//             }
//         } catch (err) {
//             console.error("Registration error:", err);
//             setMessage(`Registration failed. Check console or error details: ${err.reason || err.message}`); // 🟢 Use prop setter
//         }
//     };




// const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (!contract || !signer) {
//         setMessage("Wallet not connected or contract not initialized.");
//         return;
//     }
    
//     if (!loginPassword || !loginEmail) {
//         setMessage("Please enter both email and password.");
//         return;
//     }

//     // --- 1. CRITICAL SECURITY FIX: HASH THE PASSWORD ---
//     // The previous code passed the raw password ('admin'). We MUST hash it.
//     // const hashedPassword = sha256.hex(loginPassword); // 👈 Correctly generates the hex hash string
//     console.log("Client-side hash being sent:", loginPassword); 
//     // ----------------------------------------------------

//     try {
//         const userEVMAddress = await signer.getAddress(); 
        
//         // --- 2. CHECK BANNED STATUS (VIEW FUNCTION) ---
//         setMessage("Checking account status...");
//         const isBanned = await contract.getBannedStatus(userEVMAddress);
//         if (isBanned) {
//             setMessage("🔴 Login failed. Your account has been banned from interaction.");
//             return; // Exit if banned
//         }
        
//         setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

//         // 3. Execute the login transaction with the CORRECT HASHED password
//         const txResponse = await contract.login(loginEmail, loginPassword);
//         const txReceipt = await txResponse.wait(); 

//         if (txReceipt.status !== 1) {
//             throw new Error("Login transaction failed on chain (status 0).");
//         }
        
//         setMessage("Login successful! Fetching user data...");

//         // 4. Fetch User Data
//         const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
        
//         // Fetch Credits (This returns the internal counter: 0, 100, 200, etc.)
//         const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
//         const credit = formatUnits(creditsBigInt, DECIMALS);
        
//         console.log("Raw Credits Value from Contract:", creditsBigInt);
//         console.log("Raw Credits Value from Contract:", credit);
        
//         // --- 🟢 CREDIT FIX: Using toString() on the BigInt (most reliable fix) ---
//         const creditsReadable = creditsBigInt.toString(); 
//         console.log("String Value sent to State:", creditsReadable);
//         // ------------------------------------------------------------------------
        
//         // Prepare and update the state
//         const newUserData = {
//             address: userEVMAddress,
//             email: email, 
//             username: username,
//             credits: credit,
//             creationTime: creationTime.toString()
//         };

//         setMessage(`Login successful! Welcome back, ${username}.`);
//         setUserData(newUserData); 
//         navigate("/Dashboard", { replace: true });
        
//     } catch (err) {
//         console.error("Login failed:", err);
        
//         const revertReason = err.reason || (err.data && err.data.message) || err.message;
        
//         if (revertReason.includes("Account is banned from interaction.")) {
//              setMessage("🔴 Login failed. Your account is banned from interaction.");
//         } else if (revertReason.includes("User not registered.")) {
//             setMessage("Login failed. The connected wallet is not registered.");
//         } else if (revertReason.includes("Invalid email or password.")) {
//             // NOTE: If this error appears after the HASHING FIX, the user must be REREGISTERED.
//             setMessage("Login failed. Invalid email or password. (Note: Try Reregistering after the update)");
//         } else {
//             setMessage(`Login failed. Check your wallet status. Error: ${revertReason}.`); 
//         }
//     }
// };
// // ...

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
//                                 <label htmlFor="" className="from-label">email</label>
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     value={loginEmail}
//                                     onChange={(e) => setLoginEmail(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 <label htmlFor="" className="from-label">password</label>
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={loginPassword}
//                                     onChange={(e) => setLoginPassword(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 {/* Check if signer PROP is available */}
//                                 <button type="submit" disabled={!signer} className="submit-btn login-btn">Login</button>
//                             </form>
//                         </div>
//                     )}

//                     {/* Register Form */}
//                     {!isLoginActive && (
//                         <div className="form-container DemoRegister">
//                             <h3>Create Account</h3>
//                             <label htmlFor="" className="from-label">username</label>
//                             <form onSubmit={handleRegister}>
//                                 <input
//                                     type="text"
//                                     placeholder="Username"
//                                     value={registerUsername}
//                                     onChange={(e) => setRegisterUsername(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 <label htmlFor="" className="from-label">email</label>
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     value={registerEmail}
//                                     onChange={(e) => setRegisterEmail(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 <label htmlFor="" className="from-label">password</label>
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={registerPassword}
//                                     onChange={(e) => setRegisterPassword(e.target.value)}
//                                     required
//                                     className="form-control"
//                                 />
//                                 {/* Check if signer PROP is available */}
//                                 <button type="submit" disabled={!signer} className="submit-btn register-btn">Register</button>
//                             </form>
//                         </div>
//                     )}
//                 </div>

//                 {/* Message */}
//                 {message && <div className="form-message">{message}</div>}

//                 {/* User data after login - Uses the userData PROP */}
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


// works 




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