// // import { useState, useRef, useEffect } from "react";
// // import { Link, useNavigate, useLocation } from "react-router-dom";
// // import "../Styles/Demo.css";

// // const Demo = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const initialRegisterActive = location.state?.registerActive || false;
// //   const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);
// //   const [startX, setStartX] = useState(0);
// //   const containerRef = useRef(null);

// //   // Input states
// //   const [loginEmail, setLoginEmail] = useState("");
// //   const [loginPassword, setLoginPassword] = useState("");
// //   const [registerUsername, setRegisterUsername] = useState("");
// //   const [registerEmail, setRegisterEmail] = useState("");
// //   const [registerPassword, setRegisterPassword] = useState("");

// //   // Message state
// //   const [message, setMessage] = useState("");

// //   // Swipe handlers
// //   const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
// //   const handleTouchMove = (e) => {
// //     if (!startX) return;
// //     const currentX = e.touches[0].clientX;
// //     const diff = startX - currentX;

// //     if (diff > 50 && isLoginActive) setIsLoginActive(false);
// //     else if (diff < -50 && !isLoginActive) setIsLoginActive(true);
// //     setStartX(0);
// //   };

// //   // Animate container transform on toggle
// //   useEffect(() => {
// //     if (containerRef.current) {
// //       containerRef.current.style.transition = "transform 0.3s ease-in-out";
// //       containerRef.current.style.transform = isLoginActive
// //         ? "translateX(0)"
// //         : "translateX(-100%)";
// //     }
// //   }, [isLoginActive]);

// //   // Mock login function
// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     // Simulate checking the login credentials
// //     if (loginEmail === "user@example.com" && loginPassword === "password123") {
// //       setMessage("Login successful!");
// //       console.log("Logged in user:", { email: loginEmail });
// //       navigate("/dashboard");
// //     } else {
// //       setMessage("Invalid login credentials.");
// //     }
// //   };

// //   // Mock register function
// //   const handleRegister = (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     // Simulate checking the registration details
// //     if (registerEmail === "user@example.com") {
// //       setMessage("Email already exists.");
// //     } else {
// //       setMessage("Registration successful! You can now log in.");
// //       setIsLoginActive(true); // Switch to login form

// //       // Clear inputs
// //       setRegisterUsername("");
// //       setRegisterEmail("");
// //       setRegisterPassword("");
// //     }
// //   };

// //   return (
// //     <div className="DemoWrapper">
// //       <Link to="/" className="back-link">← Back to Home</Link>

// //       <div className="ContainerLogin_register">
// //         <div className="toggle-container">
// //           <button
// //             className={`toggle-btn ${isLoginActive ? "active" : ""}`}
// //             onClick={() => setIsLoginActive(true)}
// //           >
// //             Login
// //           </button>
// //           <button
// //             className={`toggle-btn ${!isLoginActive ? "active" : ""}`}
// //             onClick={() => setIsLoginActive(false)}
// //           >
// //             Register
// //           </button>
// //         </div>

// //         <div
// //           className="login_register_container"
// //           ref={containerRef}
// //           onTouchStart={handleTouchStart}
// //           onTouchMove={handleTouchMove}
// //         >
// //           {/* Login Form */}
// //           <div className={`form-container DemoLogin ${isLoginActive ? "active" : ""}`}>
// //             <h3>Welcome Back</h3>
// //             <form className="DemoLoginForm" onSubmit={handleLogin}>
// //               <div className="form-group">
// //                 <label htmlFor="loginEmail" className="form-label">Email</label>
// //                 <input
// //                   type="email"
// //                   id="loginEmail"
// //                   className="form-control"
// //                   placeholder="Enter your email"
// //                   value={loginEmail}
// //                   onChange={(e) => setLoginEmail(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="loginPassword" className="form-label">Password</label>
// //                 <input
// //                   type="password"
// //                   id="loginPassword"
// //                   className="form-control"
// //                   placeholder="Enter your password"
// //                   value={loginPassword}
// //                   onChange={(e) => setLoginPassword(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <button type="submit" className="submit-btn submit-login-password">Sign In</button>
// //             </form>
// //           </div>

// //           {/* Register Form */}
// //           <div className={`form-container DemoRegister ${!isLoginActive ? "active" : ""}`}>
// //             <h3>Create Account</h3>
// //             <form className="DemoRegisterForm" onSubmit={handleRegister}>
// //               <div className="form-group">
// //                 <label htmlFor="registerUsername" className="form-label">Username</label>
// //                 <input
// //                   type="text"
// //                   id="registerUsername"
// //                   className="form-control"
// //                   placeholder="Enter your username"
// //                   value={registerUsername}
// //                   onChange={(e) => setRegisterUsername(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="registerEmail" className="form-label">Email</label>
// //                 <input
// //                   type="email"
// //                   id="registerEmail"
// //                   className="form-control"
// //                   placeholder="Enter your email"
// //                   value={registerEmail}
// //                   onChange={(e) => setRegisterEmail(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="registerPassword" className="form-label">Password</label>
// //                 <input
// //                   type="password"
// //                   id="registerPassword"
// //                   className="form-control"
// //                   placeholder="Create a password"
// //                   value={registerPassword}
// //                   onChange={(e) => setRegisterPassword(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <button type="submit" className="submit-btn submit-Register-password">Register</button>
// //             </form>
// //           </div>
// //         </div>

// //         {/* Swipe indicator */}
// //         <div className="swipe-indicator">
// //           <span>Swipe {isLoginActive ? "left" : "right"}</span>
// //           <div className="swipe-dots">
// //             <div className={`swipe-dot ${isLoginActive ? "active" : ""}`}></div>
// //             <div className={`swipe-dot ${!isLoginActive ? "active" : ""}`}></div>
// //           </div>
// //         </div>

// //         {/* Feedback message */}
// //         {message && <div className="form-message">{message}</div>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Demo;


// import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../Styles/Demo.css";

// const Demo = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const initialRegisterActive = location.state?.registerActive || false;
//   const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);
//   const [startX, setStartX] = useState(0);
//   const containerRef = useRef(null);

//   // Input states
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [registerUsername, setRegisterUsername] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//   // Message state
//   const [message, setMessage] = useState("");

//   // Swipe handlers
//   const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
//   const handleTouchMove = (e) => {
//     if (!startX) return;
//     const currentX = e.touches[0].clientX;
//     const diff = startX - currentX;

//     if (diff > 50 && isLoginActive) {
//       setIsLoginActive(false);
//     } else if (diff < -50 && !isLoginActive) {
//       setIsLoginActive(true);
//     }
//     setStartX(0);
//   };

//   // Animate container transform on toggle
//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.style.transition = "transform 0.3s ease-in-out";
//       containerRef.current.style.transform = isLoginActive
//         ? "translateX(0)"
//         : "translateX(-100%)";
//     }
//   }, [isLoginActive]);

//   // Mock login function
//   const handleLogin = (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (loginEmail === "user@example.com" && loginPassword === "password123") {
//       setMessage("Login successful!");
//       console.log("Logged in user:", { email: loginEmail });
//       navigate("/dashboard");
//     } else {
//       setMessage("Invalid login credentials.");
//     }
//   };

//   // Mock register function
//   const handleRegister = (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (registerEmail === "user@example.com") {
//       setMessage("Email already exists.");
//     } else {
//       setMessage("Registration successful! You can now log in.");
//       setIsLoginActive(true);

//       setRegisterUsername("");
//       setRegisterEmail("");
//       setRegisterPassword("");
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

//         <div
//           className="forms-container"
//           ref={containerRef}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//         >
//           <div className="forms-inner">
//             {/* Login Form */}
//             <div className="form-container DemoLogin">
//               <h3>Welcome Back</h3>
//               <form className="DemoLoginForm" onSubmit={handleLogin}>
//                 <div className="form-group">
//                   <label htmlFor="loginEmail" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     id="loginEmail"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     value={loginEmail}
//                     onChange={(e) => setLoginEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="loginPassword" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     id="loginPassword"
//                     className="form-control"
//                     placeholder="Enter your password"
//                     value={loginPassword}
//                     onChange={(e) => setLoginPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="submit-btn submit-login-password">Sign In</button>
//               </form>
//             </div>

//             {/* Register Form */}
//             <div className="form-container DemoRegister">
//               <h3>Create Account</h3>
//               <form className="DemoRegisterForm" onSubmit={handleRegister}>
//                 <div className="form-group">
//                   <label htmlFor="registerUsername" className="form-label">Username</label>
//                   <input
//                     type="text"
//                     id="registerUsername"
//                     className="form-control"
//                     placeholder="Enter your username"
//                     value={registerUsername}
//                     onChange={(e) => setRegisterUsername(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="registerEmail" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     id="registerEmail"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     value={registerEmail}
//                     onChange={(e) => setRegisterEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="registerPassword" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     id="registerPassword"
//                     className="form-control"
//                     placeholder="Create a password"
//                     value={registerPassword}
//                     onChange={(e) => setRegisterPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="submit-btn submit-Register-password">Register</button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Swipe indicator */}
//         <div className="swipe-indicator">
//           <span>Swipe {isLoginActive ? "left" : "right"}</span>
//           <div className="swipe-dots">
//             <div className={`swipe-dot ${isLoginActive ? "active" : ""}`}></div>
//             <div className={`swipe-dot ${!isLoginActive ? "active" : ""}`}></div>
//           </div>
//         </div>

//         {/* Feedback message */}
//         {message && <div className="form-message">{message}</div>}
//       </div>
//     </div>
//   );
// };

// export default Demo;


// import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ethers } from "ethers";
// import contractABI from './UserAuthABI';  // ABI of your deployed contract
// import "../Styles/Demo.css";

// const contractAddress = "0xf2a6c446c500088149cd315fb8096fccd39bec04";  // Replace with your actual deployed contract address

// const Demo = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const initialRegisterActive = location.state?.registerActive || false;
//   const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);
//   const [startX, setStartX] = useState(0);
//   const containerRef = useRef(null);

//   // Input states
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [registerUsername, setRegisterUsername] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//   // Message state
//   const [message, setMessage] = useState("");

//   // Wallet and contract initialization
//   const [provider, setProvider] = useState(null);
//   const [contract, setContract] = useState(null);

//   // Set up the provider and contract when the component mounts
//   useEffect(() => {
//     const setup = async () => {
//       // Initialize Ethereum provider (e.g., MetaMask)
//       const _provider = new ethers.providers.Web3Provider(window.ethereum);
//       setProvider(_provider);

//       // Create contract instance
//       const _contract = new ethers.Contract(contractAddress, contractABI, _provider.getSigner());
//       setContract(_contract);
//     };

//     setup();
//   }, []);

//   // Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const isValid = await contract.login(loginEmail, loginPassword);
//       if (isValid) {
//         setMessage("Login successful!");

//         // Fetch user info (email, address, username)
//         const [userAddress, userEmail] = await contract.getUserInfo();
//         const username = await contract.getUserInfoByAddress(userAddress);
//         console.log("User Info:", { email: userEmail, address: userAddress, username });

//         // Redirect to the dashboard (or another page)
//         navigate("/dashboard");
//       } else {
//         setMessage("Invalid login credentials.");
//       }
//     } catch (error) {
//       setMessage("Error logging in.");
//       console.error(error);
//     }
//   };

//   // Handle Register
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const tx = await contract.register(registerEmail, registerPassword, registerUsername);
//       await tx.wait();  // Wait for the transaction to be mined

//       setMessage("Registration successful! You can now log in.");
//       setIsLoginActive(true); // Switch to login form

//       // Clear input fields
//       setRegisterUsername("");
//       setRegisterEmail("");
//       setRegisterPassword("");
//     } catch (error) {
//       setMessage("Error registering. Make sure the email is unique.");
//       console.error(error);
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

//         <div
//           className="forms-container"
//           ref={containerRef}
//         >
//           <div className="forms-inner">
//             {/* Login Form */}
//             <div className="form-container DemoLogin">
//               <h3>Welcome Back</h3>
//               <form className="DemoLoginForm" onSubmit={handleLogin}>
//                 <div className="form-group">
//                   <label htmlFor="loginEmail" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     id="loginEmail"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     value={loginEmail}
//                     onChange={(e) => setLoginEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="loginPassword" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     id="loginPassword"
//                     className="form-control"
//                     placeholder="Enter your password"
//                     value={loginPassword}
//                     onChange={(e) => setLoginPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="submit-btn submit-login-password">Sign In</button>
//               </form>
//             </div>

//             {/* Register Form */}
//             <div className="form-container DemoRegister">
//               <h3>Create Account</h3>
//               <form className="DemoRegisterForm" onSubmit={handleRegister}>
//                 <div className="form-group">
//                   <label htmlFor="registerUsername" className="form-label">Username</label>
//                   <input
//                     type="text"
//                     id="registerUsername"
//                     className="form-control"
//                     placeholder="Enter your username"
//                     value={registerUsername}
//                     onChange={(e) => setRegisterUsername(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="registerEmail" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     id="registerEmail"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     value={registerEmail}
//                     onChange={(e) => setRegisterEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="registerPassword" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     id="registerPassword"
//                     className="form-control"
//                     placeholder="Create a password"
//                     value={registerPassword}
//                     onChange={(e) => setRegisterPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="submit-btn submit-Register-password">Register</button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Feedback message */}
//         {message && <div className="form-message">{message}</div>}
//       </div>
//     </div>
//   );
// };

// export default Demo;


// import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ethers } from "ethers";
// import contractABI from "./UserAuthABI"; // Use the simplified ABI from above
// import "../Styles/Demo.css";

// const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address

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
//   const [provider, setProvider] = useState(null);
//   const [contract, setContract] = useState(null);

//   // User info and message
//   const [userData, setUserData] = useState(null);
//   const [message, setMessage] = useState("");

//   // Set up provider and contract
//   // useEffect(() => {
//   //   const setup = async () => {
//   //     if (!window.ethereum) {
//   //       setMessage("Please install MetaMask!");
//   //       return;
//   //     }
//   //     const _provider = new ethers.providers.Web3Provider(window.ethereum);
//   //     await _provider.send("eth_requestAccounts", []);
//   //     setProvider(_provider);

//   //     const _contract = new ethers.Contract(
//   //       contractAddress,
//   //       contractABI,
//   //       _provider.getSigner()
//   //     );
//   //     setContract(_contract);
//   //   };
//   //   setup();
//   // }, []);

// //   useEffect(() => {
// //   const setup = async () => {
// //     try {
// //       if (!window.ethereum) {
// //         alert("MetaMask is not installed. Please install it to continue.");
// //         return;
// //       }

// //       // Initialize Ethereum provider
// //       const _provider = new ethers.providers.Web3Provider(window.ethereum);
// //       setProvider(_provider);

// //       // Request wallet connection
// //       await _provider.send("eth_requestAccounts", []);

// //       // Create contract instance
// //       const _contract = new ethers.Contract(contractAddress, contractABI, _provider.getSigner());
// //       setContract(_contract);
// //     } catch (error) {
// //       console.error("Error setting up Web3:", error);
// //       setMessage("Web3 setup failed. Check console for details.");
// //     }
// //   };

// //   setup();
// // }, []);

// useEffect(() => {
//   const setup = async () => {
//     try {
//       if (!window.ethereum) {
//         alert("MetaMask not found. Please install MetaMask.");
//         return;
//       }

//       const _provider = new ethers.providers.Web3Provider(window.ethereum);
//       setProvider(_provider);

//       await _provider.send("eth_requestAccounts", []);

//       const _contract = new ethers.Contract(contractAddress, contractABI, _provider.getSigner());
//       setContract(_contract);
//     } catch (error) {
//       console.error("Error setting up Web3:", error);
//       setMessage("Web3 setup failed. Check console.");
//     }
//   };

//   setup();
// }, []);


//   // Handle registration
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const tx = await contract.register(
//         registerEmail,
//         registerPassword,
//         registerUsername
//       );
//       await tx.wait();
//       setMessage("Registration successful! 100 credits assigned.");

//       // Automatically request 100 credits if not already granted
//       await contract.requestCredits(100);

//       // Clear fields and switch to login
//       setRegisterUsername("");
//       setRegisterEmail("");
//       setRegisterPassword("");
//       setIsLoginActive(true);
//     } catch (err) {
//       console.error(err);
//       setMessage("Registration failed. Email might already exist.");
//     }
//   };

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

//       navigate("/dashboard"); // or just show data here
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


// import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ethers } from "ethers";
// import contractABI from "./UserAuthABI"; // Use the simplified ABI from above
// import "../Styles/Demo.css";

// const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address

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
//   const [provider, setProvider] = useState(null);
//   const [contract, setContract] = useState(null);

//   // User info and message
//   const [userData, setUserData] = useState(null);
//   const [message, setMessage] = useState("");

//   // Set up provider and contract
//   // useEffect(() => {
//   //   const setup = async () => {
//   //     try {
//   //       if (!window.ethereum) {
//   //         alert("MetaMask not found. Please install MetaMask.");
//   //         return;
//   //       }

//   //       const _provider = new ethers.providers.Web3Provider(window.ethereum);
//   //       setProvider(_provider);

//   //       await _provider.send("eth_requestAccounts", []);

//   //       const _contract = new ethers.Contract(contractAddress, contractABI, _provider.getSigner());
//   //       setContract(_contract);
//   //     } catch (error) {
//   //       console.error("Error setting up Web3:", error);
//   //       setMessage("Web3 setup failed. Check console.");
//   //     }
//   //   };

//   //   setup();
//   // }, []);

//   useEffect(() => {
//   const setup = async () => {
//     try {
//       // Check if MetaMask or an Ethereum provider is available
//       if (typeof window.ethereum === 'undefined') {
//         alert("MetaMask not found. Please install MetaMask.");
//         setMessage("MetaMask is required to interact with this app.");
//         return;
//       }

//       const _provider = new ethers.providers.Web3Provider(window.ethereum);
//       setProvider(_provider);

//       // Request account access if not already granted
//       await _provider.send("eth_requestAccounts", []);

//       // Create contract instance with the provider
//       const _contract = new ethers.Contract(contractAddress, contractABI, _provider.getSigner());
//       setContract(_contract);

//     } catch (error) {
//       console.error("Error setting up Web3:", error);
//       setMessage("Web3 setup failed. Check console.");
//     }
//   };

//   setup();
// }, []); // Runs once on component mount


//   // Handle registration
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const tx = await contract.register(
//         registerEmail,
//         registerPassword,
//         registerUsername
//       );
//       await tx.wait();
//       setMessage("Registration successful! 100 credits assigned.");

//       // Automatically request 100 credits if not already granted
//       await contract.requestCredits(100);

//       // Clear fields and switch to login
//       setRegisterUsername("");
//       setRegisterEmail("");
//       setRegisterPassword("");
//       setIsLoginActive(true);
//     } catch (err) {
//       console.error(err);
//       setMessage("Registration failed. Email might already exist.");
//     }
//   };

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

//       navigate("/dashboard"); // or just show data here
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



// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// // We don't need @hashgraph/sdk when using MetaMask/Ethers.js for signing
// import { BrowserProvider, Contract } from "ethers"; 
// import contractABI from "./UserAuthABI"; // Your simplified ABI array
// import "../Styles/Demo.css";

// // Your contract's EVM address (must be the 0x... format)
// // const contractAddress = "0x42a05014306386b823329f777eb09ec1f493d69c";
// const contractAddress = "0xf2a6c446c500088149cd315fb8096fccd39bec04";  

// // Hedera Testnet Chain ID (0x128 in hex)
// const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

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

//   // Wallet and contract states
//   const [signer, setSigner] = useState(null); // The connected account/signer
//   const [contract, setContract] = useState(null); // The Ethers Contract object for WRITING/READING

//   // User info and message
//   const [userData, setUserData] = useState(null);
//   const [message, setMessage] = useState("Connecting to MetaMask...");

//   // --- 1. Connection and Initialization Logic ---
//   const connectAndSetup = async () => {
//     if (typeof window.ethereum === 'undefined') {
//       setMessage("MetaMask is not installed. Please install it.");
//       return;
//     }

//     try {
//       // 1. Create a Provider using MetaMask's injected object
//       const provider = new BrowserProvider(window.ethereum);
      
//       // Request account access and switch to the correct network (if needed)
//       await provider.send("eth_requestAccounts", []);
      
//       const network = await provider.getNetwork();
//       if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
//         setMessage("MetaMask is connected but on the wrong network. Please switch to **Hedera Testnet**.");
//         return;
//       }

//       // 2. Get the Signer (for signing transactions)
//       const _signer = await provider.getSigner();
//       setSigner(_signer);

//       // 3. Initialize the Contract: Use the Signer for both read/write access.
//       // Ethers handles the differentiation: view/pure methods are free, state-mutating methods require signing.
//       const _contract = new Contract(contractAddress, contractABI, _signer);
//       setContract(_contract);

//       setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);

//     } catch (error) {
//       console.error("MetaMask connection failed:", error);
//       setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`);
//     }
//   };

//   useEffect(() => {
//     connectAndSetup();

//     // Set up listeners for changes in accounts or network
//     window.ethereum?.on('accountsChanged', connectAndSetup);
//     window.ethereum?.on('chainChanged', connectAndSetup);

//     return () => {
//       // Clean up listeners on component unmount
//       window.ethereum?.removeListener('accountsChanged', connectAndSetup);
//       window.ethereum?.removeListener('chainChanged', connectAndSetup);
//     };
//   }, []); 

//   // --- 2. Handle Contract Write Functions (Register) ---
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (!contract || !signer) {
//       setMessage("Wallet not connected or contract not initialized.");
//       return;
//     }

//     try {
//       setMessage("Sending registration transaction... (Confirm in MetaMask)");
      
//       // 1. Call the 'register' function. MetaMask will prompt the user to sign.
//       const txResponse = await contract.register(registerEmail, registerPassword, registerUsername);
//       setMessage(`Transaction sent: ${txResponse.hash}. Waiting for confirmation...`);

//       // 2. Wait for the transaction receipt
//       const txReceipt = await txResponse.wait(); 
      
//       if (txReceipt.status === 1) { 
//         // 3. Request Credits (assuming this is a separate transaction)
//         const creditTxResponse = await contract.requestCredits(100);
//         await creditTxResponse.wait();
        
//         setMessage("Registration successful! 100 credits assigned. Switching to login.");
        
//         // Clear fields and switch to login
//         setRegisterUsername("");
//         setRegisterEmail("");
//         setRegisterPassword("");
//         setIsLoginActive(true);
//       } else {
//          setMessage("Transaction reverted. Registration failed.");
//       }
//     } catch (err) {
//       console.error("Registration error:", err);
//       setMessage(`Registration failed. Check console or error details: ${err.reason || err.message}`);
//     }
//   };


//   // --- 3. Handle Contract Read/Write Functions (Login) ---
//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   setMessage("");

//   //   if (!contract || !signer) {
//   //       setMessage("Wallet not connected or contract not initialized.");
//   //       return;
//   //   }

//   //   try {
//   //     // 1. Call the 'login' function. 
//   //     // NOTE: We assume 'login' is a state-mutating function that saves login time
//   //     // (like getMyLoginHistory implies) or else it should be 'view'. 
//   //     // If it mutates state, it requires a transaction/signature.
//   //     setMessage("Sending login transaction... (Confirm in MetaMask)");

//   //     const txResponse = await contract.login(loginEmail, loginPassword);
//   //     await txResponse.wait();

//   //     setMessage("Login successful! Fetching user data...");

//   //     // 2. Fetch required user data (using read calls)
//   //     const userEVMAddress = await signer.getAddress(); 

//   //     // Function 8: getUserInfoByAddress(address userAddress) view returns (string, string, uint256)
//   //     const [username, email, credits] = await contract.getUserInfoByAddress(userEVMAddress);
      
//   //     // Note: We ignore the 'email' return from the contract and use the one typed, 
//   //     // or you can use the fetched one.

//   //     setUserData({
//   //       address: userEVMAddress,
//   //       email: loginEmail,
//   //       username,
//   //       credits: credits.toString(), 
//   //     });

//   //     console.log(userData)

//   //     navigate("/Dashboard", { 
//   //           state: { user: userData } // Optional: Pass user data to the dashboard page
//   //       });

//   //     // Navigate("/dashboard"); // Uncomment this if you want to navigate
//   //   } catch (err) {
//   //     console.error("Login failed:", err);
//   //     setMessage(`Login failed. Check console or error details: ${err.reason || err.message}`);
//   //   }
//   // };

// // --- 3. Handle Contract Read/Write Functions (Login) ---
// // const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     if (!contract || !signer) {
// //         setMessage("Wallet not connected or contract not initialized.");
// //         return;
// //     }

// //     try {
// //         // 1. Call the 'login' function. 
// //         setMessage("Sending login transaction... (Confirm in MetaMask)");

// //         const txResponse = await contract.login(loginEmail, loginPassword);
// //         await txResponse.wait();

// //         setMessage("Login successful! Fetching user data...");

// //         // 2. Fetch required user data (using read calls)
// //         const userEVMAddress = await signer.getAddress(); 

// //         // Function 8: getUserInfoByAddress(address userAddress) view returns (string, string, uint256)
// //         const [username, email, credits] = await contract.getUserInfoByAddress(userEVMAddress);
        
// //         // 🟢 FIX 1: Define the new user data object locally
// //         const newUserData = {
// //             address: userEVMAddress,
// //             email: loginEmail,
// //             username,
// //             credits: credits.toString(), 
// //         };

// //         // 🟢 FIX 2: Set the state with the NEW data
// //         setUserData(newUserData);

// //         // 🟢 FIX 3: Log the correct, up-to-date local object
// //         console.log("Logged-in User Data:", newUserData);

// //         // 🟢 FIX 4: Use the correct local object for navigation state
// //         setTimeout(() => {
// //     navigate("/Dashboard", { 
// //         state: { user: newUserData } 
// //     });
// // }, 50);

// //     } catch (err) {
// //         console.error("Login failed:", err);
// //         const revertReason = err.reason || (err.data && err.data.message) || err.message;
// //         setMessage(`Login failed. Error: ${revertReason}.`);
// //     }
// // };


// // --- 3. Handle Contract Read/Write Functions (Login) ---
// const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (!contract || !signer) {
//         setMessage("Wallet not connected or contract not initialized.");
//         return;
//     }

//     try {
//         // ... (Contract interaction logic remains the same) ...

//         const txResponse = await contract.login(loginEmail, loginPassword);
//         await txResponse.wait();

//         setMessage("Login successful! Redirecting...");

//         // 2. Fetch required user data (using read calls)
//         const userEVMAddress = await signer.getAddress(); 
//         const [username, email, credits] = await contract.getUserInfoByAddress(userEVMAddress);
        
//         const newUserData = {
//             address: userEVMAddress,
//             email: loginEmail,
//             username,
//             credits: credits.toString(), 
//         };

//         // 🟢 ONLY update the state here. DO NOT navigate.
//         setUserData(newUserData); 
        
//         // ❌ Remove the setTimeout and navigate("/Dashboard", ...) call from here.

//     } catch (err) {
//         console.error("Login failed:", err);
//         const revertReason = err.reason || (err.data && err.data.message) || err.message;
//         setMessage(`Login failed. Error: ${revertReason}.`);
//     }
// };

//   return (
//     <div className="DemoWrapper">
//       {/* ... (Your JSX render structure remains the same) ... */}
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
//                 <button type="submit" disabled={!signer}>Login</button>
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
//                 <button type="submit" disabled={!signer}>Register</button>
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


// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { BrowserProvider, Contract } from "ethers"; 
// import contractABI from "./UserAuthABI"; 
// import "../Styles/Demo.css";

// // Your contract's EVM address
// const contractAddress = "0xf2a6c446c500088149cd315fb8096fccd39bec04";  

// // Hedera Testnet Chain ID (0x128 in hex)
// const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

// // 🟢 FIX 1: ACCEPT ALL REQUIRED STATE AND SETTERS AS PROPS from App.jsx
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

//     const initialRegisterActive = location.state?.registerActive || false;
//     // 🟢 Local UI state (isLoginActive) can remain local
//     const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);

//     // 🟢 Input states (must remain local)
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const [registerUsername, setRegisterUsername] = useState("");
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");

//     // ❌ REMOVED: Local useState declarations for userData, signer, contract, and message.
//     // They are now props.

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


//     // --- 3. Handle Contract Read/Write Functions (Login) ---
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setMessage(""); // 🟢 Use prop setter

//         if (!contract || !signer) {
//             setMessage("Wallet not connected or contract not initialized."); // 🟢 Use prop setter
//             return;
//         }

//         try {
//             setMessage("Sending login transaction... (Confirm in MetaMask)"); // 🟢 Use prop setter

//             const txResponse = await contract.login(loginEmail, loginPassword);
//             await txResponse.wait();

//             setMessage("Login successful! Redirecting..."); // 🟢 Use prop setter

//             const userEVMAddress = await signer.getAddress(); 
//             const [username, email, credits] = await contract.getUserInfoByAddress(userEVMAddress);
            
//             const newUserData = {
//                 address: userEVMAddress,
//                 email: loginEmail,
//                 username,
//                 credits: credits.toString(), 
//             };

//             // 🟢 FIX 2: Call the parent's setter function! This triggers the App.jsx useEffect.
//             setUserData(newUserData); 
            
//             // ❌ Navigation is handled by App.jsx's useEffect, so no navigation here.

//         } catch (err) {
//             console.error("Login failed:", err);
//             const revertReason = err.reason || (err.data && err.data.message) || err.message;
//             setMessage(`Login failed. Error: ${revertReason}.`); // 🟢 Use prop setter
//         }
//     };

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


//     // --- 3. Handle Contract Read/Write Functions (Login) ---
//     // const handleLogin = async (e) => {
//     //     e.preventDefault();
//     //     setMessage(""); // 🟢 Use prop setter

//     //     if (!contract || !signer) {
//     //         setMessage("Wallet not connected or contract not initialized."); // 🟢 Use prop setter
//     //         return;
//     //     }

//     //     try {
//     //         setMessage("Sending login transaction... (Confirm in MetaMask)"); // 🟢 Use prop setter

//     //         // 1. Execute the login transaction
//     //         const txResponse = await contract.login(loginEmail, loginPassword);
//     //         await txResponse.wait();

//     //         setMessage("Login successful! Fetching user data..."); // 🟢 Use prop setter

//     //         // 2. Get the connected user's address
//     //         const userEVMAddress = await signer.getAddress(); 
            
//     //         // 3. Fetch user info from the contract
//     //         // 🔴 FIXED DESTUCTURING ORDER: (email, username, credits) to match the contract's observed return order
//     //         const [email, username, credits] = await contract.getUserInfoByAddress(userEVMAddress);
            
//     //         // 4. Prepare the new user data object
//     //         const newUserData = {
//     //             address: userEVMAddress,
//     //             // Use the fetched data which is now correctly named
//     //             email: email, 
//     //             username: username,
//     //             credits: credits.toString(), 
//     //         };

//     //         // 5. Update the parent state, triggering the redirect via App.jsx's useEffect
//     //         setUserData(newUserData); 
            
//     //     } catch (err) {
//     //         console.error("Login failed:", err);
//     //         const revertReason = err.reason || (err.data && err.data.message) || err.message;
//     //         setMessage(`Login failed. Error: ${revertReason}.`); // 🟢 Use prop setter
//     //     }
//     // };

// //     const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     if (!contract || !signer) {
// //         setMessage("Wallet not connected or contract not initialized.");
// //         return;
// //     }

// //     try {
// //         setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

// //         // 1. Execute the login transaction
// //         const txResponse = await contract.login(loginEmail, loginPassword);
        
// //         // Wait for the transaction to be mined
// //         const txReceipt = await txResponse.wait(); 

// //         // 💡 FIX 1: The correct way to read the return value of a transaction 
// //         // using ethers is often complex. A simpler method is to assume if the 
// //         // transaction didn't revert, the login was successful, or use a custom check.
        
// //         // Check if the transaction successfully executed (status === 1)
// //         if (txReceipt.status !== 1) {
// //             throw new Error("Login transaction failed on chain.");
// //         }
        
// //         // 💡 Better Approach (Relying on the contract's structure and the error block):
// //         // Since the contract returns false on failed credentials (instead of reverting), 
// //         // we must call the function with .callStatic to get the return value BEFORE the transaction.
// //         // OR, we stick with the security fix from the previous response:
        
// //         // --------------------------------------------------------------------------
// //         // Reverting back to the secure approach (Must implement in Solidity):
// //         // If the credentials are WRONG, the contract MUST REVERT (not return false).
// //         // Since your current contract returns FALSE, let's use a SIMPLER read check first
// //         // to see if the user is registered, and then rely on the DApp to assume success.
// //         // --------------------------------------------------------------------------
        
// //         // 1. Get the connected user's address
// //         const userEVMAddress = await signer.getAddress(); 
        
// //         // 2. Fetch user info (This will revert if the address is not registered)
// //         // 🔴 FIX 2: Using the OBSERVED return order: (email, username, creationTime)
// //         // Note: Your contract's getUserInfoByAddress returns (email, username, creationTime), NOT credits!
// //         const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
        
// //         // 3. Fetch Credits separately using the correct function
// //         const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
// //         const creditsReadable = ethers.formatUnits(creditsBigInt, 18);
        
// //         // 4. Prepare and update the state
// //         const newUserData = {
// //             address: userEVMAddress,
// //             email: email, 
// //             username: username,
// //             credits: creditsReadable, 
// //             creationTime: creationTime.toString()
// //         };

// //         setMessage("Login successful! Redirecting to Dashboard...");
// //         setUserData(newUserData); 
        
// //     } catch (err) {
// //         // --- ERROR BRANCH (This handles transaction failures, including the 'User not registered' require) ---
// //         console.error("Login failed:", err);
        
// //         const revertReason = err.reason || (err.data && err.data.message) || err.message;
        
// //         if (revertReason.includes("User not registered.")) {
// //             setMessage("Login failed. The connected wallet is not registered.");
// //         } else {
// //             // This is where wrong credentials fall through if the contract returns FALSE instead of reverting.
// //             // Since the transaction succeeded but the contract returned false, the app *should* not proceed.
// //             // However, since we are fetching data AFTER the transaction, we must assume the contract
// //             // *DID* perform the credential check and the success confirms the login.
// //             // The only reason the data fetch fails is if the wallet isn't registered.
// //             setMessage(`Login failed. Check your credentials or wallet status. Error: ${revertReason}.`); 
// //         }
        
// //         // Do NOT set newUserData, thus blocking navigation.
// //     }
// // };

//     // --- 3. Handle Contract Read/Write Functions (Login) ---
// // const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     if (!contract || !signer) {
// //         setMessage("Wallet not connected or contract not initialized.");
// //         return;
// //     }

// //     try {
// //         setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

// //         // 1. Execute the login transaction (Credential check occurs in Solidity)
// //         const txResponse = await contract.login(loginEmail, loginPassword);
// //         const txReceipt = await txResponse.wait(); 

// //         if (txReceipt.status !== 1) {
// //             throw new Error("Login transaction failed on chain.");
// //         }
        
// //         setMessage("Login successful! Fetching user data...");

// //         // 1. Get the connected user's address
// //         const userEVMAddress = await signer.getAddress(); 
        
// //         // 2. Fetch user info (email, username, creationTime)
// //         const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
        
// //         // 3. Fetch Credits separately
// //         const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
        
// //         // 🟢 FIX: Use formatUnits directly
// //         const creditsReadable = formatUnits(creditsBigInt, 18); // Assumes 18 decimals for the token
        
// //         // 4. Prepare and update the state
// //         const newUserData = {
// //             address: userEVMAddress,
// //             email: email, 
// //             username: username,
// //             credits: creditsReadable, 
// //             creationTime: creationTime.toString()
// //         };

// //         setMessage("Login successful! Redirecting to Dashboard...");
// //         setUserData(newUserData); 
        
// //     } catch (err) {
// //         // ... (Error handling remains the same)
// //         console.error("Login failed:", err);
        
// //         const revertReason = err.reason || (err.data && err.data.message) || err.message;
        
// //         if (revertReason.includes("User not registered.")) {
// //             setMessage("Login failed. The connected wallet is not registered.");
// //         } else {
// //             setMessage(`Login failed. Check your credentials or wallet status. Error: ${revertReason}.`); 
// //         }
// //     }
// // };

// // NOTE: You must have a hashing utility imported for this to work.
// // e.g., import { sha256 } from 'js-sha256';
// // e.g., import { formatUnits } from 'ethers'; // Assuming formatUnits is available

// // const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     if (!contract || !signer) {
// //         setMessage("Wallet not connected or contract not initialized.");
// //         return;
// //     }
    
// //     // --- 1. CRITICAL: HASH THE PASSWORD CLIENT-SIDE ---
// //     // The contract expects the hash, not the plain password.
// //     if (!loginPassword || !loginEmail) {
// //         setMessage("Please enter both email and password.");
// //         return;
// //     }
// //     const hashedPassword = loginPassword;
// // console.log("Client-side hash being sent:", hashedPassword); // ⚠️ ASSUMES sha256 UTILITY IS AVAILABLE ⚠️
// //     // ----------------------------------------------------

// //     try {
// //         const userEVMAddress = await signer.getAddress(); 
        
// //         // --- 2. CHECK BANNED STATUS (VIEW FUNCTION) ---
// //         // Check the ban status before attempting the transaction to save gas if banned.
// //         setMessage("Checking account status...");
// //         const isBanned = await contract.getBannedStatus(userEVMAddress);
// //         if (isBanned) {
// //             setMessage("🔴 Login failed. Your account has been banned from interaction.");
// //             return; // Exit if banned
// //         }
// //         // ---------------------------------------------
        
// //         setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

// //         // 3. Execute the login transaction with the HASHED password
// //         // The contract will revert if email/hash are wrong or if the user is banned (due to the notBanned modifier)
// //         const txResponse = await contract.login(loginEmail, hashedPassword);
// //         const txReceipt = await txResponse.wait(); 

// //         if (txReceipt.status !== 1) {
// //             throw new Error("Login transaction failed on chain (status 0).");
// //         }
        
// //         setMessage("Login successful! Fetching user data...");

// //         // 4. Fetch User Data (These are view calls, no gas needed)
        
// //         // Fetch user info (email, username, creationTime)
// //         const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
        
// //         // Fetch Credits
// //         const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
// // console.log("Raw Credits Value from Contract:", creditsBigInt); // 👈 Check this value!

// // const creditsReadable = creditsBigInt.toString(); 
// // console.log("String Value sent to State:", creditsReadable); // 👈 Should show '200'
        
        
// //         // Prepare and update the state
// //         const newUserData = {
// //             address: userEVMAddress,
// //             email: email, 
// //             username: username,
// //             // 🟢 FIX: Ensure formatUnits is defined or imported from 'ethers'
// //             credits: creditsReadable,
// //             creationTime: creationTime.toString()
// //         };

// //         setMessage(`Login successful! Welcome back, ${username}.`);
// //         setUserData(newUserData); 
        
// //     } catch (err) {
// //         console.error("Login failed:", err);
        
// //         // --- 5. ENHANCED ERROR HANDLING ---
// //         const revertReason = err.reason || (err.data && err.data.message) || err.message;
        
// //         if (revertReason.includes("Account is banned from interaction.")) {
// //              // This catches the revert from the Solidity 'notBanned' modifier
// //              setMessage("🔴 Login failed. Your account is banned from interaction.");
// //         } else if (revertReason.includes("User not registered.")) {
// //             setMessage("Login failed. The connected wallet is not registered.");
// //         } else if (revertReason.includes("Invalid email or password.")) {
// //              // This catches the specific revert from the contract's login check
// //              setMessage("Login failed. Invalid email or password.");
// //         } else {
// //             setMessage(`Login failed. Check your credentials or wallet status. Error: ${revertReason}.`); 
// //         }
// //     }
// // };


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



// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { BrowserProvider, Contract, formatUnits } from "ethers"; 
// import contractABI from "./UserAuthABI"; 
// import "../Styles/Demo.css";

// // NOTE: You must import 'sha256' from 'js-sha256' for the handleLogin function to be secure.
// // import { sha256 } from 'js-sha256'; // <-- Assuming this is imported elsewhere or handled off-screen

// // Your contract's EVM address
// const contractAddress = "0xdbc22b309b0c46e43c08d39c7f8acf119e091651";  

// // Hedera Testnet Chain ID (0x128 in hex)
// const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

// // 🟢 ACCEPT ALL REQUIRED STATE AND SETTERS AS PROPS from App.jsx
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
//     const DECIMALS = 18;
//     const initialRegisterActive = location.state?.registerActive || false;
//     const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);

//     // 🟢 Input states (must remain local)
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const [registerUsername, setRegisterUsername] = useState("");
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");

//     // --- 🟢 IMMEDIATE REDIRECT CHECK (REPLACES localStorage logic here) ---
//     // If userData is available (meaning App.jsx restored it from localStorage), 
//     // immediately navigate to the Dashboard to prevent the Demo page from flashing.
//     useEffect(() => {
//         if (userData && userData.address) {
//             navigate("/Dashboard", { replace: true });
//             setMessage("Session restored. Welcome back!");
//         }
//     }, [userData, navigate, setMessage]);
//     // ---------------------------------------------------------------------


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

//         // NOTE: Password hashing must be applied here before sending to the contract!
//         // const hashedPassword = sha256.hex(registerPassword); 
        
//         try {
//             setMessage("Sending registration transaction... (Confirm in MetaMask)"); // 🟢 Use prop setter
            
//             // Assuming registerPassword is actually the HASHED password in the final version
//             const txResponse = await contract.register(registerEmail, registerPassword, registerUsername);
//             setMessage(`Transaction sent: ${txResponse.hash}. Waiting for confirmation...`); // 🟢 Use prop setter

//             const txReceipt = await txResponse.wait(); 
            
//             if (txReceipt.status === 1) { 
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


//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         if (!contract || !signer) {
//             setMessage("Wallet not connected or contract not initialized.");
//             return;
//         }
        
//         if (!loginPassword || !loginEmail) {
//             setMessage("Please enter both email and password.");
//             return;
//         }

//         // NOTE: Password hashing must be applied here before sending to the contract!
//         // const hashedPassword = sha256.hex(loginPassword); 
//         // console.log("Client-side hash being sent:", hashedPassword); 

//         try {
//             const userEVMAddress = await signer.getAddress(); 
            
//             setMessage("Checking account status...");
//             const isBanned = await contract.getBannedStatus(userEVMAddress);
//             if (isBanned) {
//                 setMessage("🔴 Login failed. Your account has been banned from interaction.");
//                 return; 
//             }
            
//             setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

//             // Assuming loginPassword is the HASHED password in the final version
//             const txResponse = await contract.login(loginEmail, loginPassword); 
//             const txReceipt = await txResponse.wait(); 

//             if (txReceipt.status !== 1) {
//                 throw new Error("Login transaction failed on chain (status 0).");
//             }
            
//             setMessage("Login successful! Fetching user data...");

//             // 4. Fetch User Data
//             const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
            
//             // Fetch Credits
//             const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
//             // This is the correct way to format if credits is a standard ERC20 with 18 decimals.
//             // If it's a simple integer counter (e.g., 100, 200), use creditsBigInt.toString()
//             const credit = formatUnits(creditsBigInt, DECIMALS); 
            
//             // Prepare and update the state
//             const newUserData = {
//                 address: userEVMAddress,
//                 email: email, 
//                 username: username,
//                 credits: credit,
//                 creationTime: creationTime.toString()
//             };

//             setMessage(`Login successful! Welcome back, ${username}.`);
//             setUserData(newUserData); // 🟢 CRITICAL: This updates App.jsx state, saving to localStorage
//             navigate("/Dashboard", { replace: true }); // 🟢 Navigate to Dashboard on successful login
            
//         } catch (err) {
//             console.error("Login failed:", err);
            
//             const revertReason = err.reason || (err.data && err.data.message) || err.message;
            
//             if (revertReason.includes("Account is banned from interaction.")) {
//                  setMessage("🔴 Login failed. Your account is banned from interaction.");
//             } else if (revertReason.includes("User not registered.")) {
//                 setMessage("Login failed. The connected wallet is not registered.");
//             } else if (revertReason.includes("Invalid email or password.")) {
//                 setMessage("Login failed. Invalid email or password. (Note: Try Reregistering after the update)");
//             } else {
//                 setMessage(`Login failed. Check your wallet status. Error: ${revertReason}.`); 
//             }
//         }
//     };

//     // --- Component JSX (Rendering) ---

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


import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BrowserProvider, Contract, formatUnits } from "ethers"; 
import contractABI from "./UserAuthABI"; 
import "../Styles/Demo.css";

// Your contract's EVM address
const contractAddress = "0xdbc22b309b0c46e43c08d39c7f8acf119e091651";  

// Hedera Testnet Chain ID (0x128 in hex)
const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

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

    const DECIMALS = 18;
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
        if (userData && userData.address) {
            navigate("/Dashboard", { replace: true });
            setMessage("Session restored. Welcome back!");
        }
    }, [userData, navigate, setMessage]);

    // --- 1. Connection and Initialization ---
    const connectAndSetup = async () => {
        if (typeof window.ethereum === 'undefined') {
            setMessage("MetaMask is not installed. Please install it.");
            return;
        }

        try {
            const provider = new BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            
            const network = await provider.getNetwork();
            if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
                setMessage("MetaMask is connected but on the wrong network. Please switch to Hedera Testnet.");
                return;
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
    };

    useEffect(() => {
        connectAndSetup();

        window.ethereum?.on('accountsChanged', connectAndSetup);
        window.ethereum?.on('chainChanged', connectAndSetup);

        return () => {
            window.ethereum?.removeListener('accountsChanged', connectAndSetup);
            window.ethereum?.removeListener('chainChanged', connectAndSetup);
        };
    }, []); 

    // --- 2. Register ---
    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!contract || !signer) {
            setMessage("Wallet not connected or contract not initialized.");
            return;
        }

        try {
            setMessage("Sending registration transaction... (Confirm in MetaMask)");
            
            const txResponse = await contract.register(registerEmail, registerPassword, registerUsername);
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

    //     try {
    //         const userEVMAddress = await signer.getAddress(); 
            
    //         setMessage("Checking account status...");

    //         // ⚡ Use dynamic call to avoid ethers.js proxy issues
    //         const isBanned = await contract["getBannedStatus"](userEVMAddress);
    //         if (isBanned) {
    //             setMessage("🔴 Login failed. Your account has been banned from interaction.");
    //             return; 
    //         }
            
    //         setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

    //         const txResponse = await contract.login(loginEmail, loginPassword); 
    //         const txReceipt = await txResponse.wait(); 

    //         if (txReceipt.status !== 1) {
    //             throw new Error("Login transaction failed on chain.");
    //         }
            
    //         setMessage("Login successful! Fetching user data...");

    //         const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
            
    //         const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
    //         const credit = formatUnits(creditsBigInt, DECIMALS); 
            
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
            
    //         if (revertReason.includes("Account is banned")) {
    //              setMessage("🔴 Login failed. Your account is banned from interaction.");
    //         } else if (revertReason.includes("User not registered")) {
    //             setMessage("Login failed. The connected wallet is not registered.");
    //         } else if (revertReason.includes("Invalid email or password")) {
    //             setMessage("Login failed. Invalid email or password.");
    //         } else {
    //             setMessage(`Login failed. Check your wallet status. Error: ${revertReason}`);
    //         }
    //     }
    // };

//     const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (!signer) {
//         setMessage("Wallet not connected yet.");
//         return;
//     }

//     const userEVMAddress = await signer.getAddress();

//     // Use a read-only contract to avoid TypeError
//     const provider = new BrowserProvider(window.ethereum);
//     const contractReadOnly = new Contract(contractAddress, contractABI, provider);

//     try {
//         const isBanned = await contractReadOnly.getBannedStatus(userEVMAddress);
//         if (isBanned) {
//             setMessage("🔴 Login failed. Your account has been banned.");
//             return;
//         }

//         // proceed with login transaction using signer
//         const contractTx = new Contract(contractAddress, contractABI, signer);
//         const txResponse = await contractTx.login(loginEmail, loginPassword);
//         await txResponse.wait();

//         setMessage("Login successful!");
//          setUserData(newUserData);
//         navigate("/Dashboard", { replace: true });
//     } catch (err) {
//         console.error("Login failed:", err);
//         setMessage(`Login failed: ${err.message}`);
//     }
// };

const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!signer) {
        setMessage("Wallet not connected yet.");
        return;
    }

    const userEVMAddress = await signer.getAddress();

    // Read-only contract for view functions
    const provider = new BrowserProvider(window.ethereum);
    const contractReadOnly = new Contract(contractAddress, contractABI, provider);

    try {
        // Check banned status
        const isBanned = await contractReadOnly.getBannedStatus(userEVMAddress);
        if (isBanned) {
            setMessage("🔴 Login failed. Your account has been banned.");
            return;
        }

        // State-changing login transaction
        const contractTx = new Contract(contractAddress, contractABI, signer);
        const txResponse = await contractTx.login(loginEmail, loginPassword);
        const txReceipt = await txResponse.wait();
        if (txReceipt.status !== 1) {
            throw new Error("Login transaction failed on-chain.");
        }

        setMessage("Login successful! Fetching user data...");

        // --- Fetch user data from contract ---
        const [email, username, creationTime] = await contractReadOnly.getUserInfoByAddress(userEVMAddress);
        const creditsBigInt = await contractReadOnly.checkUserCredit(userEVMAddress);
        const credit = formatUnits(creditsBigInt, 18); // adjust decimals if needed

        const newUserData = {
            address: userEVMAddress,
            email,
            username,
            credits: credit,
            creationTime: creationTime.toString(),
        };

        setUserData(newUserData); // This updates App.jsx and triggers the redirect
        // navigate("/Dashboard", { replace: true }); // now this will actually run
        navigate(fromPage, { replace: true })

    } catch (err) {
        console.error("Login failed:", err);
        const revertReason = err.reason || (err.data && err.data.message) || err.message;
        setMessage(`Login failed: ${revertReason}`);
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



// import { useState, useEffect, useCallback } from "react"; // 🟢 Import useCallback
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { BrowserProvider, Contract, formatUnits, ethers } from "ethers"; // 🟢 Import ethers for toBigInt
// import contractABI from "./UserAuthABI"; 
// import "../Styles/Demo.css";
// import { sha256 } from 'js-sha256'; // 🟢 IMPORTED: sha256 for hashing

// // Your contract's EVM address
// const contractAddress = "0xdbc22b309b0c46e43c08d39c7f8acf119e091651";  
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
    
//     // 🔴 REMOVED: DECIMALS = 18. The internal credit is 0 decimals.
    
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
//             // setMessage("Session restored. Welcome back!"); // Removed to avoid message conflict
//         }
//     }, [userData, navigate, setMessage]);

//     // --- 1. Connection and Initialization ---
//     // 🟢 FIX: Wrap in useCallback and provide dependencies
//     const connectAndSetup = useCallback(async () => {
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
//             setSigner(_signer); // This prop is now stable
            
//             const _contract = new Contract(contractAddress, contractABI, _signer);
//             setContract(_contract); // This prop is now stable

//             setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);

//         } catch (error) {
//             console.error("MetaMask connection failed:", error);
//             setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`);
//         }
//     }, [setMessage, setSigner, setContract]); // 🟢 Dependencies added

//     // 🟢 FIX: Add connectAndSetup to the dependency array
//     useEffect(() => {
//         // We only run connectAndSetup if the signer isn't already set from the parent
//         if (!signer) {
//             connectAndSetup();
//         }

//         window.ethereum?.on('accountsChanged', connectAndSetup);
//         window.ethereum?.on('chainChanged', connectAndSetup);

//         return () => {
//             window.ethereum?.removeListener('accountsChanged', connectAndSetup);
//             window.ethereum?.removeListener('chainChanged', connectAndSetup);
//         };
//     }, [connectAndSetup, signer]); // 🟢 Dependency added

//     // --- 2. Register ---
//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         if (!contract || !signer) {
//             setMessage("Wallet not connected or contract not initialized.");
//             return;
//         }
        
//         // 🟢 FIX: Hash the password before sending it
//         const hashedPassword = sha256.hex(registerPassword);

//         try {
//             setMessage("Sending registration transaction... (Confirm in MetaMask)");
            
//             // Send the HASH, not the plain password
//             const txResponse = await contract.register(registerEmail, hashedPassword, registerUsername);
//             setMessage(`Transaction sent: ${txResponse.hash}. Waiting for confirmation...`);

//             const txReceipt = await txResponse.wait(); 
            
//             if (txReceipt.status === 1) { 
//                 // We assume requestCredits is part of the UserAuth contract
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

//     // --- 3. Login (Using the last known correct version) ---
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         if (!contract || !signer) {
//             setMessage("Wallet not connected or contract not initialized.");
//             return;
//         }
        
//         if (!loginPassword || !loginEmail) {
//             setMessage("Please enter both email and password.");
//             return;
//         }
        
//         // 🟢 FIX: Hash the password
//         const hashedPassword = sha256.hex(loginPassword);
//         console.log("Client-side hash being sent:", loginPassword); 

//         try {
//             const userEVMAddress = await signer.getAddress(); 
            
//             setMessage("Checking account status...");
//             // 🟢 FIX: Use array access for reliability
//             const isBanned = await contract["getBannedStatus"](userEVMAddress);
//             if (isBanned) {
//                 setMessage("🔴 Login failed. Your account has been banned from interaction.");
//                 return; 
//             }
            
//             setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

//             // 🟢 Send the HASH
//             const txResponse = await contract.login(loginEmail, loginPassword);
//             const txReceipt = await txResponse.wait(); 

//             if (txReceipt.status !== 1) {
//                 throw new Error("Login transaction failed on chain (status 0).");
//             }
            
//             setMessage("Login successful! Fetching user data...");

//             // 4. Fetch User Data
//             // 🟢 FIX: Corrected destructuring order (email, username, creationTime)
//             const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
            
//             // Fetch Credits
//             const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
//             console.log("Raw Credits Value from Contract:", creditsBigInt);

//             // 🟢 FIX: Use toString() for internal credit counter (0 decimals)
//             const creditsReadable = creditsBigInt.toString(); 
//             console.log("String Value sent to State:", creditsReadable);
            
//             // Prepare and update the state
//             const newUserData = {
//                 address: userEVMAddress,
//                 email: email, 
//                 username: username,
//                 credits: creditsReadable,
//                 creationTime: creationTime.toString()
//             };

//             setMessage(`Login successful! Welcome back, ${username}.`);
//             setUserData(newUserData); 
            
//             // 🟢 FIX: Explicitly navigate on success
//             navigate("/Dashboard", { replace: true });
            
//         } catch (err) {
//             console.error("Login failed:", err);
            
//             const revertReason = err.reason || (err.data && err.data.message) || err.message;
            
//             if (revertReason.includes("Account is banned")) {
//                  setMessage("🔴 Login failed. Your account is banned from interaction.");
//             } else if (revertReason.includes("User not registered")) {
//                 setMessage("Login failed. The connected wallet is not registered.");
//             } else if (revertReason.includes("Invalid email or password")) {
//                 setMessage("Login failed. Invalid email or password.");
//             } else {
//                 setMessage(`Login failed. Check your wallet status. Error: ${revertReason}`); 
//             }
//         }
//     };

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


// import { useState, useEffect, useCallback } from "react"; // 🟢 Import useCallback
// import { Link, useNavigate, useLocation } from "react-router-dom";
// // 🟢 Import all necessary ethers components
// import { BrowserProvider, Contract, formatUnits, ethers } from "ethers"; 
// import contractABI from "./UserAuthABI"; 
// import "../Styles/Demo.css";
// import { sha256 } from 'js-sha256'; // 🟢 IMPORTED: sha256 for hashing

// // Your contract's EVM address
// const contractAddress = "0xdbc22b309b0c46e43c08d39c7f8acf119e091651";  
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
//         }
//     }, [userData, navigate]);

//     // --- 1. Connection and Initialization ---
//     // 🟢 FIX: Wrap in useCallback and provide dependencies
//     const connectAndSetup = useCallback(async () => {
//         // Check if props are available (prevents error if App.jsx hasn't passed them yet)
//         if (!setMessage || !setSigner || !setContract) {
//             console.warn("connectAndSetup called before props were ready.");
//             return; 
//         }

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
//             setSigner(_signer); // This prop is now stable
            
//             const _contract = new Contract(contractAddress, contractABI, _signer);
//             setContract(_contract); // This prop is now stable

//             setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);

//         } catch (error) {
//             console.error("MetaMask connection failed:", error);
//             setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`);
//         }
//     // 🟢 Dependencies added: The function remakes itself if these setters change
//     }, [setMessage, setSigner, setContract]); 

//     // 🟢 FIX: Add connectAndSetup to the dependency array
//     useEffect(() => {
//         // Only run connect if signer isn't already set (e.g., from parent)
//         if (!signer) {
//             connectAndSetup();
//         }

//         window.ethereum?.on('accountsChanged', connectAndSetup);
//         window.ethereum?.on('chainChanged', connectAndSetup);

//         return () => {
//             window.ethereum?.removeListener('accountsChanged', connectAndSetup);
//             window.ethereum?.removeListener('chainChanged', connectAndSetup);
//         };
//     }, [connectAndSetup, signer]); // 🟢 Dependency added

//     // --- 2. Register ---
//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         if (!contract || !signer) {
//             setMessage("Wallet not connected or contract not initialized.");
//             return;
//         }
        
//         // 🟢 FIX: Hash the password before sending it
//         const hashedPassword = sha256.hex(registerPassword);

//         try {
//             setMessage("Sending registration transaction... (Confirm in MetaMask)");
            
//             // Send the HASH, not the plain password
//             const txResponse = await contract.register(registerEmail, hashedPassword, registerUsername);
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
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         if (!contract || !signer) {
//             setMessage("Wallet not connected or contract not initialized.");
//             return;
//         }
        
//         if (!loginPassword || !loginEmail) {
//             setMessage("Please enter both email and password.");
//             return;
//         }
        
//         // 🟢 FIX: Hash the password
//         const hashedPassword = sha256.hex(loginPassword);
//         console.log("Client-side hash being sent:", hashedPassword); 

//         try {
//             const userEVMAddress = await signer.getAddress(); 
            
//             setMessage("Checking account status...");
//             // 🟢 FIX: Use array access for reliability
//             const isBanned = await contract["getBannedStatus"](userEVMAddress);
//             if (isBanned) {
//                 setMessage("🔴 Login failed. Your account has been banned from interaction.");
//                 return; 
//             }
            
//             setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

//             // 🟢 Send the HASH
//             const txResponse = await contract.login(loginEmail, hashedPassword);
//             const txReceipt = await txResponse.wait(); 

//             if (txReceipt.status !== 1) {
//                 throw new Error("Login transaction failed on chain (status 0).");
//             }
            
//             setMessage("Login successful! Fetching user data...");

//             // 4. Fetch User Data
//             // 🟢 FIX: Corrected destructuring order (email, username, creationTime)
//             const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
            
//             // Fetch Credits
//             const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
//             console.log("Raw Credits Value from Contract:", creditsBigInt);

//             // 🟢 FIX: Use toString() for internal credit counter (0 decimals)
//             const creditsReadable = creditsBigInt.toString(); 
//             console.log("String Value sent to State:", creditsReadable);
            
//             // Prepare and update the state
//             const newUserData = {
//                 address: userEVMAddress,
//                 email: email, 
//                 username: username,
//                 credits: creditsReadable,
//                 creationTime: creationTime.toString()
//             };

//             setMessage(`Login successful! Welcome back, ${username}.`);
//             setUserData(newUserData); 
            
//             // 🟢 FIX: Explicitly navigate on success (App.jsx will persist the state)
//             navigate("/Dashboard", { replace: true });
            
//         } catch (err) {
//             console.error("Login failed:", err);
            
//             const revertReason = err.reason || (err.data && err.data.message) || err.message;
            
//             if (revertReason.includes("Account is banned")) {
//                  setMessage("🔴 Login failed. Your account is banned from interaction.");
//             } else if (revertReason.includes("User not registered")) {
//                 setMessage("Login failed. The connected wallet is not registered.");
//             } else if (revertReason.includes("Invalid email or password")) {
//                 setMessage("Login failed. Invalid email or password.");
//             } else {
//                 setMessage(`Login failed. Check your wallet status. Error: ${revertReason}`); 
//             }
//         }
//     };

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


// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// // 🟢 Import ethers utilities
// import { ethers, formatUnits } from "ethers"; 
// import { sha256 } from 'js-sha256'; // 🟢 Make sure you have run: npm i js-sha256
// import contractABI from "./UserAuthABI"; 
// import "../Styles/Demo.css";

// // 🟢 ACCEPT PROPS: contract, creditTokenContract, and connectAndSetup
// const Demo = ({ 
//     userData, 
//     setUserData,
//     signer, 
//     contract, // This is the UserAuth contract
//     creditTokenContract,
//     message, 
//     setMessage,
//     connectAndSetup // 🟢 The connection function from App.jsx
// }) => {
    
//     const navigate = useNavigate();
//     const location = useLocation();
    
//     const initialRegisterActive = location.state?.registerActive || false;
//     const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);

//     // Input states
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const [registerUsername, setRegisterUsername] = useState("");
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");

//     // 🟢 IMMEDIATE REDIRECT CHECK 
//     useEffect(() => {
//         // If userData exists (from localStorage) AND the signer is connected, redirect
//         if (userData && userData.address && signer) {
//             navigate("/Dashboard", { replace: true });
//         }
//     }, [userData, signer, navigate]);
    
//     // 🔴 REMOVED: connectAndSetup and its useEffect. 
//     // App.jsx now handles this.

//     // --- 2. Register ---
//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         if (!contract || !signer) {
//             setMessage("Please connect wallet first using the button below.");
//             return;
//         }
        
//         // 🟢 Hash the password
//         const hashedPassword = sha256.hex(registerPassword);

//         try {
//             setMessage("Sending registration transaction... (Confirm in MetaMask)");
            
//             const txResponse = await contract.register(registerEmail, hashedPassword, registerUsername);
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
//     //         setMessage("Please connect wallet first using the button below.");
//     //         return;
//     //     }
        
//     //     if (!loginPassword || !loginEmail) {
//     //         setMessage("Please enter both email and password.");
//     //         return;
//     //     }
        
//     //     // 🟢 Hash the password
//     //     const hashedPassword = sha256.hex(loginPassword);
//     //     console.log("Client-side hash being sent:", hashedPassword); 

//     //     try {
//     //         const userEVMAddress = await signer.getAddress(); 
            
//     //         setMessage("Checking account status...");
//     //         // 🟢 Use array access for reliability
//     //         const isBanned = await contract["getBannedStatus"](userEVMAddress);
//     //         if (isBanned) {
//     //             setMessage("🔴 Login failed. Your account has been banned from interaction.");
//     //             return; 
//     //         }
            
//     //         setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

//     //         // 🟢 Send the HASH
//     //         const txResponse = await contract.login(loginEmail, hashedPassword);
//     //         const txReceipt = await txResponse.wait(); 

//     //         if (txReceipt.status !== 1) {
//     //             throw new Error("Login transaction failed on chain (status 0).");
//     //         }
            
//     //         setMessage("Login successful! Fetching user data...");

//     //         // 4. Fetch User Data
//     //         // 🟢 Corrected destructuring order (email, username, creationTime)
//     //         const [email, username, creationTime] = await contract.getUserInfoByAddress(userEVMAddress);
            
//     //         // Fetch Credits
//     //         const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
            
//     //         // 🟢 Use toString() for internal credit counter (0 decimals)
//     //         const creditsReadable = creditsBigInt.toString(); 
            
//     //         // Prepare and update the state
//     //         const newUserData = {
//     //             address: userEVMAddress,
//     //             email: email, 
//     //             username: username,
//     //             credits: creditsReadable,
//     //             creationTime: creationTime.toString()
//     //         };

//     //         setMessage(`Login successful! Welcome back, ${username}.`);
//     //         setUserData(newUserData); 
            
//     //         // App.jsx's useEffect will handle the redirect

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

//     // --- 3. Handle Contract Read/Write Functions (Login) ---
// const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage(""); // 🟢 Use prop setter

//     if (!contract || !signer) {
//         setMessage("Wallet not connected or contract not initialized."); // 🟢 Use prop setter
//         return;
//     }
    
//     if (!loginPassword || !loginEmail) {
//         setMessage("Please enter both email and password.");
//         return;
//     }

//     // --- 1. 🟢 CRITICAL FIX: UNCOMMENT THE HASHING ---
//     // You must hash the password just as you do during registration.
//     const hashedPassword = sha256.hex(loginPassword); 
//     console.log("Client-side hash being sent:", loginPassword); // This should now log the 64-char hash
//     // ----------------------------------------------------

//     try {
//         const userEVMAddress = await signer.getAddress(); 
        
//         // --- 2. CHECK BANNED STATUS (VIEW FUNCTION) ---
//         setMessage("Checking account status...");
//         const isBanned = await contract["getBannedStatus"](userEVMAddress); // Use array access for safety
//         if (isBanned) {
//             setMessage("🔴 Login failed. Your account has been banned from interaction.");
//             return; // Exit if banned
//         }
        
//         setMessage("Sending login transaction for credential check... (Confirm in MetaMask)");

//         // 3. Execute the login transaction with the HASHED password
//         const txResponse = await contract.login(loginEmail, loginPassword);
//         const txReceipt = await txResponse.wait(); 

//         if (txReceipt.status !== 1) {
//             throw new Error("Login transaction failed on chain (status 0).");
//         }
        
//         setMessage("Login successful! Fetching user data...");

//         // 4. Fetch User Data
//         // Use array access for view functions to avoid TypeErrors
//         const [email, username, creationTime] = await contract["getUserInfoByAddress"](userEVMAddress);
//         const creditsBigInt = await contract["checkUserCredit"](userEVMAddress);
        
//         const creditsReadable = creditsBigInt.toString(); 
        
//         // Prepare and update the state
//         const newUserData = {
//             address: userEVMAddress,
//             email: email, 
//             username: username,
//             credits: creditsReadable,
//             creationTime: creationTime.toString()
//         };

//         setMessage(`Login successful! Welcome back, ${username}.`);
//         setUserData(newUserData); 
        
//         // App.jsx will handle the redirect via its useEffect
        
//     } catch (err) {
//         console.error("Login failed:", err);
        
//         const revertReason = err.reason || (err.data && err.data.message) || err.message;
        
//         if (revertReason.includes("Account is banned")) {
//              setMessage("🔴 Login failed. Your account is banned from interaction.");
//         } else if (revertReason.includes("User not registered")) {
//             setMessage("Login failed. The connected wallet is not registered.");
//         } else if (revertReason.includes("Invalid email or password")) {
//             // This error will now correctly trigger if the (hashed) password is wrong
//             setMessage("Login failed. Invalid email or password.");
//         } else {
//             setMessage(`Login failed. Check your wallet status. Error: ${revertReason}`); 
//         }
//     }
// };

//     return (
//         <div className="DemoWrapper">
//             <Link to="/" className="back-link">← Back to Home</Link>

//             <div className="ContainerLogin_register">

//                 {/* 🟢 ADDED: Manual Connection Button */}
//                 {/* Show connect button if signer (wallet) isn't connected */}
//                 {!signer && (
//                     <div className="connection-required-demo">
//                         <h2>Connect to Hedera</h2>
//                         <p>Please connect your MetaMask wallet to login or register.</p>
//                         <button className="btn-primary" onClick={connectAndSetup}>
//                             Connect Wallet
//                         </button>
//                     </div>
//                 )}
                
//                 {/* Only show forms if connected */}
//                 {signer && (
//                     <>
//                         <div className="toggle-container">
//                             <button
//                                 className={`toggle-btn login-toggle ${isLoginActive ? "active" : ""}`}
//                                 onClick={() => setIsLoginActive(true)}
//                             >
//                                 Login
//                             </button>
//                             <button
//                                 className={`toggle-btn register-toggle ${!isLoginActive ? "active" : ""}`}
//                                 onClick={() => setIsLoginActive(false)}
//                             >
//                                 Register
//                             </button>
//                         </div>

//                         <div className="forms-container">
//                             {/* Login Form */}
//                             {isLoginActive && (
//                                 <div className="form-container DemoLogin">
//                                     <h3>Welcome Back</h3>
//                                     <form onSubmit={handleLogin}>
//                                         <label className="from-label">email</label>
//                                         <input
//                                             type="email"
//                                             placeholder="Email"
//                                             value={loginEmail}
//                                             onChange={(e) => setLoginEmail(e.target.value)}
//                                             required
//                                             className="form-control"
//                                         />
//                                         <label className="from-label">password</label>
//                                         <input
//                                             type="password"
//                                             placeholder="Password"
//                                             value={loginPassword}
//                                             onChange={(e) => setLoginPassword(e.target.value)}
//                                             required
//                                             className="form-control"
//                                         />
//                                         <button type="submit" disabled={!signer} className="submit-btn login-btn">Login</button>
//                                     </form>
//                                 </div>
//                             )}

//                             {/* Register Form */}
//                             {!isLoginActive && (
//                                 <div className="form-container DemoRegister">
//                                     <h3>Create Account</h3>
//                                     <form onSubmit={handleRegister}>
//                                         <label className="from-label">username</label>
//                                         <input
//                                             type="text"
//                                             placeholder="Username"
//                                             value={registerUsername}
//                                             onChange={(e) => setRegisterUsername(e.targe.value)}
//                                             required
//                                             className="form-control"
//                                         />
//                                         <label className="from-label">email</label>
//                                         <input
//                                             type="email"
//                                             placeholder="Email"
//                                             value={registerEmail}
//                                             onChange={(e) => setRegisterEmail(e.target.value)}
//                                             required
//                                             className="form-control"
//                                         />
//                                         <label className="from-label">password</label>
//                                         <input
//                                             type="password"
//                                             placeholder="Password"
//                                             value={registerPassword}
//                                             onChange={(e) => setRegisterPassword(e.target.value)}
//                                             required
//                                             className="form-control"
//                                         />
//                                         <button type="submit" disabled={!signer} className="submit-btn register-btn">Register</button>
//                                     </form>
//                                 </div>
//                             )}
//                         </div>
//                     </>
//                 )}

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