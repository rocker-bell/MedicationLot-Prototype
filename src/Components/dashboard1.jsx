// import { useState } from 'react';
// import { LayoutDashboard, Home, Users, Settings } from 'lucide-react';
// import { Button } from './components/ui/button';  // Assuming you have a Button component inside the ui folder

// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   // Toggle sidebar visibility
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Dashboard Sidebar */}
//       <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 ${isSidebarOpen ? 'block' : 'hidden'}`}>
//         <div className="w-64 bg-white p-4">
//           <div className="flex justify-between items-center mb-8">
//             <span className="text-2xl font-bold text-purple-600">Dashboard</span>
//             <button onClick={toggleSidebar} className="text-gray-600">
//               &times;
//             </button>
//           </div>
//           <ul className="space-y-4">
//             <li>
//               <a href="#" className="text-gray-800 hover:text-purple-600 flex items-center gap-2">
//                 <LayoutDashboard /> Dashboard
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-800 hover:text-purple-600 flex items-center gap-2">
//                 <Users /> Users
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-800 hover:text-purple-600 flex items-center gap-2">
//                 <Settings /> Settings
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-1 flex-col">
//         {/* Dashboard Header */}
//         <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
//           <div className="flex justify-between items-center">
//             <div className="text-xl font-bold">Welcome to your Dashboard</div>
//             <div className="flex items-center gap-4">
//               <button className="bg-purple-700 text-white px-4 py-2 rounded">Notifications</button>
//               <button className="bg-purple-700 text-white px-4 py-2 rounded">Profile</button>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-gray-100 p-6 rounded-lg">
//             <h2 className="text-xl font-bold text-gray-900 mb-4">Your Dashboard Content</h2>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <p className="text-gray-600">This is where your dashboard content will go. You can add widgets, statistics, etc.</p>
//             </div>
//           </div>
//         </main>

//         {/* Dashboard Footer */}
//         <footer className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-6 mt-12">
//           <div className="text-center">
//             <p>&copy; 2024 PharmaSafe Expert. All rights reserved.</p>
//           </div>
//         </footer>
//       </div>

//       {/* Back to website button */}
//       <div className="fixed bottom-6 left-6 z-50">
//         <Button 
//           onClick={() => window.location.href = '/'} // Go back to website
//           className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg"
//         >
//           <Home className="size-4 mr-2" />
//           Retour au Site
//         </Button>
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react';
// import "../Styles/dashboard.css";
// import {} form ""
// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);


//   // Toggle sidebar visibility
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const handleLogout = () => {
//     // 1. Clear application state (important for re-rendering the UI)
//     setSigner(null);
//     setUserData(null);
//     setMessage("Successfully logged out. Connect or Register to continue.");
    
//     // 2. Disconnect from MetaMask (Ethers.js/EVM)
//     // MetaMask doesn't have a standardized 'disconnect' method in the eth_ namespace.
//     // The closest thing is clearing permissions, but we'll focus on UI state and navigation.
//     // NOTE: You can often trigger a disconnect by asking the user to manually disconnect 
//     // from the site in MetaMask, but clearing local state is key for the dApp.

//     // 3. Redirect the user to the landing page or login/register page
//     navigate("/", { replace: true }); 
// };

//   return (
//     <div className="dashboard-container">
//       {/* Dashboard Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <span className="sidebar-title">Dashboard</span>
//           <button onClick={toggleSidebar} className="close-btn">&times;</button>
//         </div>
//         <ul className="sidebar-links">
//           <li>
//             <a href="#" className="sidebar-link">Dashboard</a>
//           </li>
//           <li>
//             <a href="#" className="sidebar-link">Users</a>
//           </li>
//           <li>
//             <a href="#" className="sidebar-link">Settings</a>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Dashboard Header */}
//         <header className="dashboard-header">
//           <div className="header-left">
//             <h1>Welcome to your Dashboard</h1>
//           </div>
//           <div className="header-right">
//             <button className="header-btn">Notifications</button>
//             <button className="header-btn">Profile</button>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="dashboard-body">
//           <div className="dashboard-content">
//             <h2>Your Dashboard Content</h2>
//             <div className="dashboard-widget">
//               <p>This is where your dashboard content will go. You can add widgets, statistics, etc.</p>
//             </div>
//           </div>
//         </main>

//         {/* Dashboard Footer */}
//         <footer className="dashboard-footer">
//           <p>&copy; 2024 PharmaSafe Expert. All rights reserved.</p>
//         </footer>
//       </div>

//       {/* Back to website button */}
//       <div className="back-to-website">
//         <button className="back-btn" onClick={handleLogout}>
//           logout
//         </button>
//         <button className="back-btn" onClick={() => window.location.href = '/'}>
//           Back to Website
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // 🟢 FIX 1: Import useNavigate hook
// import "../Styles/dashboard.css";

// // 🟢 FIX 2: Accept the necessary state setters as props
// export default function Dashboard({ setSigner, setUserData, setMessage, userData }) { 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const navigate = useNavigate(); // 🟢 FIX 3: Initialize useNavigate

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         // 1. Clear application state using the passed props
//         // We use checks (e.g., if (setSigner)) just in case the prop is accidentally missing.
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
        
//         // 2. Redirect the user to the landing page
//         navigate("/", { replace: true }); 
//     };

//     // 🟢 OPTIONAL: Conditional render for security (Best Practice)
//     // If the component is rendered without user data, redirect immediately
//     // useEffect(() => {
//     //     if (!userData || !userData.address) {
//     //         navigate("/", { replace: true });
//     //     }
//     // }, [userData, navigate]);


//     return (
//         <div className="dashboard-container">
//             {/* Dashboard Sidebar */}
//             <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//                 {/* ... Sidebar Content ... */}
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li>
//                         <a href="#" className="sidebar-link">Dashboard</a>
//                     </li>
//                     <li>
//                         <a href="#" className="sidebar-link">Users</a>
//                     </li>
//                     <li>
//                         <a href="#" className="sidebar-link">Settings</a>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="main-content">
//                 {/* Dashboard Header */}
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         {/* Example: Display username from passed prop */}
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 {/* Dashboard Content */}
//                 <main className="dashboard-body">
//                     <div className="dashboard-content">
//                         <h2>Your Dashboard Content</h2>
//                         <div className="dashboard-widget">
//                             <p>username : {userData?.username || 'N/A'}</p>
//                             <p>Current Address: {userData?.address || 'N/A'}</p>
//                             <p>Available Credits: {userData?.credits || 'N/A'}</p>
//                             <p>email : {userData?.email || 'N/A'}</p>
//                         </div>
//                     </div>
//                 </main>

//                 {/* Dashboard Footer */}
//                 <footer className="dashboard-footer">
//                     <p>&copy; 2024 PharmaSafe Expert. All rights reserved.</p>
//                 </footer>
//             </div>

//             {/* Back to website button */}
//             <div className="back-to-website">
//                 <button className="back-btn" onClick={handleLogout}>
//                     logout
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website {/* Use navigate for cleaner redirect */}
//                 </button>
//             </div>
//         </div>
//     );
// }


// import { useState, useEffect } from 'react'; // 🟢 ADDED: useEffect (optional, for security redirect)
// import { useNavigate } from 'react-router-dom'; 
// import "../Styles/dashboard.css";

// // 🟢 ACCEPT PROPS: setSigner, setUserData, setMessage, and userData
// function Dashboard({ setSigner, setUserData, setMessage, userData }) { 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const navigate = useNavigate();


//     //  const creditsBigInt = await ethers.contract.checkUserCredit(userEVMAddress);
//     //         const credit = ethers.formatUnits(creditsBigInt, DECIMALS);

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         // 1. Clear application state (Signer and UserData)
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
        
//         // 2. Redirect the user to the landing page
//         navigate("/", { replace: true }); 
//     };

//     // 🟢 SECURITY CHECK (Recommended Best Practice): 
//     // Redirect unauthenticated users away from the dashboard.
//     useEffect(() => {
//         // Check if userData is missing, or if the address (key authentication detail) is missing
//         if (!userData || !userData.address) {
//             // setMessage is optional, but helps inform the user
//             if (setMessage) setMessage("Session expired or unauthorized access. Please connect.");
//             navigate("/", { replace: true });
//         }
//     }, [userData, navigate, setMessage]); // Depend on userData, navigate, and setMessage


//     return (
//         <div className="dashboard-container">
//             {/* Dashboard Sidebar */}
//             <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li>
//                         <a href="#" className="sidebar-link">Dashboard</a>
//                     </li>
//                     <li>
//                         <a href="#" className="sidebar-link">Users</a>
//                     </li>
//                     <li>
//                         <a href="#" className="sidebar-link">Settings</a>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="main-content">
//                 {/* Dashboard Header */}
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         {/* Display username from the prop */}
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 {/* Dashboard Content */}
//                 <main className="dashboard-body">
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             {/* 🟢 DATA INTEGRATION: Using optional chaining (?.) */}
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             {/* <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p> */}
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime
//                                     ? new Date(Number(userData.creationTime) * 1000).toLocaleString()
//                                     : 'N/A'
//                                 }
//                             </p>
//                         </div>
//                     </div>
//                 </main>

//                 {/* Dashboard Footer */}
//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025  MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             {/* Back to website button */}
//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;



// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import "../Styles/dashboard.css";

// // 🟢 ACCEPT PROPS: setSigner, setUserData, setMessage, and userData
// function Dashboard({ setSigner, setUserData, setMessage, userData }) { 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const navigate = useNavigate();

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         // 1. Clear application state (Signer and UserData)
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
        
//         // 2. Redirect the user to the landing page
//         navigate("/", { replace: true }); 
//     };

//     // 🟢 SECURITY CHECK: Redirect unauthenticated users away from the dashboard.
//     useEffect(() => {
//         if (!userData || !userData.address) {
//             if (setMessage) setMessage("Session expired or unauthorized access. Please connect.");
//             navigate("/", { replace: true });
//         }
//     }, [userData, navigate, setMessage]); 


//     return (
//         <div className="dashboard-container">
//             {/* Dashboard Sidebar */}
//             <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li>
//                         <a href="#" className="sidebar-link">Dashboard</a>
//                     </li>
//                     <li>
//                         <a href="#" className="sidebar-link">Users</a>
//                     </li>
//                     <li>
//                         <a href="#" className="sidebar-link">Settings</a>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="main-content">
//                 {/* Dashboard Header */}
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         {/* Display username from the prop */}
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 {/* Dashboard Content */}
//                 <main className="dashboard-body">
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             {/* 🟢 DATA INTEGRATION */}
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
                            
//                             {/* 🟢 CREDIT FIX: Re-added the display line */}
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
                            
//                             {/* 🟢 TIMESTAMP FIX: Conversion to Local String */}
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime
//                                     ? new Date(Number(userData.creationTime) * 1000).toLocaleString()
//                                     : 'N/A'
//                                 }
//                             </p>
//                         </div>
//                     </div>
//                 </main>

//                 {/* Dashboard Footer */}
//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             {/* Back to website button */}
//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import "../Styles/dashboard.css";

// // 🟢 ACCEPT PROPS: setSigner, setUserData, setMessage, and userData
// function Dashboard({ setSigner, setUserData, setMessage, userData }) { 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     // 🟢 NEW STATE: Controls which content section is visible
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         // 1. Clear application state (Signer and UserData)
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
        
//         // 2. Redirect the user to the landing page
//         navigate("/", { replace: true }); 
//     };

//     // 🟢 SECURITY CHECK: Redirect unauthenticated users away from the dashboard.
//     // useEffect(() => {
//     //     if (!userData || !userData.address) {
//     //         if (setMessage) setMessage("Session expired or unauthorized access. Please connect.");
//     //         navigate("/", { replace: true });
//     //     }
//     // }, [userData, navigate, setMessage]); 

//     // --- Component Rendering ---
    
//     // 🟢 NEW FUNCTION: Renders the active content section
//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime
//                                     ? new Date(Number(userData.creationTime) * 1000).toLocaleString()
//                                     : 'N/A'
//                                 }
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section  className='Dashboard-settings'>
//                         <h2>devis settings</h2>
//                         <p>This section will contain devis-specific settings</p>
//                     </section>
//                 );    
//             case 'settings':
//                 return (
//                     <section  className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
            
            
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* Dashboard Sidebar */}
//             <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     {/* 🟢 UPDATED LINKS to change state */}
//                     {/* <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
//                             onClick={() => setActiveSection('dashboard')}
//                         >
//                             Dashboard
//                         </a>
//                     </li> */}
//                     <li>
//             <a 
//                 href="#" 
//                 className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
//                 onClick={(e) => { // 🟢 FIX: Pass the event object (e)
//                     e.preventDefault();   // 🟢 CRITICAL: Prevent the browser's default navigation
//                     setActiveSection('dashboard');
//                 }}
//             >
//                 Dashboard
//             </a>
//         </li>
//                    <li>
//             <a 
//                 href="#" 
//                 className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`}
//                 onClick={(e) => { // 🟢 FIX: Pass the event object (e)
//                     e.preventDefault();   // 🟢 CRITICAL: Prevent the browser's default navigation
//                     setActiveSection('users');
//                 }}
//             >
//                 Users
//             </a>
//         </li>
//                         <li>
//             <a 
//                 href="#" 
//                 className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`}
//                 onClick={(e) => { // 🟢 FIX: Pass the event object (e)
//                     e.preventDefault();   // 🟢 CRITICAL: Prevent the browser's default navigation
//                     setActiveSection('devis');
//                 }}
//             >
//                 devis
//             </a>

//                    </li>
//                    <li>
//             <a 
//                 href="#" 
//                 className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`}
//                 onClick={(e) => { // 🟢 FIX: Pass the event object (e)
//                     e.preventDefault();   // 🟢 CRITICAL: Prevent the browser's default navigation
//                     setActiveSection('settings');
//                 }}
//             >
//                 Settings
//             </a>
//         </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="main-content">
//                 {/* Dashboard Header */}
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 {/* Dashboard Body: Renders content based on activeSection */}
//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 {/* Dashboard Footer */}
//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             {/* Back to website button */}
//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import "../Styles/dashboard.css";

// // 🟢 ACCEPT PROPS: setSigner, setUserData, setMessage, and userData
// function Dashboard({ setSigner, setUserData, setMessage, userData }) { 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     // 🟢 NEW STATE: Controls which content section is visible
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         // 1. Clear application state (Signer and UserData)
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
        
//         // 2. Redirect the user to the landing page
//         navigate("/", { replace: true }); 
//     };

//     // 🟢 SECURITY CHECK: Redirect unauthenticated users away from the dashboard.
//     // useEffect(() => {
//     //     if (!userData || !userData.address) {
//     //         if (setMessage) setMessage("Session expired or unauthorized access. Please connect.");
//     //         navigate("/", { replace: true });
//     //     }
//     // }, [userData, navigate, setMessage]); 

//     // --- Component Rendering ---
    
//     // 🟢 NEW FUNCTION: Renders the active content section
//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime
//                                     ? new Date(Number(userData.creationTime) * 1000).toLocaleString()
//                                     : 'N/A'
//                                 }
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section  className='Dashboard-settings'>
//                         <h2>devis settings</h2>
//                         <p>This section will contain devis-specific settings</p>
//                     </section>
//                 );    
//             case 'settings':
//                 return (
//                     <section  className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
            
            
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* Dashboard Sidebar */}
//             <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     {/* 🟢 UPDATED LINKS to change state */}
//                     {/* <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
//                             onClick={() => setActiveSection('dashboard')}
//                         >
//                             Dashboard
//                         </a>
//                     </li> */}
//                     <li>
//             <a 
//                 href="#" 
//                 className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
//                 onClick={(e) => { // 🟢 FIX: Pass the event object (e)
//                     e.preventDefault();   // 🟢 CRITICAL: Prevent the browser's default navigation
//                     setActiveSection('dashboard');
//                 }}
//             >
//                 Dashboard
//             </a>
//         </li>
//                    <li>
//             <a 
//                 href="#" 
//                 className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`}
//                 onClick={(e) => { // 🟢 FIX: Pass the event object (e)
//                     e.preventDefault();   // 🟢 CRITICAL: Prevent the browser's default navigation
//                     setActiveSection('users');
//                 }}
//             >
//                 Users
//             </a>
//         </li>
//                         <li>
//             <a 
//                 href="#" 
//                 className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`}
//                 onClick={(e) => { // 🟢 FIX: Pass the event object (e)
//                     e.preventDefault();   // 🟢 CRITICAL: Prevent the browser's default navigation
//                     setActiveSection('devis');
//                 }}
//             >
//                 devis
//             </a>

//                    </li>
//                    <li>
//             <a 
//                 href="#" 
//                 className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`}
//                 onClick={(e) => { // 🟢 FIX: Pass the event object (e)
//                     e.preventDefault();   // 🟢 CRITICAL: Prevent the browser's default navigation
//                     setActiveSection('settings');
//                 }}
//             >
//                 Settings
//             </a>
//         </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="main-content">
//                 {/* Dashboard Header */}
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 {/* Dashboard Body: Renders content based on activeSection */}
//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 {/* Dashboard Footer */}
//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             {/* Back to website button */}
//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState } from 'react'; // Removed unused useEffect
// import { useNavigate } from 'react-router-dom'; 
// import "../Styles/dashboard.css";

// // 🟢 ACCEPT PROPS: setSigner, setUserData, setMessage, and userData
// function Dashboard({ setSigner, setUserData, setMessage, userData }) { 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     // 🟢 NEW STATE: Controls which content section is visible
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         // 1. Clear application state (Signer and UserData)
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
        
//         // 2. Redirect the user to the landing page
//         navigate("/", { replace: true }); 
//     };

//     // --- Component Rendering ---
    
//     // 🟢 NEW FUNCTION: Renders the active content section
//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime
//                                     ? new Date(Number(userData.creationTime) * 1000).toLocaleString()
//                                     : 'N/A'
//                                 }
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>This section will contain devis-specific settings.</p>
//                         <div className="devis-container-utils">
//                             <div className="devis-container-btns">
//                                 <button className='btn-add-devise' type='submit'>add devise</button>
//                                 <button className='btn-check-devise' type='submit'>check devis</button>
//                             </div>
                            
//                         </div>
//                     </section>
//                 );    
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* Dashboard Sidebar - 🔥 FIXED CLASS: Apply 'closed' when isSidebarOpen is false */}
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('dashboard');
//                             }}
//                         >
//                             Dashboard
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('users');
//                             }}
//                         >
//                             Users
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('devis');
//                             }}
//                         >
//                             Devis
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('settings');
//                             }}
//                         >
//                             Settings
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content - 🔥 FIXED CLASS: Apply 'full-width' when sidebar is closed */}
//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 {/* Dashboard Header */}
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 {/* Dashboard Body: Renders content based on activeSection */}
//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 {/* Dashboard Footer */}
//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             {/* Back to website button */}
//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import "../Styles/dashboard.css";

// // 🟢 ACCEPT PROPS: setSigner, setUserData, setMessage, and userData
// function Dashboard({ setSigner, setUserData, setMessage, userData }) { 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // 🆕 NEW STATE FOR DEVIS SECTION 
//     // 1. Controls which sub-view is active: 'buttons', 'add', or 'check'
//     const [devisView, setDevisView] = useState('buttons'); 
//     // 2. Stores the input data for adding a new product
//     const [newProductData, setNewProductData] = useState({
//         id: '',
//         product_id: '',
//         product_name: '',
//         manufacturer_id: '',
//         current_location: '',
//         current_handler: ''
//     });
//     // 3. Stores the ID for checking a product
//     const [checkProductId, setCheckProductId] = useState('');
//     // 4. Stores the result when checking a product
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     // --- Devis Handler Functions ---
    
//     const handleAddProductSubmit = (e) => {
//         e.preventDefault();
//         // In a real application, you'd send `newProductData` to your smart contract or backend here.
//         console.log("Adding Product:", newProductData); 
//         if (setMessage) setMessage(`Product "${newProductData.product_name}" added successfully (Simulated).`);
        
//         // Reset form and return to buttons view
//         setNewProductData({
//             id: '', product_id: '', product_name: '', manufacturer_id: '',
//             current_location: '', current_handler: ''
//         });
//         setDevisView('buttons');
//     };

//     const handleCheckProductSubmit = (e) => {
//         e.preventDefault();
        
//         // In a real app, this would query the blockchain/database with `checkProductId`.
//         // --- SIMULATED DATA RESPONSE ---
//         if (checkProductId === '123') {
//             setCheckedProductResult({
//                 id: '123',
//                 product_id: 'Med-X-45',
//                 product_name: 'Simulated Antibiotic',
//                 manufacturer_id: 'Manuf-A',
//                 current_location: 'Warehouse-3',
//                 current_handler: 'Distributor-Z',
//                 status: 'Verified and in Transit'
//             });
//             if (setMessage) setMessage(`Product ID ${checkProductId} retrieved successfully.`);
//         } else {
//             setCheckedProductResult({ status: 'Product Not Found', id: checkProductId });
//             if (setMessage) setMessage(`Product ID ${checkProductId} not found.`);
//         }
//         // The view stays as 'check' to show the results.
//     };

//     // --- Content Renderers ---

//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{key.replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}:</label>
//                     <input
//                         id={key}
//                         type="text"
//                         required
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                     />
//                 </div>
//             ))}
            
//             <button type="submit" className="btn-primary">Submit Devis</button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Product ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); // Clear previous result on change
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123"
//                     />
//                     <button type="submit" className="btn-check-submit">Check Devis</button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for ID: {checkedProductResult.id}</h4>
//                     {checkedProductResult.status === 'Product Not Found' ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult).map(([key, value]) => (
//                                 <p key={key}><strong>{key.replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}:</strong> {value}</p>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );

//     // 🟢 NEW FUNCTION: Renders the active content section
//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 // ... (dashboard content is unchanged)
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime
//                                     ? new Date(Number(userData.creationTime) * 1000).toLocaleString()
//                                     : 'N/A'
//                                 }
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 // ... (users content is unchanged)
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {/* Render content based on devisView state */}
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 );    
//             case 'settings':
//                 // ... (settings content is unchanged)
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             {/* Dashboard Sidebar */}
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('dashboard');
//                             }}
//                         >
//                             Dashboard
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('users');
//                             }}
//                         >
//                             Users
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('devis');
//                                 setDevisView('buttons'); // Reset devis view when navigating to the section
//                             }}
//                         >
//                             Devis
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('settings');
//                             }}
//                         >
//                             Settings
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import "../Styles/dashboard.css";

// // 🟢 ACCEPT PROPS: setSigner, setUserData, setMessage, and userData
// function Dashboard({ setSigner, setUserData, setMessage, userData }) { 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // 🆕 NEW STATE FOR DEVIS SECTION 
//     const [devisView, setDevisView] = useState('buttons'); 
    
//     // 💥 UPDATED STATE: Matches the 'insert' function signature from the ABI
//     const [newProductData, setNewProductData] = useState({
//         name: '',                 // Corresponds to ABI 'name' (product_name)
//         manufacturer: '',         // Corresponds to ABI 'manufacturer'
//         manufactureDate: '',      // Corresponds to ABI 'manufactureDate' (Timestamp)
//         initialLocation: '',      // Corresponds to ABI 'initialLocation' (current_location)
//         metadataURI: ''           // Corresponds to ABI 'metadataURI' (e.g., IPFS hash)
//     });
    
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     // --- Devis Handler Functions ---
    
//     const handleAddProductSubmit = (e) => {
//         e.preventDefault();
        
//         // 🚨 CONTRACT CALL LOGIC GOES HERE (using web3.js/ethers.js)
//         // You would call: contract.methods.insert(name, manufacturer, manufactureDate, initialLocation, metadataURI).send({ from: userData.address, value: feeAmount })
        
//         console.log("Adding Product (ABI Data):", newProductData); 
//         if (setMessage) setMessage(`Product "${newProductData.name}" insertion transaction sent! (Simulated)`);
        
//         // Reset form and return to buttons view
//         setNewProductData({
//             name: '', manufacturer: '', manufactureDate: '', 
//             initialLocation: '', metadataURI: ''
//         });
//         setDevisView('buttons');
//     };

//     const handleCheckProductSubmit = (e) => {
//         e.preventDefault();
        
//         // 🚨 CONTRACT CALL LOGIC GOES HERE (using web3.js/ethers.js)
//         // You would call: contract.methods.pull(checkProductId).call()
        
//         // --- SIMULATED DATA RESPONSE (Mocks the 'pull' return data) ---
//         // Note: Contract returns Lot struct {lotId, name, currentHandler, manufacturer, manufactureDate, currentOwner, currentLocation, status}
//         if (checkProductId === '123') {
//             setCheckedProductResult({
//                 lotId: '123',
//                 name: 'Simulated Antibiotic',
//                 currentHandler: '0xabc...123', // Address of current handler/owner
//                 manufacturer: 'PharmaCorp A',
//                 manufactureDate: new Date().getTime(), // Example timestamp
//                 currentOwner: '0xdeF...456', // Address of current owner
//                 currentLocation: 'Warehouse-3',
//                 status: '1 (ACTIVE)', // 1 is for ACTIVE status in your contract ABI (uint8)
//                 history: ['0x111...aaa', '0x222...bbb'] // Mock history array
//             });
//             if (setMessage) setMessage(`Product ID ${checkProductId} retrieved successfully.`);
//         } else {
//             setCheckedProductResult({ status: 'Product Not Found', lotId: checkProductId });
//             if (setMessage) setMessage(`Product ID ${checkProductId} not found.`);
//         }
//     };

//     // --- Content Renderers ---
    
//     // 💡 Helper to format keys for display
//     const formatKey = (key) => {
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date (Timestamp)';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }

//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     {/* Use the new formatKey helper for cleaner labels */}
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'number' : 'text'} // Use number for date
//                         required
//                         // Display current user address if the field is expected to be autofilled (like current handler/owner)
//                         placeholder={key === 'currentHandler' ? userData?.address || 'Your Address' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                     />
//                 </div>
//             ))}
            
//             <button type="submit" className="btn-primary">Submit Devis (Call Insert)</button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); // Clear previous result on change
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                     />
//                     <button type="submit" className="btn-check-submit">Check Devis (Call Pull)</button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {/* Filter out the 'history' array for main display and then map the rest */}
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
                    
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );

//     // --- Component Rendering (Rest of the component remains the same) ---
    
//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime
//                                     ? new Date(Number(userData.creationTime) * 1000).toLocaleString()
//                                     : 'N/A'
//                                 }
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 );    
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('dashboard');
//                             }}
//                         >
//                             Dashboard
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('users');
//                             }}
//                         >
//                             Users
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('devis');
//                                 setDevisView('buttons'); 
//                             }}
//                         >
//                             Devis
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('settings');
//                             }}
//                         >
//                             Settings
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import "../Styles/dashboard.css";

// // 🟢 ACCEPT PROPS: setSigner, setUserData, setMessage, and userData
// function Dashboard({ setSigner, setUserData, setMessage, userData }) { 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // 🆕 NEW STATE FOR DEVIS SECTION 
//     const [devisView, setDevisView] = useState('buttons'); 
    
//     // 💥 UPDATED STATE: Matches the 'insert' function signature from the ABI
//     const [newProductData, setNewProductData] = useState({
//         name: '',                 // Corresponds to ABI 'name' (product_name)
//         manufacturer: '',         // Corresponds to ABI 'manufacturer'
//         manufactureDate: '',      // Corresponds to ABI 'manufactureDate' (Date string will be converted to Timestamp)
//         initialLocation: '',      // Corresponds to ABI 'initialLocation' (current_location)
//         metadataURI: ''           // Corresponds to ABI 'metadataURI' (e.g., IPFS hash)
//     });
    
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     // 💡 Helper function to convert 'YYYY-MM-DD' date string to Unix timestamp (seconds)
//     const dateToUnixTimestamp = (dateString) => {
//         // If the date string is empty, return 0 or handle error
//         if (!dateString) return 0;
        
//         // Create a Date object from the YYYY-MM-DD string.
//         // Append 'T00:00:00Z' to force UTC midnight, ensuring a consistent timestamp.
//         const date = new Date(dateString + 'T00:00:00Z');
        
//         // .getTime() returns milliseconds, so divide by 1000 to get seconds (uint256 in Solidity)
//         return Math.floor(date.getTime() / 1000);
//     };

//     // --- Devis Handler Functions ---
    
//     const handleAddProductSubmit = (e) => {
//         e.preventDefault();

//         // 1. Convert the manufactureDate string to a Unix timestamp in seconds
//         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
        
//         // 2. Prepare the final data payload for the contract
//         const contractDataPayload = {
//             name: newProductData.name,
//             manufacturer: newProductData.manufacturer,
//             // Send the converted numeric timestamp as a string
//             manufactureDate: timestampInSeconds.toString(), 
//             initialLocation: newProductData.initialLocation,
//             metadataURI: newProductData.metadataURI,
//         };
        
//         // 🚨 CONTRACT CALL LOGIC GOES HERE (using web3.js/ethers.js)
//         // You would call: contract.methods.insert(
//         //    contractDataPayload.name, 
//         //    contractDataPayload.manufacturer, 
//         //    contractDataPayload.manufactureDate, // This is the timestamp in seconds
//         //    contractDataPayload.initialLocation, 
//         //    contractDataPayload.metadataURI
//         // ).send({ from: userData.address, value: feeAmount })
        
//         console.log("Adding Product (Contract Payload):", contractDataPayload); 
//         if (setMessage) setMessage(`Product "${newProductData.name}" insertion transaction sent! (Simulated)`);
        
//         // Reset form and return to buttons view
//         setNewProductData({
//             name: '', manufacturer: '', manufactureDate: '', 
//             initialLocation: '', metadataURI: ''
//         });
//         setDevisView('buttons');
//     };

//     const handleCheckProductSubmit = (e) => {
//         e.preventDefault();
        
//         // 🚨 CONTRACT CALL LOGIC GOES HERE (using web3.js/ethers.js)
//         // You would call: contract.methods.pull(checkProductId).call()
        
//         // --- SIMULATED DATA RESPONSE (Mocks the 'pull' return data) ---
//         // Note: Contract returns Lot struct {lotId, name, currentHandler, manufacturer, manufactureDate, currentOwner, currentLocation, status}
//         if (checkProductId === '123') {
//             setCheckedProductResult({
//                 lotId: '123',
//                 name: 'Simulated Antibiotic',
//                 currentHandler: '0xabc...123', // Address of current handler/owner
//                 manufacturer: 'PharmaCorp A',
//                 manufactureDate: new Date().getTime(), // Example timestamp (in milliseconds for JS simulation display)
//                 currentOwner: '0xdeF...456', // Address of current owner
//                 currentLocation: 'Warehouse-3',
//                 status: '1 (ACTIVE)', // 1 is for ACTIVE status in your contract ABI (uint8)
//                 history: ['0x111...aaa', '0x222...bbb'] // Mock history array
//             });
//             if (setMessage) setMessage(`Product ID ${checkProductId} retrieved successfully.`);
//         } else {
//             setCheckedProductResult({ status: 'Product Not Found', lotId: checkProductId });
//             if (setMessage) setMessage(`Product ID ${checkProductId} not found.`);
//         }
//     };

//     // --- Content Renderers ---
    
//     // 💡 Helper to format keys for display
//     const formatKey = (key) => {
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date (Timestamp)';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }

//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     {/* Use the new formatKey helper for cleaner labels */}
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         // 💥 FIX 2: Change type to 'date' for the date picker for better UX
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                     />
//                 </div>
//             ))}
            
//             <button type="submit" className="btn-primary">Submit Devis (Call Insert)</button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); // Clear previous result on change
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                     />
//                     <button type="submit" className="btn-check-submit">Check Devis (Call Pull)</button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {/* Filter out the 'history' array for main display and then map the rest */}
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {/* Format the timestamp for display */}
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
                    
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );

//     // --- Component Rendering (Rest of the component remains the same) ---
    
//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime
//                                     ? new Date(Number(userData.creationTime) * 1000).toLocaleString()
//                                     : 'N/A'
//                                 }
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 );    
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('dashboard');
//                             }}
//                         >
//                             Dashboard
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('users');
//                             }}
//                         >
//                             Users
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('devis');
//                                 setDevisView('buttons'); 
//                             }}
//                         >
//                             Devis
//                         </a>
//                     </li>
//                     <li>
//                         <a 
//                             href="#" 
//                             className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`}
//                             onClick={(e) => { 
//                                 e.preventDefault(); 
//                                 setActiveSection('settings');
//                             }}
//                         >
//                             Settings
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers } from 'ethers'; // 👈 Import Ethers
// import "../Styles/dashboard.css";

// // 🟢 UPDATED PROPS: Must include signer and contractInstance for real calls
// function Dashboard({ setSigner, setUserData, setMessage, userData, signer, contractInstance }) {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard');
//     const navigate = useNavigate();

//     // 🆕 NEW STATE FOR DEVIS SECTION
//     const [devisView, setDevisView] = useState('buttons');

//     // 💥 UPDATED STATE: Matches the 'insert' function signature from the ABI
//     const [newProductData, setNewProductData] = useState({
//         name: '',
//         manufacturer: '',
//         manufactureDate: '', // Date string will be converted to Timestamp
//         initialLocation: '',
//         metadataURI: ''
//     });

//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     // Toggle sidebar visibility
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const handleLogout = () => {
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true });
//     };

//     // 💡 Helper function to convert 'YYYY-MM-DD' date string to Unix timestamp (seconds)
//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         // Create a Date object and divide by 1000 for seconds (uint256)
//         const date = new Date(dateString + 'T00:00:00Z');
//         return Math.floor(date.getTime() / 1000);
//     };

//     // --- Devis Handler Functions ---

//     // 🚀 INTEGRATED CONTRACT CALL FOR INSERT (Write Function)
//     const handleAddProductSubmit = async (e) => {
//         e.preventDefault();

//         if (!userData?.address || !contractInstance || !signer) {
//             if (setMessage) setMessage("Error: Wallet not connected or contract not initialized.");
//             return;
//         }

//         // 1. Convert the manufactureDate string to a Unix timestamp in seconds
//         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);

//         // 2. Prepare the final arguments (Must match the ABI for 'insert')
//         const args = [
//             newProductData.name,
//             newProductData.manufacturer,
//             ethers.BigNumber.from(timestampInSeconds), // Use BigNumber for uint256
//             newProductData.initialLocation,
//             newProductData.metadataURI,
//         ];

//         try {
//             if (setMessage) setMessage(`Preparing transaction for product ${newProductData.name}...`);

//             // Connect the Signer to the contract instance to enable transactions
//             const contractWithSigner = contractInstance.connect(signer);

//             // Call the 'insert' function (Will trigger MetaMask)
//             const tx = await contractWithSigner.insert(...args, {
//                 // Since 'insert' is payable, you might need to send a fee:
//                 // value: ethers.utils.parseEther("0.001") // Example fee (replace with actual logic)
//             });

//             if (setMessage) setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//             // Wait for the transaction to be mined
//             await tx.wait();

//             // Success!
//             if (setMessage) setMessage(`✅ Product "${newProductData.name}" successfully added to the blockchain!`);

//         } catch (error) {
//             console.error("Error inserting product:", error);
//             if (setMessage) {
//                 // Ethers error handling for user rejection/revert
//                 setMessage(`Transaction failed: ${error.reason || error.message || 'Check console for details.'}`);
//             }
//         }

//         // Reset form and return to buttons view regardless of success/fail
//         setNewProductData({
//             name: '', manufacturer: '', manufactureDate: '',
//             initialLocation: '', metadataURI: ''
//         });
//         setDevisView('buttons');
//     };
    
//     // 🔍 INTEGRATED CONTRACT CALL FOR PULL (Read/View Function)
//     const handleCheckProductSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!contractInstance) {
//             if (setMessage) setMessage("Error: Contract not initialized.");
//             return;
//         }

//         // Ensure the ID is numeric (contract expects uint256)
//         const tokenId = checkProductId.trim();
//         if (!/^\d+$/.test(tokenId)) {
//             if (setMessage) setMessage("Error: Lot ID must be a number.");
//             setCheckedProductResult(null);
//             return;
//         }
        
//         setCheckedProductResult(null); // Clear previous result
//         if (setMessage) setMessage(`Fetching details for Lot ID ${tokenId}...`);

//         try {
//             // Call the 'pull' function (Read-only, no gas cost)
//             // The 'pull' function returns a tuple: (Lot struct, address[] history)
//             const [lotStruct, historyArray] = await contractInstance.pull(tokenId);

//             // Convert Ethers BigNumber fields to standard JS strings/numbers for display
//             const result = {
//                 lotId: lotStruct.lotId.toString(),
//                 name: lotStruct.name,
//                 currentHandler: lotStruct.currentHandler,
//                 manufacturer: lotStruct.manufacturer,
//                 // Convert BigNumber timestamp (seconds) to JS timestamp (milliseconds)
//                 manufactureDate: lotStruct.manufactureDate.toNumber() * 1000, 
//                 currentOwner: lotStruct.currentOwner,
//                 currentLocation: lotStruct.currentLocation,
//                 status: lotStruct.status.toString(), // The raw uint8 status code
//                 history: historyArray,
//             };

//             if (setMessage) setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
//             setCheckedProductResult(result);
//         } catch (error) {
//             console.error("Error checking product:", error);
//             if (setMessage) setMessage(`Error fetching Lot ID ${tokenId}. It may not exist.`);
//             setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//         }
//     };

//     // --- Content Renderers ---
    
//     // 💡 Helper to format keys for display
//     const formatKey = (key) => {
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date'; // Adjusted for clarity
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             case 'status': {
//                 // Map the uint8 status code to a human-readable string
//                 const statusMap = {
//                     '0': 'INACTIVE',
//                     '1': 'ACTIVE',
//                     '2': 'DISCARDED'
//                     // Add more if your contract uses them
//                 };
//                 return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
//             }
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }

//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>

//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'}
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                     />
//                 </div>
//             ))}

//             <button type="submit" className="btn-primary">Submit Devis (Call Insert)</button>
//             <button
//                 type="button"
//                 className="btn-secondary"
//                 onClick={() => setDevisView('buttons')}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); // Clear previous result on change
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                     />
//                     <button type="submit" className="btn-check-submit">Check Devis (Call Pull)</button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? ( // Check if name exists (if pull failed to get data)
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {/* Filter out the 'history' array for main display and then map the rest */}
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status') // filter out raw status as we display it in the key
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong>
//                                         {/* Format the timestamp for display if it's the date field */}
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             {/* Display Status separately for better formatting */}
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}

//                 </div>
//             )}

//             <button
//                 type="button"
//                 className="btn-secondary"
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );

//     // --- Component Rendering (Rest of the component remains the same) ---

//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong>
//                                 {userData?.creationTime
//                                     ? new Date(Number(userData.creationTime) * 1000).toLocaleString()
//                                     : 'N/A'
//                                 }
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>

//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button
//                                     className='btn-add-devise'
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button
//                                     className='btn-check-devise'
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 );
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li>
//                         <a
//                             href="#"
//                             className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`}
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 setActiveSection('dashboard');
//                             }}
//                         >
//                             Dashboard
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`}
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 setActiveSection('users');
//                             }}
//                         >
//                             Users
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`}
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 setActiveSection('devis');
//                                 setDevisView('buttons');
//                             }}
//                         >
//                             Devis
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`}
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 setActiveSection('settings');
//                             }}
//                         >
//                             Settings
//                         </a>
//                     </li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1>
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}>
//                     Back to Website
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;



// src/Dashboard.js

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers, Contract, BrowserProvider } from 'ethers'; // Make sure Ethers is imported
// import "../Styles/dashboard.css"; 
// import LotTrackerABI from "./LotTrackerABI.js"

// // 🟢 ACCEPT ALL NECESSARY PROPS
// function Dashboard({ setSigner, setUserData, setMessage, message, userData, signer, setContract, contract }) {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // State for Devis section views
//     const [devisView, setDevisView] = useState('buttons'); 
    
//     // State for Add Product form
//     const [newProductData, setNewProductData] = useState({
//         name: '', 
//         manufacturer: '', 
//         manufactureDate: '', 
//         initialLocation: '', 
//         metadataURI: '' 
//     });
    
//     // State for Check Product form
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const contractAddress = "0x14b73dec132db19ddbafc6f4dbaf3756207ff4d6";
//     const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

//     const connectAndSetup = async () => {
//             if (typeof window.ethereum === 'undefined') {
//                 setMessage("MetaMask is not installed. Please install it.");
//                 return;
//             }
    
//             try {
//                 const provider = new BrowserProvider(window.ethereum);
//                 await provider.send("eth_requestAccounts", []);
                
//                 const network = await provider.getNetwork();
//                 if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
//                     setMessage("MetaMask is connected but on the wrong network. Please switch to **Hedera Testnet**.");
//                     return;
//                 }
    
//                 const _signer = await provider.getSigner();
//                 setSigner(_signer); // 🟢 Use prop setter
                
//                 const _contract = new Contract(contractAddress, LotTrackerABI, _signer);
//                 setContract(_contract); // 🟢 Use prop setter
    
//                 setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`); // 🟢 Use prop setter
    
//             } catch (error) {
//                 console.error("MetaMask connection failed:", error);
//                 setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`); // 🟢 Use prop setter
//             }
//         };
//     useEffect(() => {
//             connectAndSetup();
    
//             // Set up listeners for changes in accounts or network
//             window.ethereum?.on('accountsChanged', connectAndSetup);
//             window.ethereum?.on('chainChanged', connectAndSetup);
    
//             return () => {
//                 // Clean up listeners on component unmount
//                 window.ethereum?.removeListener('accountsChanged', connectAndSetup);
//                 window.ethereum?.removeListener('chainChanged', connectAndSetup);
//             };
//         }, []); 

//     const handleLogout = () => {
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     // 💡 Helper function to convert 'YYYY-MM-DD' date string to Unix timestamp (seconds)
//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         const date = new Date(dateString + 'T00:00:00Z');
//         return Math.floor(date.getTime() / 1000);
//     };


//     // launch into the hedera
//     // check if credit suffisant
//     // trigger insert

//     // 🚀 INTEGRATED CONTRACT CALL FOR INSERT (Write Function)
//     // const handleAddProductSubmit = async (e) => {
//     //     e.preventDefault();

//     //     if (!userData?.address || !contractInstance || !signer) {
//     //         setMessage("Error: Wallet not connected or contract not initialized.");
//     //         return;
//     //     }

//     //     const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);

//     //     // Prepare the final arguments (Must match the ABI for 'insert')
//     //     const args = [
//     //         newProductData.name,
//     //         newProductData.manufacturer,
//     //         ethers.BigNumber.from(timestampInSeconds), 
//     //         newProductData.initialLocation,
//     //         newProductData.metadataURI,
//     //     ];

//     //     try {
//     //         setMessage(`Preparing transaction for product ${newProductData.name}...`);

//     //         const contractWithSigner = contractInstance.connect(signer);

//     //         // ⚠️ Assuming the 'insert' function is payable and might require a small fee.
//     //         // If the contract requires a fee, uncomment the 'value' line and set an amount.
//     //         const tx = await contractWithSigner.insert(...args, {
//     //             // value: ethers.utils.parseEther("0.001") 
//     //         }); 

//     //         setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//     //         await tx.wait(); 

//     //         setMessage(`✅ Product "${newProductData.name}" successfully added to the blockchain!`);

//     //     } catch (error) {
//     //         console.error("Error inserting product:", error);
//     //         setMessage(`Transaction failed: ${error.reason || error.message || 'Check console for details.'}`);
//     //     }

//     //     setNewProductData({
//     //         name: '', manufacturer: '', manufactureDate: '', 
//     //         initialLocation: '', metadataURI: ''
//     //     });
//     //     setDevisView('buttons');
//     // };

//     const TRANSACTION_COST_CREDITS = 1; // Example: Assume 1 credit is needed per insertion

// // 💡 Helper function to convert 'YYYY-MM-DD' date string to Unix timestamp (seconds)


// // ... (handleLogout and handleCheckProductSubmit remain the same)

// // 🚀 FIXED INTEGRATED CONTRACT CALL FOR INSERT (Write Function)
// const handleAddProductSubmit = async (e) => {
//     e.preventDefault();

//     if (!userData?.address || !contractInstance || !signer) {
//         setMessage("Error: Wallet not connected or contract not initialized.");
//         return;
//     }

//     // 1. Check for sufficient credits (based on local state)
//     if (userData.credits < TRANSACTION_COST_CREDITS) {
//         setMessage(`Transaction rejected: Insufficient credits. You need ${TRANSACTION_COST_CREDITS} credit(s) to insert a product.`);
//         return;
//     }

//     const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);

//     // Prepare the final arguments (Must match the ABI for 'insert')
//     const args = [
//         newProductData.name,
//         newProductData.manufacturer,
//         // Convert to BigInt if the Solidity function expects uint256/int
//         ethers.toBigInt(timestampInSeconds), 
//         newProductData.initialLocation,
//         newProductData.metadataURI,
//     ];

//     try {
//         setMessage(`Preparing transaction for product ${newProductData.name}...`);

//         // Connect the contract instance to the signer to enable writing
//         const contractWithSigner = contractInstance.connect(signer);

//         // 2. Execute the transaction
//         // NOTE: Using ethers.utils.parseEther is deprecated in v6. Use ethers.parseEther if you need to send HBAR/ETH value.
//         const tx = await contractWithSigner.insert(...args, {
//             // If the Hedera contract requires HBAR fee as 'value', use this:
//             // value: ethers.parseEther("0.00000001") 
//         }); 

//         setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//         const receipt = await tx.wait(); 

//         // 3. Update local user credits on success
//         if (receipt.status === 1) {
//             const newCredits = userData.credits - TRANSACTION_COST_COST_CREDITS;
//             setUserData(prev => ({ ...prev, credits: newCredits })); // Update parent state
//             setMessage(`✅ Product "${newProductData.name}" successfully added! Credits deducted. (New balance: ${newCredits})`);
//         } else {
//             // Handle transaction failure even after mining (e.g., failed assertion in contract)
//             setMessage(`Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
//         }

//     } catch (error) {
//         console.error("Error inserting product:", error);
//         // MetaMask errors (user reject, gas issues)
//         setMessage(`Transaction failed: ${error.reason || error.message || 'User rejected or network error.'}`);
//     }

//     // Reset form and view regardless of transaction result
//     setNewProductData({
//         name: '', manufacturer: '', manufactureDate: '', 
//         initialLocation: '', metadataURI: ''
//     });
//     setDevisView('buttons');
// };
    
//     // 🔍 INTEGRATED CONTRACT CALL FOR PULL (Read/View Function)
//     const handleCheckProductSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!contractInstance) {
//             setMessage("Error: Contract not initialized.");
//             return;
//         }

//         const tokenId = checkProductId.trim();
//         if (!/^\d+$/.test(tokenId)) {
//             setMessage("Error: Lot ID must be a number.");
//             setCheckedProductResult(null);
//             return;
//         }
        
//         setCheckedProductResult(null); 
//         setMessage(`Fetching details for Lot ID ${tokenId}...`);

//         try {
//             // Call the 'pull' function
//             const [lotStruct, historyArray] = await contractInstance.pull(tokenId);

//             const result = {
//                 lotId: lotStruct.lotId.toString(),
//                 name: lotStruct.name,
//                 currentHandler: lotStruct.currentHandler,
//                 manufacturer: lotStruct.manufacturer,
//                 manufactureDate: lotStruct.manufactureDate.toNumber() * 1000, 
//                 currentOwner: lotStruct.currentOwner,
//                 currentLocation: lotStruct.currentLocation,
//                 status: lotStruct.status.toString(),
//                 history: historyArray,
//             };

//             setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
//             setCheckedProductResult(result);
//         } catch (error) {
//             console.error("Error checking product:", error);
//             setMessage(`Error fetching Lot ID ${tokenId}. It may not exist.`);
//             setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//         }
//     };

//     // --- Content Renderers and Helpers (Same as previous output) ---
    
//     const formatKey = (key) => {
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             case 'status': {
//                 const statusMap = { '0': 'INACTIVE', '1': 'ACTIVE', '2': 'DISCARDED' };
//                 return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
//             }
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }

//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                     />
//                 </div>
//             ))}
            
//             <button type="submit" className="btn-primary">Submit Devis (Call Insert)</button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); 
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                     />
//                     <button type="submit" className="btn-check-submit">Check Devis (Call Pull)</button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );


//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 ); 
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers, BrowserProvider, Contract } from 'ethers'; // Ensure all Ethers imports are here
// import "../Styles/dashboard.css"; 
// import LotTrackerABI from "./LotTrackerABI.js" // ABI import

// // 🟢 Corrected Prop names: Renamed 'contract' prop to 'contractInstance'
// // The parent component should pass the contract as 'contractInstance' for consistency
// function Dashboard({ setSigner, setUserData, setMessage, userData, signer, contractInstance }) {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // State for Devis section views
//     const [devisView, setDevisView] = useState('buttons'); 
    
//     // State for Add Product form
//     const [newProductData, setNewProductData] = useState({
//         name: '', 
//         manufacturer: '', 
//         manufactureDate: '', 
//         initialLocation: '', 
//         metadataURI: '' 
//     });
    
//     // State for Check Product form
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     // --- Configuration (Keep these in the parent component for global control) ---
//     // const contractAddress = "0x14b73dec132db19ddbafc6f4dbaf3756207ff4d6"; 
//     const TRANSACTION_COST_CREDITS = 1; // Minimum credit requirement for product insertion

//     // 🔴 REMOVED: connectAndSetup and useEffect for connection/listeners. 
//     // These should reside in the parent component (App.js) to manage the state passed here via props.
//     // The Dashboard component should only use the props provided.

//     const handleLogout = () => {
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     // 💡 Helper function to convert 'YYYY-MM-DD' date string to Unix timestamp (seconds)
//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         const date = new Date(dateString + 'T00:00:00Z');
//         return Math.floor(date.getTime() / 1000);
//     };

//     // 🚀 FIXED CONTRACT CALL FOR INSERT (Write Function)
//     const handleAddProductSubmit = async (e) => {
//         e.preventDefault();

//         // Use the passed props
//         if (!userData?.address || !contractInstance || !signer) {
//             setMessage("Error: Wallet not connected or contract not initialized. Please refresh connection.");
//             return;
//         }

//         // 1. Check for sufficient credits (Custom business logic)
//         if (userData.credits < TRANSACTION_COST_CREDITS) {
//             setMessage(`Transaction rejected: Insufficient credits. You need ${TRANSACTION_COST_CREDITS} credit(s) to insert a product.`);
//             return;
//         }

//         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);

//         // Prepare the final arguments
//         const args = [
//             newProductData.name,
//             newProductData.manufacturer,
//             // Use ethers.toBigInt() for uint256 in Ethers v6
//             ethers.toBigInt(timestampInSeconds), 
//             newProductData.initialLocation,
//             newProductData.metadataURI,
//         ];

//         try {
//             setMessage(`Preparing transaction for product ${newProductData.name}...`);

//             // The contract instance is already connected to the signer via props in the parent component, 
//             // but explicitly connecting ensures the right signer is used for the transaction.
//             const contractWithSigner = contractInstance.connect(signer);

//             // 2. Execute the transaction
//             const tx = await contractWithSigner.insert(...args, {
//                 // value: ethers.parseEther("0.00000001") // Uncomment if your contract is payable
//             }); 

//             setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//             const receipt = await tx.wait(); 

//             // 3. Update local user credits on success (assuming the transaction was successful)
//             if (receipt.status === 1) {
//                 const newCredits = userData.credits - TRANSACTION_COST_CREDITS;
//                 // Use setUserData to update the credit balance in the parent state
//                 setUserData(prev => ({ ...prev, credits: newCredits })); 
//                 setMessage(`✅ Product "${newProductData.name}" successfully added! Credits deducted. (New balance: ${newCredits})`);
//             } else {
//                 setMessage(`Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
//             }

//         } catch (error) {
//             console.error("Error inserting product:", error);
//             setMessage(`Transaction failed: ${error.reason || error.message || 'User rejected or network error. Check console for details.'}`);
//         }

//         // Reset form and view
//         setNewProductData({
//             name: '', manufacturer: '', manufactureDate: '', 
//             initialLocation: '', metadataURI: ''
//         });
//         setDevisView('buttons');
//     };
    
//     // 🔍 FIXED CONTRACT CALL FOR PULL (Read/View Function)
//     const handleCheckProductSubmit = async (e) => {
//         e.preventDefault();
        
//         // Use the consistent prop name: contractInstance
//         if (!contractInstance) {
//             setMessage("Error: Contract not initialized.");
//             return;
//         }

//         const tokenId = checkProductId.trim();
//         if (!/^\d+$/.test(tokenId)) {
//             setMessage("Error: Lot ID must be a number.");
//             setCheckedProductResult(null);
//             return;
//         }
        
//         setCheckedProductResult(null); 
//         setMessage(`Fetching details for Lot ID ${tokenId}...`);

//         try {
//             // Call the 'pull' function on the contractInstance prop
//             const [lotStruct, historyArray] = await contractInstance.pull(tokenId);

//             const result = {
//                 lotId: lotStruct.lotId.toString(),
//                 name: lotStruct.name,
//                 currentHandler: lotStruct.currentHandler,
//                 manufacturer: lotStruct.manufacturer,
//                 // Convert BigInt manufactureDate to milliseconds
//                 manufactureDate: Number(lotStruct.manufactureDate) * 1000, 
//                 currentOwner: lotStruct.currentOwner,
//                 currentLocation: lotStruct.currentLocation,
//                 status: lotStruct.status.toString(),
//                 history: historyArray,
//             };

//             setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
//             setCheckedProductResult(result);
//         } catch (error) {
//             console.error("Error checking product:", error);
//             setMessage(`Error fetching Lot ID ${tokenId}. It may not exist or the transaction failed.`);
//             setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//         }
//     };

//     // --- Rendering functions (formatKey, renderAddDevisForm, renderCheckDevisForm, renderContent) remain the same ---
    
//     const formatKey = (key) => {
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             case 'status': {
//                 const statusMap = { '0': 'INACTIVE', '1': 'ACTIVE', '2': 'DISCARDED' };
//                 return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
//             }
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }

//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                     />
//                 </div>
//             ))}
            
//             <button type="submit" className="btn-primary">Submit Devis (Cost: {TRANSACTION_COST_CREDITS} Credit)</button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); 
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                     />
//                     <button type="submit" className="btn-check-submit">Check Devis (Call Pull)</button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );


//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 );    
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers, Contract, BrowserProvider } from 'ethers'; // Make sure Ethers is imported
// import "../Styles/dashboard.css"; 
// import LotTrackerABI from "./LotTrackerABI.js"

// // 🟢 ACCEPT ALL NECESSARY PROPS - Using 'contract' instead of 'contractInstance'
// // Removed setContract as this component shouldn't set the contract, only use it.
// function Dashboard({ setSigner, setUserData, setMessage, userData, signer, contract }) {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // State for Devis section views
//     const [devisView, setDevisView] = useState('buttons'); 
    
//     // State for Add Product form
//     const [newProductData, setNewProductData] = useState({
//         name: '', 
//         manufacturer: '', 
//         manufactureDate: '', 
//         initialLocation: '', 
//         metadataURI: '' 
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isChecking, setIsChecking] = useState(false);
    
//     // State for Check Product form
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     // Constant for the minimum credit requirement
//     const TRANSACTION_COST_CREDITS = 1;

//     // --- Connection/Setup (Redundant, but kept for context until parent refactoring) ---
//     const contractAddress = "0x14b73dec132db19ddbafc6f4dbaf3756207ff4d6";
//     const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

//     // const connectAndSetup = async () => {
//     //     // ... (This logic is usually handled by the parent component)
//     //     if (typeof window.ethereum === 'undefined') {
//     //         setMessage("MetaMask is not installed. Please install it.");
//     //         return;
//     //     }

//     //     try {
//     //         const provider = new BrowserProvider(window.ethereum);
//     //         await provider.send("eth_requestAccounts", []);
            
//     //         const network = await provider.getNetwork();
//     //         if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
//     //             setMessage("MetaMask is connected but on the wrong network. Please switch to **Hedera Testnet**.");
//     //             return;
//     //         }

//     //         const _signer = await provider.getSigner();
//     //         setSigner(_signer);
            
//     //         // NOTE: This creates a new contract instance locally, which might override the parent state
//     //         // It's generally better to let the parent pass the initialized contract via prop 'contract'
//     //         const _contract = new Contract(contractAddress, LotTrackerABI, _signer);
//     //         setContract(_contract); // If setContract existed as a prop, uncomment this

//     //         setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);
//     //     } catch (error) {
//     //         console.error("MetaMask connection failed:", error);
//     //         setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`);
//     //     }
//     // };

//     const connectAndSetup = async () => {
//     if (typeof window.ethereum === 'undefined') {
//         setMessage("MetaMask is not installed. Please install it.");
//         return;
//     }

//     try {
//         const provider = new BrowserProvider(window.ethereum);
//         await provider.send("eth_requestAccounts", []);

//         const network = await provider.getNetwork();
//         if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
//             setMessage("MetaMask is connected but on the wrong network. Please switch to **Hedera Testnet**.");
//             return;
//         }

//         const _signer = await provider.getSigner();
//         setSigner(_signer);

//         // ❌ Removed this because Dashboard does not manage contract state
//         // const _contract = new Contract(contractAddress, LotTrackerABI, _signer);
//         // setContract(_contract);

//         setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);
//     } catch (error) {
//         console.error("MetaMask connection failed:", error);
//         setMessage(`Connection failed. Error: ${error.message || "User rejected connection or network error."}`);
//     }
// };


//     useEffect(() => {
//         // Keeping this for the sake of completeness based on your provided context,
//         // though it's still best practice to manage connection state higher up.
//         connectAndSetup();

//         window.ethereum?.on('accountsChanged', connectAndSetup);
//         window.ethereum?.on('chainChanged', connectAndSetup);

//         return () => {
//             window.ethereum?.removeListener('accountsChanged', connectAndSetup);
//             window.ethereum?.removeListener('chainChanged', connectAndSetup);
//         };
//     }, []); 
//     // --------------------------------------------------------------------------

//     const handleLogout = () => {
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     // 💡 Helper function to convert 'YYYY-MM-DD' date string to Unix timestamp (seconds)
//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         const date = new Date(dateString + 'T00:00:00Z');
//         return Math.floor(date.getTime() / 1000);
//     };


//     // --- Content Renderers and Helpers (Same as previous output) ---
    
// //     const handleAddProductSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!contract || !signer) {
// //         setMessage("⚠️ Contract or signer not available. Connect wallet first.");
// //         return;
// //     }

// //     setIsSubmitting(true);
// //     setMessage("Submitting transaction...");

// //     try {
// //         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
// //         const tx = await contract.connect(signer).insert(
// //             newProductData.name,
// //             newProductData.manufacturer,
// //             ethers.toBigInt(timestampInSeconds),
// //             newProductData.initialLocation,
// //             newProductData.metadataURI
// //         );

// //         setMessage(`Transaction sent (hash: ${tx.hash})`);
// //         const receipt = await tx.wait();
// //         setMessage(receipt.status === 1 ? "✅ Product added successfully!" : "❌ Transaction failed");

// //         // Reset form
// //         setNewProductData({ name: '', manufacturer: '', manufactureDate: '', initialLocation: '', metadataURI: '' });
// //     } catch (err) {
// //         console.error(err);
// //         setMessage(`Error: ${err.reason || err.message}`);
// //     } finally {
// //         setIsSubmitting(false);
// //     }
// // };

// // // --- Check Product (Lot/Devis) ---
// // const handleCheckProductSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!contract) {
// //         setMessage("Error: Contract not initialized.");
// //         return;
// //     }

// //     const tokenId = checkProductId.trim();
// //     if (!/^\d+$/.test(tokenId)) {
// //         setMessage("Lot ID must be a number.");
// //         setCheckedProductResult(null);
// //         return;
// //     }

// //     setIsChecking(true);
// //     setCheckedProductResult(null);
// //     setMessage(`Fetching Lot ID ${tokenId}...`);

// //     try {
// //         const [lotStruct, historyArray] = await contract.pull(tokenId);
// //         if (!lotStruct || lotStruct.lotId === undefined) throw new Error("Lot not found");

// //         const result = {
// //             lotId: lotStruct.lotId.toString(),
// //             name: lotStruct.name,
// //             currentHandler: lotStruct.currentHandler,
// //             manufacturer: lotStruct.manufacturer,
// //             manufactureDate: Number(lotStruct.manufactureDate) * 1000,
// //             currentOwner: lotStruct.currentOwner,
// //             currentLocation: lotStruct.currentLocation,
// //             status: lotStruct.status.toString(),
// //             history: historyArray,
// //         };

// //         setCheckedProductResult(result);
// //         setMessage(`✅ Lot ID ${tokenId} retrieved successfully.`);
// //     } catch (err) {
// //         console.error(err);
// //         setMessage(`Error fetching Lot ID ${tokenId}: ${err.message}`);
// //         setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
// //     } finally {
// //         setIsChecking(false);
// //     }
// // };


// const handleAddProductSubmit = async (e) => {
//     e.preventDefault();

//     if (!contract || !signer) {
//         setMessage("⚠️ Contract or signer not available. Connect wallet first.");
//         return;
//     }

//     setIsSubmitting(true);
//     setMessage("Submitting transaction...");

//     try {
//         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);

//         // Use the contract as-is; do not call .connect(signer) if parent passed signer-connected contract
//         const tx = await contract.insert(
//             newProductData.name,
//             newProductData.manufacturer,
//             ethers.toBigInt(timestampInSeconds),
//             newProductData.initialLocation,
//             newProductData.metadataURI
//         );

//         setMessage(`Transaction sent (hash: ${tx.hash})`);
//         const receipt = await tx.wait();
//         setMessage(receipt.status === 1 ? "✅ Product added successfully!" : "❌ Transaction failed");

//         // Reset form
//         setNewProductData({ name: '', manufacturer: '', manufactureDate: '', initialLocation: '', metadataURI: '' });
//     } catch (err) {
//         console.error(err);
//         setMessage(`Error: ${err.reason || err.message || err}`);
//     } finally {
//         setIsSubmitting(false);
//     }
// };

// const handleCheckProductSubmit = async (e) => {
//     e.preventDefault();

//     if (!contract) {
//         setMessage("Error: Contract not initialized.");
//         return;
//     }

//     const tokenId = checkProductId.trim();
//     if (!/^\d+$/.test(tokenId)) {
//         setMessage("Lot ID must be a number.");
//         setCheckedProductResult(null);
//         return;
//     }

//     setIsChecking(true);
//     setCheckedProductResult(null);
//     setMessage(`Fetching Lot ID ${tokenId}...`);

//     try {
//         // Ensure tokenId is converted properly if contract expects BigInt
//         const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

//         if (!lotStruct || lotStruct.lotId === undefined) throw new Error("Lot not found");

//         const result = {
//             lotId: lotStruct.lotId.toString(),
//             name: lotStruct.name,
//             currentHandler: lotStruct.currentHandler,
//             manufacturer: lotStruct.manufacturer,
//             manufactureDate: Number(lotStruct.manufactureDate) * 1000,
//             currentOwner: lotStruct.currentOwner,
//             currentLocation: lotStruct.currentLocation,
//             status: lotStruct.status.toString(),
//             history: historyArray,
//         };

//         setCheckedProductResult(result);
//         setMessage(`✅ Lot ID ${tokenId} retrieved successfully.`);
//     } catch (err) {
//         console.error(err);
//         setMessage(`Error fetching Lot ID ${tokenId}: ${err.message || err}`);
//         setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//     } finally {
//         setIsChecking(false);
//     }
// };

//     const formatKey = (key) => {
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             case 'status': {
//                 const statusMap = { '0': 'INACTIVE', '1': 'ACTIVE', '2': 'DISCARDED' };
//                 return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
//             }
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }

//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                     />
//                 </div>
//             ))}
            
//             <button type="submit" className="btn-primary">Submit Devis (Cost: {TRANSACTION_COST_CREDITS} Credit)</button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); 
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                     />
//                     <button type="submit" className="btn-check-submit">Check Devis (Call Pull)</button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );


//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 ); 
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers, Contract, BrowserProvider } from 'ethers';
// import "../Styles/dashboard.css"; 
// // Assuming LotTrackerABI.js is correctly defined
// import LotTrackerABI from "./LotTrackerABI.js" 

// // 🟢 ACCEPT ALL NECESSARY PROPS
// function Dashboard({ setSigner, setUserData, setMessage, userData, signer, contract }) {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     // State for Devis section views
//     const [devisView, setDevisView] = useState('buttons'); 
    
//     // State for Add Product form
//     const [newProductData, setNewProductData] = useState({
//         name: '', 
//         manufacturer: '', 
//         manufactureDate: '', 
//         initialLocation: '', 
//         metadataURI: '' 
//     });
//     // State to manage button loading/disabling
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isChecking, setIsChecking] = useState(false);
    
//     // State for Check Product form
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     // Hardcoded Contract Constants
//     const contractAddress = "0x14b73dec132db19ddbafc6f4dbaf3756207ff4d6";
//     const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

//     // 🛠️ FIXED: Wallet Connection Logic
//     const connectAndSetup = useCallback(async () => {
//         if (typeof window.ethereum === 'undefined') {
//             setMessage("MetaMask is not installed. Please install it.");
//             return;
//         }

//         try {
//             const provider = new BrowserProvider(window.ethereum);
//             // This line triggers the MetaMask popup if not connected
//             await provider.send("eth_requestAccounts", []); 

//             const network = await provider.getNetwork();
//             if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
//                 setMessage("MetaMask is connected but on the wrong network. Please switch to **Hedera Testnet**.");
//                 return;
//             }

//             const _signer = await provider.getSigner();
//             setSigner(_signer);

//             setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);
//         } catch (error) {
//             console.error("MetaMask connection failed:", error);
//             // Better user feedback for common errors like user rejection
//             setMessage(`Connection failed. Error: ${error.message.includes('user rejected') ? 'User rejected connection.' : error.message || "Network error."}`);
//         }
//     }, [setSigner, setMessage]);

//     // useEffect(() => {
//     //     // Initial connection attempt
//     //     connectAndSetup();

//     //     // Listeners for changes
//     //     window.ethereum?.on('accountsChanged', connectAndSetup);
//     //     window.ethereum?.on('chainChanged', connectAndSetup);

//     //     return () => {
//     //         window.ethereum?.removeListener('accountsChanged', connectAndSetup);
//     //         window.ethereum?.removeListener('chainChanged', connectAndSetup);
//     //     };
//     // }, [connectAndSetup]); 


//     useEffect(() => {
//         // ✅ Removed connectAndSetup();

//         // Keep listeners active to handle changes if they connect via another tab
//         window.ethereum?.on('accountsChanged', connectAndSetup);
//         window.ethereum?.on('chainChanged', connectAndSetup);

//         return () => {
//             window.ethereum?.removeListener('accountsChanged', connectAndSetup);
//             window.ethereum?.removeListener('chainChanged', connectAndSetup);
//         };
//     }, [connectAndSetup]);
//     // --------------------------------------------------------------------------

//     const handleLogout = () => {
//         if (setSigner) setSigner(null);
//         if (setUserData) setUserData(null);
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     // 💡 Helper function to convert 'YYYY-MM-DD' date string to Unix timestamp (seconds)
//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         // Use 'T00:00:00Z' to force UTC and prevent local timezone issues
//         const date = new Date(dateString + 'T00:00:00Z'); 
//         return Math.floor(date.getTime() / 1000);
//     };

//     // 🚀 FIXED INSERT FUNCTION (Write Function) - No credit check, safe submit
//     const handleAddProductSubmit = async (e) => {
//         e.preventDefault();

//         // 1. Check Prerequisites
//         if (!contract || !signer) {
//             setMessage("Error: Wallet not connected or contract/signer not initialized. Please connect your wallet first.");
//             return;
//         }

//         // Set loading state and message
//         setIsSubmitting(true);
//         setMessage(`Preparing transaction for product ${newProductData.name}...`);

//         try {
//             const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
            
//             // 2. Ensure the contract is connected to the signer for a WRITE operation
//             const contractWithSigner = contract.connect(signer);

//             // 3. Execute the transaction
//             const tx = await contractWithSigner.insert(
//                 newProductData.name,
//                 newProductData.manufacturer,
//                 ethers.toBigInt(timestampInSeconds), // Ethers v6 standard
//                 newProductData.initialLocation,
//                 newProductData.metadataURI,
//             ); 

//             setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//             const receipt = await tx.wait(); 

//             // 4. Final confirmation
//             if (receipt.status === 1) {
//                 setMessage(`✅ Product "${newProductData.name}" successfully added!`);
//             } else {
//                 setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
//             }

//         } catch (error) {
//             console.error("Error inserting product:", error);
//             // Better error reporting
//             const errorMessage = error.reason || error.message.includes('user rejected') ? 'Transaction rejected by user.' : error.message || 'Network error.';
//             setMessage(`Transaction failed: ${errorMessage}`);
//         } finally {
//             setIsSubmitting(false);
//             // Reset form and view on completion/failure
//             setNewProductData({
//                 name: '', manufacturer: '', manufactureDate: '', 
//                 initialLocation: '', metadataURI: ''
//             });
//             // Keep user on the form temporarily if failed, or revert to buttons on success
//             if (activeSection === 'devis') setDevisView('buttons'); 
//         }
//     };
    
//     // 🔍 FIXED CONTRACT CALL FOR PULL (Read/View Function)
//     const handleCheckProductSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!contract) {
//             setMessage("Error: Contract not initialized.");
//             return;
//         }

//         const tokenId = checkProductId.trim();
//         if (!/^\d+$/.test(tokenId)) {
//             setMessage("Error: Lot ID must be a number.");
//             setCheckedProductResult(null);
//             return;
//         }
        
//         setIsChecking(true);
//         setCheckedProductResult(null); 
//         setMessage(`Fetching details for Lot ID ${tokenId}...`);

//         try {
//             // Use ethers.toBigInt for robust compatibility with solidity uint256
//             const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

//             const result = {
//                 lotId: lotStruct.lotId.toString(),
//                 name: lotStruct.name,
//                 currentHandler: lotStruct.currentHandler,
//                 manufacturer: lotStruct.manufacturer,
//                 // Convert BigInt manufactureDate to milliseconds
//                 manufactureDate: Number(lotStruct.manufactureDate) * 1000, 
//                 currentOwner: lotStruct.currentOwner,
//                 currentLocation: lotStruct.currentLocation,
//                 status: lotStruct.status.toString(),
//                 history: historyArray,
//             };

//             setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
//             setCheckedProductResult(result);
//         } catch (error) {
//             console.error("Error checking product:", error);
//             setMessage(`Error fetching Lot ID ${tokenId}. It may not exist or the transaction failed.`);
//             setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//         } finally {
//             setIsChecking(false);
//         }
//     };

//     // --- Content Renderers and Helpers (Preserved) ---
    
//     const formatKey = (key) => {
//         const statusMap = { '0': 'INACTIVE', '1': 'ACTIVE', '2': 'DISCARDED' };
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             case 'status': return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }

//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                         // Disable inputs while transaction is processing
//                         disabled={isSubmitting} 
//                     />
//                 </div>
//             ))}
            
//             <button 
//                 type="submit" 
//                 className="btn-primary" 
//                 disabled={isSubmitting} // Disable button while submitting
//             >
//                 {isSubmitting ? 'Submitting Transaction...' : `Submit Devis`}
//             </button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//                 disabled={isSubmitting} // Disable back button during submission
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); 
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                         disabled={isChecking}
//                     />
//                     <button type="submit" className="btn-check-submit" disabled={isChecking}>
//                         {isChecking ? 'Checking...' : 'Check Devis (Call Pull)'}
//                     </button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//                 disabled={isChecking}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );


//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || (signer ? signer.address : 'Not Connected')}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 ); 
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers, Contract } from 'ethers';
// import "../Styles/dashboard.css"; 
// import LotTrackerABI from "./LotTrackerABI.js";
// import CreditTokenABI from './CreditTokenABI.js'; 

// // 🟢 ACCEPT ALL NECESSARY PROPS, INCLUDING CONTRACT and SIGNER
// function Dashboard({ setUserData, setMessage, userData, signer, contract }) {
    
//     // --- Component State ---
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     const [devisView, setDevisView] = useState('buttons'); 
//     const [newProductData, setNewProductData] = useState({
//         name: '', manufacturer: '', manufactureDate: '', 
//         initialLocation: '', metadataURI: '' 
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isChecking, setIsChecking] = useState(false);
    
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     const toggleSidebar = () => setIsSidebarOpen(prev => !prev); // Use functional update for safety

//     // --- Utility Functions ---

//     const handleLogout = () => {
//         // Clearing userData in App.jsx's parent state will trigger the cleanup 
//         // (clearing signer/contract) via App.jsx's useEffect.
//         if (setUserData) setUserData(null); 
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         const date = new Date(dateString + 'T00:00:00Z'); 
//         return Math.floor(date.getTime() / 1000);
//     };
    
//     const formatKey = (key) => {
//         const statusMap = { '0': 'INACTIVE', '1': 'ACTIVE', '2': 'DISCARDED' };
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             case 'status': return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }


//     // --- Transaction/Read Functions ---

//     // const handleAddProductSubmit = async (e) => {
//     //     e.preventDefault();

//     //     // ⚠️ CRITICAL CHECK: Ensure props are available
//     //     if (!contract || !signer) {
//     //         setMessage("Error: Wallet not connected or contract/signer not initialized. Please connect your wallet first.");
//     //         return; 
//     //     }

//     //     setIsSubmitting(true);
//     //     setMessage(`Preparing transaction for product ${newProductData.name}...`);

//     //     try {
//     //         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
            
//     //         // Execute the transaction using the contract prop (already connected to signer in App.jsx)
//     //         const tx = await contract.insert(
//     //             newProductData.name,
//     //             newProductData.manufacturer,
//     //             ethers.toBigInt(timestampInSeconds),
//     //             newProductData.initialLocation,
//     //             newProductData.metadataURI,
//     //         ); 

//     //         setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//     //         const receipt = await tx.wait(); 

//     //         if (receipt.status === 1) {
//     //             setMessage(`✅ Product "${newProductData.name}" successfully added!`);
//     //         } else {
//     //             setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
//     //         }

//     //     } catch (error) {
//     //         console.error("Error inserting product:", error);
//     //         const errorMessage = error.reason || error.message.includes('user rejected') ? 'Transaction rejected by user.' : error.message || 'Network error.';
//     //         setMessage(`Transaction failed: ${errorMessage}`);
//     //     } finally {
//     //         setIsSubmitting(false);
//     //         setNewProductData({
//     //             name: '', manufacturer: '', manufactureDate: '', 
//     //             initialLocation: '', metadataURI: ''
//     //         });
//     //         if (activeSection === 'devis') setDevisView('buttons'); 
//     //     }
//     // };


//     // Inside Dashboard.jsx, within the handleAddProductSubmit function

// // const handleAddProductSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!contract || !signer) {
// //         setMessage("Error: Wallet not connected or contract/signer not initialized. Please connect your wallet first.");
// //         return; 
// //     }

// //     setIsSubmitting(true);
// //     setMessage(`Preparing transaction for product ${newProductData.name}...`);

// //     try {
// //         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
        
// //         // 🚨 FIX: Define the fee to attach to the transaction.
// //         // On Hedera, this fee is required for the gas/interaction fee.
// //         // Use a very small value, e.g., 100 Gwei (100 * 10^9 wei, or 0.0000001 ETH/HBAR).
// //         // This value might need slight adjustment based on network fee changes.
// //         const interactionFee = ethers.parseUnits("10000", "gwei"); // Use 100 Gwei as an example minimal fee

// //         // 2. Execute the transaction, passing the value in the options object.
// //         const tx = await contract.insert(
// //             newProductData.name,
// //             newProductData.manufacturer,
// //             ethers.toBigInt(timestampInSeconds),
// //             newProductData.initialLocation,
// //             newProductData.metadataURI,
// //             { 
// //                 value: interactionFee // <-- 🎯 This is the crucial change
// //             }
// //         ); 

// //         setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

// //         const receipt = await tx.wait(); 

// //         // ... (rest of success/failure logic)
// //         if (receipt.status === 1) {
// //             setMessage(`✅ Product "${newProductData.name}" successfully added!`);
// //         } else {
// //             setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
// //         }

// //     } catch (error) {
// //         console.error("Error inserting product:", error);
// //         // ... (rest of error handling)
// //         const errorMessage = error.reason || error.message.includes('user rejected') ? 'Transaction rejected by user.' : error.message || 'Network error.';
// //         setMessage(`Transaction failed: ${errorMessage}`);
// //     } finally {
// //         setIsSubmitting(false);
// //         // ... (form cleanup)
// //         setNewProductData({
// //             name: '', manufacturer: '', manufactureDate: '', 
// //             initialLocation: '', metadataURI: ''
// //         });
// //         if (activeSection === 'devis') setDevisView('buttons'); 
// //     }
// // };

// // --- You need the CreditToken Address and ABI/Interface (Replace placeholders) ---
// const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c"; // 👈 Replace with the actual CreditToken address
// // Assuming you have the ERC-20 ABI available (e.g., imported as CreditTokenABI)


// const handleAddProductSubmit = async (e) => {
//     e.preventDefault();

//     if (!contract || !signer) {
//         setMessage("Error: Wallet not connected or contract/signer not initialized. Please connect your wallet first.");
//         return; 
//     }

//     setIsSubmitting(true);
//     setMessage(`Preparing transaction for product ${newProductData.name}...`);

//     try {
//         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
        
//         // --- 1. DEFINE THE FEE AMOUNT ---
//         // fixedFee = 1 * 10**18 (1 token), must be a BigInt/BigNumber for ethers
//         const fixedFeeAmount = ethers.parseUnits("1", "ether"); // Assuming 18 decimals for simplicity

//         // --- 2. APPROVAL STEP (The Critical Addition) ---
//         setMessage("Step 1/2: Checking/Requesting CreditToken approval...");
        
//         // Instantiate the CreditToken contract
//         const creditTokenContract = new Contract(CREDIT_TOKEN_ADDRESS, CreditTokenABI, signer);
        
//         // Check current allowance (optional but good practice to skip unnecessary tx)
//         const allowance = await creditTokenContract.allowance(signer.address, contract.address);

//         if (allowance < fixedFeeAmount) {
//             // Request approval only if the current allowance is insufficient
//             const approvalTx = await creditTokenContract.approve(
//                 contract.address, // LotTrackr contract address
//                 fixedFeeAmount    // The amount to approve
//             );
//             setMessage(`Approval transaction sent (Hash: ${approvalTx.hash}). Waiting for confirmation...`);
//             await approvalTx.wait(); 
//             setMessage("✅ Approval successful. Proceeding to product insertion.");
//         } else {
//             setMessage("✅ Sufficient CreditToken allowance already set. Proceeding...");
//         }

//         // --- 3. EXECUTE INSERT TRANSACTION ---
//         setMessage(`Step 2/2: Sending 'insert' transaction for product ${newProductData.name}...`);
        
//         // 🚨 IMPORTANT: Remove the 'value' option! It sends HBAR/ETH, which is no longer needed 
//         // as the fee is paid in CreditToken via transferFrom.
//         const tx = await contract.insert(
//             newProductData.name,
//             newProductData.manufacturer,
//             ethers.toBigInt(timestampInSeconds),
//             newProductData.initialLocation,
//             newProductData.metadataURI
//             // NO VALUE OBJECT HERE!
//         ); 

//         setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//         const receipt = await tx.wait(); 

//         if (receipt.status === 1) {
//             setMessage(`✅ Product "${newProductData.name}" successfully added!`);
//         } else {
//             setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
//         }

//     } catch (error) {
//         console.error("Error in transaction flow:", error);
//         // Improved error message handling
//         let errorMessage = error.reason || (error.data?.message || error.message);
//         if (errorMessage.includes('user rejected')) {
//              errorMessage = 'Transaction rejected by user.';
//         } else if (errorMessage.includes('Insufficient CreditToken balance')) {
//              // Catches the specific contract revert message for qualification/fee
//              errorMessage = 'Transaction failed: Insufficient CreditToken balance (requires 100 for first use, or 1 for subsequent fees).';
//         } else if (errorMessage.includes('Token transfer failed')) {
//              errorMessage = 'Transaction failed: CreditToken transfer failed (check balance or approval).';
//         }

//         setMessage(`Transaction failed: ${errorMessage}`);
//     } finally {
//         setIsSubmitting(false);
//         // ... (form cleanup)
//         setNewProductData({
//             name: '', manufacturer: '', manufactureDate: '', 
//             initialLocation: '', metadataURI: ''
//         });
//         if (activeSection === 'devis') setDevisView('buttons'); 
//     }
// };
    
//     const handleCheckProductSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!contract) {
//             setMessage("Error: Contract not initialized. Please connect your wallet first.");
//             return;
//         }

//         const tokenId = checkProductId.trim();
//         if (!/^\d+$/.test(tokenId)) {
//             setMessage("Error: Lot ID must be a number.");
//             setCheckedProductResult(null);
//             return;
//         }
        
//         setIsChecking(true);
//         setCheckedProductResult(null); 
//         setMessage(`Fetching details for Lot ID ${tokenId}...`);

//         try {
//             const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

//             const result = {
//                 lotId: lotStruct.lotId.toString(),
//                 name: lotStruct.name,
//                 currentHandler: lotStruct.currentHandler,
//                 manufacturer: lotStruct.manufacturer,
//                 manufactureDate: Number(lotStruct.manufactureDate) * 1000, 
//                 currentOwner: lotStruct.currentOwner,
//                 currentLocation: lotStruct.currentLocation,
//                 status: lotStruct.status.toString(),
//                 history: historyArray,
//             };

//             setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
//             setCheckedProductResult(result);
//         } catch (error) {
//             console.error("Error checking product:", error);
//             setMessage(`Error fetching Lot ID ${tokenId}. It may not exist or the transaction failed.`);
//             setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//         } finally {
//             setIsChecking(false);
//         }
//     };


//     // --- Render Helper Functions (Preserved) ---
    
//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                         disabled={isSubmitting} 
//                     />
//                 </div>
//             ))}
            
//             <button 
//                 type="submit" 
//                 className="btn-primary" 
//                 disabled={isSubmitting}
//             >
//                 {isSubmitting ? 'Submitting Transaction...' : `Submit Devis`}
//             </button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//                 disabled={isSubmitting}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); 
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                         disabled={isChecking}
//                     />
//                     <button type="submit" className="btn-check-submit" disabled={isChecking}>
//                         {isChecking ? 'Checking...' : 'Check Devis (Call Pull)'}
//                     </button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//                 disabled={isChecking}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );

//     // --- Main Content Renderer (All Cases Included) ---

//     const renderContent = () => {
        
//         // 🚨 CRITICAL CONDITIONAL RENDER: Block access if the wallet is not connected.
//         if (!signer || !userData?.address) {
//              return (
//                 <div className="connection-required">
//                     <h2>Wallet Connection Required</h2>
//                     <p>Your user session is active, but the wallet is not connected. Please navigate to the **Demo/Login** page to initiate the MetaMask connection, or ensure MetaMask is installed and on the Hedera Testnet.</p>
//                     <button className="btn-primary" onClick={() => navigate('/Demo')}>
//                         Go to Connect Page
//                     </button>
//                     <p style={{marginTop: '15px', color: '#888'}}>
//                         *Ensure you are on the Hedera Testnet network.
//                     </p>
//                 </div>
//             );
//         }
        
//         // If signer is present, render the selected section
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {signer.address}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <div className="dashboard-widget">
//                             <p>This section is reserved for listing and managing registered users, typically accessible by an administrator.</p>
//                             <ul>
//                                 <li>View user list (placeholder)</li>
//                                 <li>Update user roles (placeholder)</li>
//                                 <li>Search users by address (placeholder)</li>
//                             </ul>
//                         </div>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 ); 
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <div className="dashboard-widget">
//                             <p>This section will contain user-specific settings:</p>
//                             <ul>
//                                 <li>Change Username/Email (Local State Update)</li>
//                                 <li>Update Metadata URI (Placeholder)</li>
//                                 <li>View Transaction History (Placeholder)</li>
//                             </ul>
//                         </div>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     // --- Main Component Structure ---

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()} {/* Main content rendered here */}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers, Contract } from 'ethers';
// import "../Styles/dashboard.css"; 
// import LotTrackerABI from "./LotTrackerABI.js";
// import CreditTokenABI from './CreditTokenABI.js'; 

// // 🟢 ACCEPT ALL NECESSARY PROPS, INCLUDING CONTRACT and SIGNER
// function Dashboard({ setUserData, setMessage, userData, signer, contract }) {
    
//     // --- Component State ---
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     const [devisView, setDevisView] = useState('buttons'); 
//     const [newProductData, setNewProductData] = useState({
//         name: '', manufacturer: '', manufactureDate: '', 
//         initialLocation: '', metadataURI: '' 
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isChecking, setIsChecking] = useState(false);
    
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     const toggleSidebar = () => setIsSidebarOpen(prev => !prev); 

//     // --- Utility Functions ---

//     const handleLogout = () => {
//         if (setUserData) setUserData(null); 
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         const date = new Date(dateString + 'T00:00:00Z'); 
//         return Math.floor(date.getTime() / 1000);
//     };
    
//     const formatKey = (key) => {
//         const statusMap = { '0': 'INACTIVE', '1': 'ACTIVE', '2': 'DISCARDED' };
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             case 'status': return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }


//     // --- Transaction/Read Functions ---

//     // You need the CreditToken Address and ABI/Interface (Replace placeholders)
//     // 🚨 Ensure this address is the correct deployed 0x... CreditToken address!
//     const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c"; // Placeholder - Update with the actual address

//     // const handleAddProductSubmit = async (e) => {
//     //     e.preventDefault();

//     //     // ⚠️ CRITICAL CHECK: Ensure props are available
//     //     if (!contract || !signer) {
//     //         setMessage("Error: Wallet not connected or LotTrackr contract/signer not initialized. Please connect your wallet first.");
//     //         return; 
//     //     }

//     //     setIsSubmitting(true);
//     //     setMessage(`Preparing transaction for product ${newProductData.name}...`);

//     //     try {
//     //         // 🚨 FIX 1: Resolve the LotTrackr contract address correctly (ethers v6)
//     //         const lotTrackrAddress = await contract.getAddress(); 

//     //         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
            
//     //         // --- 1. DEFINE THE FEE AMOUNT ---
//     //         // fixedFee = 1 * 10**18 (1 token), must be a BigInt/BigNumber for ethers
//     //         // NOTE: If your fixedFee is NOT 1 token, you need to call lotTrackr.fixedFee()
//     //         const fixedFeeAmount = ethers.parseUnits("1", "ether"); // Assuming 18 decimals for 1 token

//     //         // --- 2. APPROVAL STEP (The Critical Addition) ---
//     //         setMessage("Step 1/2: Checking/Requesting CreditToken approval...");
            
//     //         // Instantiate the CreditToken contract
//     //         const creditTokenContract = new Contract(CREDIT_TOKEN_ADDRESS, CreditTokenABI, signer);
            
//     //         // Check current allowance (optional but good practice to skip unnecessary tx)
//     //         // 🚨 FIX 2: Use the resolved lotTrackrAddress
//     //         const allowance = await creditTokenContract.allowance(signer.address, lotTrackrAddress);

//     //         if (allowance < fixedFeeAmount) {
//     //             // Request approval only if the current allowance is insufficient
//     //             const approvalTx = await creditTokenContract.approve(
//     //                 lotTrackrAddress, // LotTrackr contract address
//     //                 fixedFeeAmount    // The amount to approve
//     //             );
//     //             setMessage(`Approval transaction sent (Hash: ${approvalTx.hash}). Waiting for confirmation...`);
//     //             await approvalTx.wait(); 
//     //             setMessage("✅ Approval successful. Proceeding to product insertion.");
//     //         } else {
//     //             setMessage("✅ Sufficient CreditToken allowance already set. Proceeding...");
//     //         }

//     //         // --- 3. EXECUTE INSERT TRANSACTION ---
//     //         setMessage(`Step 2/2: Sending 'insert' transaction for product ${newProductData.name}...`);
            
//     //         // Execute the transaction
//     //         const tx = await contract.insert(
//     //             newProductData.name,
//     //             newProductData.manufacturer,
//     //             ethers.toBigInt(timestampInSeconds),
//     //             newProductData.initialLocation,
//     //             newProductData.metadataURI
//     //             // NO VALUE OBJECT HERE! Fee is paid via transferFrom inside the contract
//     //         ); 

//     //         setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//     //         const receipt = await tx.wait(); 

//     //         if (receipt.status === 1) {
//     //             setMessage(`✅ Product "${newProductData.name}" successfully added!`);
//     //         } else {
//     //             setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
//     //         }

//     //     } catch (error) {
//     //         console.error("Error in transaction flow:", error);
//     //         // Improved error message handling
//     //         let errorMessage = error.reason || (error.data?.message || error.message);
//     //         if (errorMessage.includes('user rejected')) {
//     //              errorMessage = 'Transaction rejected by user.';
//     //         } else if (errorMessage.includes('Insufficient CreditToken balance')) {
//     //              errorMessage = 'Transaction failed: Insufficient CreditToken balance (requires 100 for first use, or 1 for subsequent fees).';
//     //         } else if (errorMessage.includes('Token transfer failed') || errorMessage.includes('ERC20InsufficientAllowance')) {
//     //              errorMessage = 'Transaction failed: CreditToken transfer failed (check balance or approval).';
//     //         } else if (errorMessage.includes('unsupported addressable value')) {
//     //              errorMessage = 'Configuration Error: LotTrackr contract address is missing or invalid.'; // Added this error catch
//     //         }

//     //         setMessage(`Transaction failed: ${errorMessage}`);
//     //     } finally {
//     //         setIsSubmitting(false);
//     //         setNewProductData({
//     //             name: '', manufacturer: '', manufactureDate: '', 
//     //             initialLocation: '', metadataURI: ''
//     //         });
//     //         if (activeSection === 'devis') setDevisView('buttons'); 
//     //     }
//     // };
    
//     // --- The rest of your component code remains unchanged ---

// //     const handleAddProductSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!contract || !signer) {
// //         setMessage("Error: Wallet not connected or LotTrackr contract/signer not initialized. Please connect your wallet first.");
// //         return; 
// //     }

// //     setIsSubmitting(true);
// //     setMessage(`Preparing transaction for product ${newProductData.name}...`);

// //     try {
// //         const lotTrackrAddress = await contract.getAddress(); 
// //         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
        
// //         // --- 1. DEFINE THE FEE AMOUNT ---
// //         const fixedFeeAmount = ethers.parseUnits("1", "ether"); // Assuming 18 decimals for 1 CreditToken
        
// //         // 🎯 CRITICAL FIX: Define the HBAR fee required by the Hedera network
// //         // Use a small but sufficient HBAR amount. 100 Gwei (0.0000001 ETH/HBAR) is often a safe minimal start.
// //         const interactionFee = ethers.parseUnits("100000", "gwei"); 

// //         // --- 2. APPROVAL STEP (CreditToken) ---
// //         setMessage("Step 1/2: Checking/Requesting CreditToken approval...");
        
// //         const creditTokenContract = new Contract(CREDIT_TOKEN_ADDRESS, CreditTokenABI, signer);
// //         const allowance = await creditTokenContract.allowance(signer.address, lotTrackrAddress);

// //         if (allowance < fixedFeeAmount) {
// //             const approvalTx = await creditTokenContract.approve(
// //                 lotTrackrAddress, // LotTrackr contract address
// //                 fixedFeeAmount    
// //             );
// //             setMessage(`Approval transaction sent (Hash: ${approvalTx.hash}). Waiting for confirmation...`);
// //             await approvalTx.wait(); 
// //             setMessage("✅ Approval successful. Proceeding to product insertion.");
// //         } else {
// //             setMessage("✅ Sufficient CreditToken allowance already set. Proceeding...");
// //         }

// //         // --- 3. EXECUTE INSERT TRANSACTION (LotTrackr) ---
// //         setMessage(`Step 2/2: Sending 'insert' transaction for product ${newProductData.name}...`);
        
// //         // 🚀 THE FIX: Include the interactionFee in the transaction options
// //         const tx = await contract.insert(
// //             newProductData.name,
// //             newProductData.manufacturer,
// //             ethers.toBigInt(timestampInSeconds),
// //             newProductData.initialLocation,
// //             newProductData.metadataURI,
// //             { 
// //                 value: interactionFee // <-- 🎯 This pays the HBAR network fee
// //             }
// //         ); 

// //         setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

// //         const receipt = await tx.wait(); 

// //         if (receipt.status === 1) {
// //             setMessage(`✅ Product "${newProductData.name}" successfully added!`);
// //         } else {
// //             setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
// //         }

// //     } catch (error) {
// //         console.error("Error in transaction flow:", error);
// //         // ... (Improved error handling logic)
// //         let errorMessage = error.reason || (error.data?.message || error.message);
// //         if (errorMessage.includes('user rejected')) {
// //              errorMessage = 'Transaction rejected by user.';
// //         } else if (errorMessage.includes('Send ETH to pay the interaction fee')) {
// //              errorMessage = 'Transaction failed: Missing HBAR network fee. Ensure the transaction includes a small HBAR value.';
// //         } else if (errorMessage.includes('Insufficient CreditToken balance')) {
// //              errorMessage = 'Transaction failed: Insufficient CreditToken balance (check qualification/fee).';
// //         } else if (errorMessage.includes('Token transfer failed') || errorMessage.includes('ERC20InsufficientAllowance')) {
// //              errorMessage = 'Transaction failed: CreditToken transfer failed (check approval).';
// //         } else if (errorMessage.includes('unsupported addressable value')) {
// //              errorMessage = 'Configuration Error: LotTrackr contract address is missing or invalid.';
// //         }

// //         setMessage(`Transaction failed: ${errorMessage}`);
// //     } finally {
// //         setIsSubmitting(false);
// //         setNewProductData({
// //             name: '', manufacturer: '', manufactureDate: '', 
// //             initialLocation: '', metadataURI: ''
// //         });
// //         if (activeSection === 'devis') setDevisView('buttons'); 
// //     }
// // };

// const handleAddProductSubmit = async (e) => {
//     e.preventDefault();

//     if (!contract || !signer) {
//         setMessage("Error: Wallet not connected or LotTrackr contract/signer not initialized. Please connect your wallet first.");
//         return; 
//     }

//     setIsSubmitting(true);
//     setMessage(`Preparing transaction for product ${newProductData.name}...`);

//     try {
//         // 1. Resolve Addresses and Prepare Amounts
//         const lotTrackrAddress = await contract.getAddress(); 
//         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
        
//         // Fee for the LotTrackr contract (1 CreditToken with 18 decimals)
//         const fixedFeeAmount = ethers.parseUnits("1", "ether"); 
        
//         // Fee for the Hedera network interaction (Small HBAR fee)
//         const interactionFee = ethers.parseUnits("100", "gwei"); 

//         // 2. CreditToken Approval Check
//         setMessage("Step 1/2: Checking/Requesting CreditToken approval...");
        
//         const creditTokenContract = new Contract(CREDIT_TOKEN_ADDRESS, CreditTokenABI, signer);
        
//         const allowance = await creditTokenContract.allowance(signer.address, lotTrackrAddress);
        
//         // 💡 DEBUGGING LINE: Check your console for this output!
//         console.log(`DEBUG: LotTrackr Address: ${lotTrackrAddress}`);
//         console.log(`DEBUG: Required Fee (Wei): ${fixedFeeAmount.toString()}`);
//         console.log(`DEBUG: Current Allowance (Wei): ${allowance.toString()}`);

//         if (allowance < fixedFeeAmount) {
//             // Approve the LotTrackr contract to spend a large amount (e.g., 1000 tokens) 
//             // to avoid re-approving for every transaction.
//             const approvalAmount = ethers.parseUnits("1000", "ether"); 

//             setMessage(`Insufficient allowance. Requesting approval for ${ethers.formatUnits(approvalAmount, 18)} CreditTokens...`);
            
//             const approvalTx = await creditTokenContract.approve(
//                 lotTrackrAddress, 
//                 approvalAmount // Approves a large amount for future transactions
//             );
//             setMessage(`Approval transaction sent (Hash: ${approvalTx.hash}). Waiting for confirmation...`);
//             await approvalTx.wait(); 
//             setMessage("✅ Approval successful. Proceeding to product insertion.");
//         } else {
//             setMessage("✅ Sufficient CreditToken allowance already set. Proceeding...");
//         }

//         // 3. Execute Insert Transaction
//         setMessage(`Step 2/2: Sending 'insert' transaction for product ${newProductData.name}...`);
        
//         const tx = await contract.insert(
//             newProductData.name,
//             newProductData.manufacturer,
//             ethers.toBigInt(timestampInSeconds),
//             newProductData.initialLocation,
//             newProductData.metadataURI,
//             { 
//                 value: interactionFee // Pays the HBAR network fee
//             }
//         ); 

//         setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//         const receipt = await tx.wait(); 

//         if (receipt.status === 1) {
//             setMessage(`✅ Product "${newProductData.name}" successfully added!`);
//         } else {
//             setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
//         }

//     } catch (error) {
//         console.error("Error in transaction flow:", error);
        
//         let errorMessage = error.reason || (error.data?.message || error.message);
        
//         // Enhanced Error Reporting
//         if (errorMessage.includes('user rejected')) {
//              errorMessage = 'Transaction rejected by user.';
//         } else if (errorMessage.includes('Fee transfer failed') || errorMessage.includes('transferFrom failed')) {
//              errorMessage = 'Transaction failed: Fee transfer failed. Check that the user has a sufficient **CreditToken balance** (must be > 1 token) and that the token address is correct.';
//         } else if (errorMessage.includes('Send ETH to pay the interaction fee')) {
//              errorMessage = 'Transaction failed: Missing HBAR network fee. Ensure the transaction includes a small HBAR value.';
//         } else if (errorMessage.includes('unsupported addressable value')) {
//              errorMessage = 'Configuration Error: LotTrackr contract address or CreditToken address is missing or invalid.';
//         }

//         setMessage(`Transaction failed: ${errorMessage}`);
//     } finally {
//         setIsSubmitting(false);
//         setNewProductData({
//             name: '', manufacturer: '', manufactureDate: '', 
//             initialLocation: '', metadataURI: ''
//         });
//         if (activeSection === 'devis') setDevisView('buttons'); 
//     }
// };

//     const handleCheckProductSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!contract) {
//             setMessage("Error: Contract not initialized. Please connect your wallet first.");
//             return;
//         }

//         const tokenId = checkProductId.trim();
//         if (!/^\d+$/.test(tokenId)) {
//             setMessage("Error: Lot ID must be a number.");
//             setCheckedProductResult(null);
//             return;
//         }
        
//         setIsChecking(true);
//         setCheckedProductResult(null); 
//         setMessage(`Fetching details for Lot ID ${tokenId}...`);

//         try {
//             const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

//             const result = {
//                 lotId: lotStruct.lotId.toString(),
//                 name: lotStruct.name,
//                 currentHandler: lotStruct.currentHandler,
//                 manufacturer: lotStruct.manufacturer,
//                 manufactureDate: Number(lotStruct.manufactureDate) * 1000, 
//                 currentOwner: lotStruct.currentOwner,
//                 currentLocation: lotStruct.currentLocation,
//                 status: lotStruct.status.toString(),
//                 history: historyArray,
//             };

//             setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
//             setCheckedProductResult(result);
//         } catch (error) {
//             console.error("Error checking product:", error);
//             setMessage(`Error fetching Lot ID ${tokenId}. It may not exist or the transaction failed.`);
//             setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//         } finally {
//             setIsChecking(false);
//         }
//     };


//     // --- Render Helper Functions (Preserved) ---
    
//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                         disabled={isSubmitting} 
//                     />
//                 </div>
//             ))}
            
//             <button 
//                 type="submit" 
//                 className="btn-primary" 
//                 disabled={isSubmitting}
//             >
//                 {isSubmitting ? 'Submitting Transaction...' : `Submit Devis`}
//             </button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//                 disabled={isSubmitting}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); 
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                         disabled={isChecking}
//                     />
//                     <button type="submit" className="btn-check-submit" disabled={isChecking}>
//                         {isChecking ? 'Checking...' : 'Check Devis (Call Pull)'}
//                     </button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//                 disabled={isChecking}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );

//     // --- Main Content Renderer (All Cases Included) ---

//     const renderContent = () => {
        
//         // 🚨 CRITICAL CONDITIONAL RENDER: Block access if the wallet is not connected.
//         if (!signer || !userData?.address) {
//              return (
//                 <div className="connection-required">
//                     <h2>Wallet Connection Required</h2>
//                     <p>Your user session is active, but the wallet is not connected. Please navigate to the **Demo/Login** page to initiate the MetaMask connection, or ensure MetaMask is installed and on the Hedera Testnet.</p>
//                     <button className="btn-primary" onClick={() => navigate('/Demo')}>
//                         Go to Connect Page
//                     </button>
//                     <p style={{marginTop: '15px', color: '#888'}}>
//                         *Ensure you are on the Hedera Testnet network.
//                     </p>
//                 </div>
//             );
//         }
        
//         // If signer is present, render the selected section
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {signer.address}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <div className="dashboard-widget">
//                             <p>This section is reserved for listing and managing registered users, typically accessible by an administrator.</p>
//                             <ul>
//                                 <li>View user list (placeholder)</li>
//                                 <li>Update user roles (placeholder)</li>
//                                 <li>Search users by address (placeholder)</li>
//                             </ul>
//                         </div>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 ); 
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <div className="dashboard-widget">
//                             <p>This section will contain user-specific settings:</p>
//                             <ul>
//                                 <li>Change Username/Email (Local State Update)</li>
//                                 <li>Update Metadata URI (Placeholder)</li>
//                                 <li>View Transaction History (Placeholder)</li>
//                             </ul>
//                         </div>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     // --- Main Component Structure ---

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()} {/* Main content rendered here */}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;

// error fee contratc fonction

// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers, Contract } from 'ethers';
// import "../Styles/dashboard.css"; 
// import LotTrackerABI from "./LotTrackerABI.js";
// import CreditTokenABI from './CreditTokenABI.js'; 

// // 🚨 IMPORTANT: Replace with your actual deployed CreditToken address!
// const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c"; // Example address based on your query result

// function Dashboard({ setUserData, setMessage, userData, signer, contract }) {
    
//     // --- Component State ---
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     const [devisView, setDevisView] = useState('buttons'); 
//     const [newProductData, setNewProductData] = useState({
//         name: '', manufacturer: '', manufactureDate: '', 
//         initialLocation: '', metadataURI: '' 
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isChecking, setIsChecking] = useState(false);
    
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);
//     const [feeRecipient, setFeeRecipient] = useState('...'); // State to hold the fee recipient for debug

//     const toggleSidebar = () => setIsSidebarOpen(prev => !prev); 

//     // --- Utility Functions ---

//     // 💡 Fetch and log the Fee Recipient on load
//     useEffect(() => {
//         const checkFeeRecipient = async () => {
//             if (contract && signer) {
//                 try {
//                     const recipient = await contract.FEE_RECIPIENT();
//                     setFeeRecipient(recipient);
//                     console.log(`DEBUG: LotTrackr Fee Recipient (Solidity check): ${recipient}`);
//                     if (recipient === ethers.ZeroAddress) {
//                         setMessage("CRITICAL WARNING: LotTrackr FEE_RECIPIENT is 0x0. Fee transfers will fail!");
//                     }
//                 } catch (error) {
//                     console.error("Could not fetch FEE_RECIPIENT from contract:", error);
//                     setFeeRecipient("Error fetching");
//                 }
//             }
//         };
//         checkFeeRecipient();
//     }, [contract, signer, setMessage]);


//     const handleLogout = () => {
//         if (setUserData) setUserData(null); 
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         const date = new Date(dateString + 'T00:00:00Z'); 
//         return Math.floor(date.getTime() / 1000);
//     };
    
//     const formatKey = (key) => {
//         const statusMap = { '0': 'Active', '1': 'Inactive', '2': 'Transferred', '3': 'Discarded' };
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             case 'status': return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }


//     // --- Transaction/Read Functions ---

//     const handleAddProductSubmit = async (e) => {
//         e.preventDefault();

//         if (!contract || !signer) {
//             setMessage("Error: Wallet not connected or LotTrackr contract/signer not initialized. Please connect your wallet first.");
//             return; 
//         }

//         setIsSubmitting(true);
//         setMessage(`Preparing transaction for product ${newProductData.name}...`);

//         try {
//             // 1. Resolve Addresses and Prepare Amounts
//             const lotTrackrAddress = await contract.getAddress(); 
//             const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
            
//             // Fee for the LotTrackr contract (1 CreditToken with 18 decimals)
//             const fixedFeeAmount = ethers.parseUnits("1", "ether"); 
            
//             // Fee for the Hedera network interaction (Small HBAR fee - CRITICAL FIX)
//             const interactionFee = ethers.parseUnits("100", "gwei"); // 100 Gwei (0.0000001 ETH/HBAR)

//             // 2. CreditToken Approval Check
//             setMessage("Step 1/2: Checking/Requesting CreditToken approval...");
            
//             const creditTokenContract = new Contract(CREDIT_TOKEN_ADDRESS, CreditTokenABI, signer);
            
//             const allowance = await creditTokenContract.allowance(signer.address, lotTrackrAddress);
            
//             // 💡 DEBUGGING LINES
//             console.log(`DEBUG: LotTrackr Address: ${lotTrackrAddress}`);
//             console.log(`DEBUG: Required Fee (Wei): ${fixedFeeAmount.toString()}`);
//             console.log(`DEBUG: Current Allowance (Wei): ${allowance.toString()}`);
//             // ------------------

//             if (allowance < fixedFeeAmount) {
//                 // Approve a large amount (e.g., 1000 tokens) to minimize future approval transactions
//                 const approvalAmount = ethers.parseUnits("1000", "ether"); 

//                 setMessage(`Insufficient allowance. Requesting approval for ${ethers.formatUnits(approvalAmount, 18)} CreditTokens...`);
                
//                 const approvalTx = await creditTokenContract.approve(
//                     lotTrackrAddress, 
//                     approvalAmount 
//                 );
//                 setMessage(`Approval transaction sent (Hash: ${approvalTx.hash}). Waiting for confirmation...`);
//                 await approvalTx.wait(); 
//                 setMessage("✅ Approval successful. Proceeding to product insertion.");
//             } else {
//                 setMessage("✅ Sufficient CreditToken allowance already set. Proceeding...");
//             }

//             // 3. Execute Insert Transaction
//             setMessage(`Step 2/2: Sending 'insert' transaction for product ${newProductData.name}...`);
            
//             // 🚀 Final execution, including the HBAR value
//             const tx = await contract.insert(
//                 newProductData.name,
//                 newProductData.manufacturer,
//                 ethers.toBigInt(timestampInSeconds),
//                 newProductData.initialLocation,
//                 newProductData.metadataURI,
//                 { 
//                     value: interactionFee // Pays the HBAR network fee (CRITICAL for Hedera EVM)
//                 }
//             ); 

//             setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//             const receipt = await tx.wait(); 

//             if (receipt.status === 1) {
//                 setMessage(`✅ Product "${newProductData.name}" successfully added!`);
//             } else {
//                 setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
//             }

//         } catch (error) {
//             console.error("Error in transaction flow:", error);
            
//             let errorMessage = error.reason || (error.data?.message || error.message);
            
//             // Enhanced Error Reporting based on typical contract reverts
//             if (errorMessage.includes('user rejected')) {
//                  errorMessage = 'Transaction rejected by user.';
//             } else if (errorMessage.includes('Fee transfer failed')) {
//                  errorMessage = `Transaction failed: Fee transfer failed. Likely causes: 1. Fee Recipient is 0x0. 2. Insufficient CreditToken balance (though verified). 3. Error in LotTrackr Solidity logic.`;
//             } else if (errorMessage.includes('Insufficient CreditToken balance to qualify')) {
//                  errorMessage = `Transaction failed: You need at least 100 CreditTokens to qualify for the first transaction.`;
//             } else if (errorMessage.includes('Send ETH to pay the interaction fee')) {
//                  errorMessage = 'Transaction failed: Missing HBAR network fee. Ensure the transaction includes a small HBAR value.';
//             } else if (errorMessage.includes('unsupported addressable value')) {
//                  errorMessage = 'Configuration Error: LotTrackr contract address or CreditToken address is missing or invalid.';
//             }

//             setMessage(`Transaction failed: ${errorMessage}`);
//         } finally {
//             setIsSubmitting(false);
//             setNewProductData({
//                 name: '', manufacturer: '', manufactureDate: '', 
//                 initialLocation: '', metadataURI: ''
//             });
//             if (activeSection === 'devis') setDevisView('buttons'); 
//         }
//     };
    
//     // --- The rest of your component code remains unchanged ---

//     const handleCheckProductSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!contract) {
//             setMessage("Error: Contract not initialized. Please connect your wallet first.");
//             return;
//         }

//         const tokenId = checkProductId.trim();
//         if (!/^\d+$/.test(tokenId)) {
//             setMessage("Error: Lot ID must be a number.");
//             setCheckedProductResult(null);
//             return;
//         }
        
//         setIsChecking(true);
//         setCheckedProductResult(null); 
//         setMessage(`Fetching details for Lot ID ${tokenId}...`);

//         try {
//             // 'pull' is a view function, no fee needed
//             const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

//             const result = {
//                 lotId: lotStruct.lotId.toString(),
//                 name: lotStruct.name,
//                 currentHandler: lotStruct.currentHandler,
//                 manufacturer: lotStruct.manufacturer,
//                 // Assuming manufactureDate is a Unix timestamp in seconds
//                 manufactureDate: Number(lotStruct.manufactureDate) * 1000, 
//                 currentOwner: lotStruct.currentOwner,
//                 currentLocation: lotStruct.currentLocation,
//                 status: lotStruct.status.toString(),
//                 history: historyArray,
//             };

//             setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
//             setCheckedProductResult(result);
//         } catch (error) {
//             console.error("Error checking product:", error);
//             setMessage(`Error fetching Lot ID ${tokenId}. It may not exist or the transaction failed.`);
//             setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//         } finally {
//             setIsChecking(false);
//         }
//     };


//     // --- Render Helper Functions (Preserved) ---
    
//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {/* Display Fee Recipient for Debugging */}
//             <blockquote className="debug-note">
//                 <p><strong>Fee Recipient Check:</strong> {feeRecipient}</p>
//                 {feeRecipient === ethers.ZeroAddress ? (
//                     <p style={{color: 'red'}}>⚠️ CRITICAL: The contract Fee Recipient is 0x0. The 'Fee transfer failed' error will persist until the contract is redeployed with a valid address.</p>
//                 ) : null}
//             </blockquote>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                         disabled={isSubmitting} 
//                     />
//                 </div>
//             ))}
            
//             <button 
//                 type="submit" 
//                 className="btn-primary" 
//                 disabled={isSubmitting}
//             >
//                 {isSubmitting ? 'Submitting Transaction...' : `Submit Devis (Cost: 1 CreditToken + HBAR)`}
//             </button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//                 disabled={isSubmitting}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); 
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                         disabled={isChecking}
//                     />
//                     <button type="submit" className="btn-check-submit" disabled={isChecking}>
//                         {isChecking ? 'Checking...' : 'Check Devis (Call Pull)'}
//                     </button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//                 disabled={isChecking}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );

//     // --- Main Content Renderer (All Cases Included) ---

//     const renderContent = () => {
        
//         // 🚨 CRITICAL CONDITIONAL RENDER: Block access if the wallet is not connected.
//         if (!signer || !userData?.address) {
//              return (
//                 <div className="connection-required">
//                     <h2>Wallet Connection Required</h2>
//                     <p>Your user session is active, but the wallet is not connected. Please navigate to the **Demo/Login** page to initiate the MetaMask connection, or ensure MetaMask is installed and on the Hedera Testnet.</p>
//                     <button className="btn-primary" onClick={() => navigate('/Demo')}>
//                         Go to Connect Page
//                     </button>
//                     <p style={{marginTop: '15px', color: '#888'}}>
//                         *Ensure you are on the Hedera Testnet network.
//                     </p>
//                 </div>
//             );
//         }
        
//         // If signer is present, render the selected section
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {signer.address}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <div className="dashboard-widget">
//                             <p>This section is reserved for listing and managing registered users, typically accessible by an administrator.</p>
//                             <ul>
//                                 <li>View user list (placeholder)</li>
//                                 <li>Update user roles (placeholder)</li>
//                                 <li>Search users by address (placeholder)</li>
//                             </ul>
//                         </div>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 ); 
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <div className="dashboard-widget">
//                             <p>This section will contain user-specific settings:</p>
//                             <ul>
//                                 <li>Change Username/Email (Local State Update)</li>
//                                 <li>Update Metadata URI (Placeholder)</li>
//                                 <li>View Transaction History (Placeholder)</li>
//                             </ul>
//                         </div>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     // --- Main Component Structure ---

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()} {/* Main content rendered here */}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers, Contract } from 'ethers';
import "../Styles/dashboard.css"; 
import LotTrackerABI from "./LotTrackerABI.js";
import CreditTokenABI from './CreditTokenABI.js'; 

// 🚨 IMPORTANT: Replace with your actual deployed CreditToken address!
const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c"; 

function Dashboard({ setUserData, setMessage, userData, signer, contract }) {
    
    // --- Component State ---
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('dashboard'); 
    const navigate = useNavigate();

    const [devisView, setDevisView] = useState('buttons'); 
    const [newProductData, setNewProductData] = useState({
        name: '', manufacturer: '', manufactureDate: '', 
        initialLocation: '', metadataURI: '' 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    
    const [checkProductId, setCheckProductId] = useState('');
    const [checkedProductResult, setCheckedProductResult] = useState(null);
    const [feeRecipient, setFeeRecipient] = useState('...'); // State to hold the fee recipient for debug

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev); 

    // --- Utility Functions ---

    // 💡 Fetch and log the Fee Recipient on load (FIX APPLIED HERE)
    // useEffect(() => {
    //     const checkFeeRecipient = async () => {
    //         if (contract && signer) {
    //             try {
    //                 // ✅ FIX: Use the array notation to ensure the getter function is called
    //                 const recipient = await contract["FEE_RECIPIENT"]();
                    
    //                 setFeeRecipient(recipient);
    //                 console.log(`DEBUG: LotTrackr Fee Recipient (Solidity check): ${recipient}`);
                    
    //                 if (recipient === ethers.ZeroAddress) {
    //                     setMessage("CRITICAL WARNING: LotTrackr FEE_RECIPIENT is 0x0. Fee transfers will fail!");
    //                 }
    //             } catch (error) {
    //                 // Fallback for the error you just encountered
    //                 console.error("Could not fetch FEE_RECIPIENT from contract. Check ABI and function call.", error);
    //                 setFeeRecipient("Error: Check ABI/Function");
    //             }
    //         }
    //     };
    //     checkFeeRecipient();
    // // Re-run if the contract object changes
    // }, [contract, signer, setMessage]);

//     useEffect(() => {
//     const checkFeeRecipient = async () => {
//         if (contract && signer) {
//             try {
//                 // ✅ FIX: Use contract["FEE_RECIPIENT"]() - the most direct way
//                 const recipient = await contract["FEE_RECIPIENT"]();
                
//                 setFeeRecipient(recipient);
//                 console.log(`DEBUG: LotTrackr Fee Recipient (Solidity check): ${recipient}`);
                
//                 if (recipient === ethers.ZeroAddress) {
//                     setMessage("CRITICAL WARNING: LotTrackr FEE_RECIPIENT is 0x0. Fee transfers will fail!");
//                 }
//             } catch (error) {
//                 // If contract["FEE_RECIPIENT"]() fails, log a specific warning and suppress the state update error
//                 console.error("Could not fetch FEE_RECIPIENT from contract. Ensure LotTrackerABI is correctly loaded and FEE_RECIPIENT is public.", error);
//                 // Set a placeholder without causing a state error cascade
//                 setFeeRecipient("Error fetching - Check ABI"); 
//             }
//         }
//     };
//     checkFeeRecipient();
// // Re-run if the contract object changes
// }, [contract, signer, setMessage]);


// dashboard.jsx (within the Dashboard component)

// State to hold the fee recipient for debug

// State to hold the CreditToken address for comparison
const [contractCreditTokenAddress, setContractCreditTokenAddress] = useState('...'); 

// --- Utility Functions ---

// 💡 Fetch and log the Fee Recipient on load (FIX APPLIED HERE)
useEffect(() => {
    const checkFeeRecipient = async () => {
        if (contract && signer) {
            try {
                // ✅ FIX: Use array access notation to reliably call getter functions
                const feeRecipientAddr = await contract["FEE_RECIPIENT"]();
                const creditTokenAddr = await contract["creditToken"](); 
                
                setFeeRecipient(feeRecipientAddr);
                setContractCreditTokenAddress(creditTokenAddr);

                console.log(`DEBUG: LotTrackr FEE_RECIPIENT (from contract): ${feeRecipientAddr}`);
                console.log(`DEBUG: Contract Credit Token Address (from contract): ${creditTokenAddr}`);
                
                // Add warning if the Fee Recipient is set to the Token Address (your current suspected deployment error)
                if (feeRecipientAddr.toLowerCase() === creditTokenAddr.toLowerCase()) {
                    setMessage("⚠️ CRITICAL ERROR: The LotTrackr Fee Recipient is set to its own CreditToken address. All transactions will fail until you redeploy.");
                } else if (feeRecipientAddr === ethers.ZeroAddress) {
                    setMessage("CRITICAL WARNING: LotTrackr FEE_RECIPIENT is 0x0. Fee transfers will fail!");
                }
            } catch (error) {
                // Fallback for the persistent TypeError if it returns
                console.error("Could not fetch contract state. Check ABI and network connection.", error);
                setFeeRecipient("Error fetching - Check ABI/Network");
            }
        }
    };
    checkFeeRecipient();
// Re-run if the contract object changes
}, [contract, signer, setMessage]);


    const handleLogout = () => {
        if (setUserData) setUserData(null); 
        if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
        navigate("/", { replace: true }); 
    };

    const dateToUnixTimestamp = (dateString) => {
        if (!dateString) return 0;
        const date = new Date(dateString + 'T00:00:00Z'); 
        return Math.floor(date.getTime() / 1000);
    };
    
    const formatKey = (key) => {
        const statusMap = { '0': 'Active', '1': 'Inactive', '2': 'Transferred', '3': 'Discarded' };
        switch (key) {
            case 'lotId': return 'Lot ID';
            case 'name': return 'Product Name';
            case 'currentHandler': return 'Current Handler';
            case 'currentLocation': return 'Current Location';
            case 'currentOwner': return 'Current Owner Address';
            case 'manufactureDate': return 'Manufacture Date';
            case 'manufacturer': return 'Manufacturer Name';
            case 'metadataURI': return 'Metadata URI';
            case 'status': return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
            default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
    }


    // --- Transaction/Read Functions ---

    const handleAddProductSubmit = async (e) => {
        e.preventDefault();

        if (!contract || !signer) {
            setMessage("Error: Wallet not connected or LotTrackr contract/signer not initialized. Please connect your wallet first.");
            return; 
        }

        setIsSubmitting(true);
        setMessage(`Preparing transaction for product ${newProductData.name}...`);

        try {
            // 1. Resolve Addresses and Prepare Amounts
            const lotTrackrAddress = await contract.getAddress(); 
            const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
            
            // Fee for the LotTrackr contract (1 CreditToken with 18 decimals)
            const fixedFeeAmount = ethers.parseUnits("1", "ether"); 
            
            // Fee for the Hedera network interaction (Small HBAR fee - CRITICAL FIX)
            const interactionFee = ethers.parseUnits("100", "gwei"); // 100 Gwei (0.0000001 ETH/HBAR)

            // 2. CreditToken Approval Check
            setMessage("Step 1/2: Checking/Requesting CreditToken approval...");
            
            const creditTokenContract = new Contract(CREDIT_TOKEN_ADDRESS, CreditTokenABI, signer);
            
            const allowance = await creditTokenContract.allowance(signer.address, lotTrackrAddress);
            
            // 💡 DEBUGGING LINES
            console.log(`DEBUG: LotTrackr Address: ${lotTrackrAddress}`);
            console.log(`DEBUG: Required Fee (Wei): ${fixedFeeAmount.toString()}`);
            console.log(`DEBUG: Current Allowance (Wei): ${allowance.toString()}`);
            // ------------------

            if (allowance < fixedFeeAmount) {
                // Approve a large amount (e.g., 1000 tokens) to minimize future approval transactions
                const approvalAmount = ethers.parseUnits("1", "ether"); 

                setMessage(`Insufficient allowance. Requesting approval for ${ethers.formatUnits(approvalAmount, 18)} CreditTokens...`);
                
                const approvalTx = await creditTokenContract.approve(
                    lotTrackrAddress, 
                    approvalAmount 
                );
                setMessage(`Approval transaction sent (Hash: ${approvalTx.hash}). Waiting for confirmation...`);
                await approvalTx.wait(); 
                setMessage("✅ Approval successful. Proceeding to product insertion.");
            } else {
                setMessage("✅ Sufficient CreditToken allowance already set. Proceeding...");
            }

            // 3. Execute Insert Transaction
            setMessage(`Step 2/2: Sending 'insert' transaction for product ${newProductData.name}...`);
            
            // 🚀 Final execution, including the HBAR value
            const tx = await contract.insert(
                newProductData.name,
                newProductData.manufacturer,
                ethers.toBigInt(timestampInSeconds),
                newProductData.initialLocation,
                newProductData.metadataURI,
                { 
                    value: interactionFee // Pays the HBAR network fee (CRITICAL for Hedera EVM)
                }
            ); 

            setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

            const receipt = await tx.wait(); 

            if (receipt.status === 1) {
                setMessage(`✅ Product "${newProductData.name}" successfully added!`);
            } else {
                setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
            }

        } catch (error) {
            console.error("Error in transaction flow:", error);
            
            let errorMessage = error.reason || (error.data?.message || error.message);
            
            // Enhanced Error Reporting based on typical contract reverts
            if (errorMessage.includes('user rejected')) {
                 errorMessage = 'Transaction rejected by user.';
            } else if (errorMessage.includes('Fee transfer failed')) {
                 errorMessage = `Transaction failed: Fee transfer failed. LIKELY CAUSE: LotTrackr Fee Recipient is 0x0 or invalid.`;
            } else if (errorMessage.includes('Insufficient CreditToken balance to qualify')) {
                 errorMessage = `Transaction failed: You need at least 100 CreditTokens to qualify for the first transaction.`;
            } else if (errorMessage.includes('Send ETH to pay the interaction fee')) {
                 errorMessage = 'Transaction failed: Missing HBAR network fee. Ensure the transaction includes a small HBAR value.';
            } else if (errorMessage.includes('unsupported addressable value')) {
                 errorMessage = 'Configuration Error: LotTrackr contract address or CreditToken address is missing or invalid.';
            }

            setMessage(`Transaction failed: ${errorMessage}`);
        } finally {
            setIsSubmitting(false);
            setNewProductData({
                name: '', manufacturer: '', manufactureDate: '', 
                initialLocation: '', metadataURI: ''
            });
            if (activeSection === 'devis') setDevisView('buttons'); 
        }
    };
    
    // --- The rest of your component code remains largely the same ---

    const handleCheckProductSubmit = async (e) => {
        e.preventDefault();
        
        if (!contract) {
            setMessage("Error: Contract not initialized. Please connect your wallet first.");
            return;
        }

        const tokenId = checkProductId.trim();
        if (!/^\d+$/.test(tokenId)) {
            setMessage("Error: Lot ID must be a number.");
            setCheckedProductResult(null);
            return;
        }
        
        setIsChecking(true);
        setCheckedProductResult(null); 
        setMessage(`Fetching details for Lot ID ${tokenId}...`);

        try {
            // 'pull' is a view function, no fee needed
            const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

            const result = {
                lotId: lotStruct.lotId.toString(),
                name: lotStruct.name,
                currentHandler: lotStruct.currentHandler,
                manufacturer: lotStruct.manufacturer,
                // Assuming manufactureDate is a Unix timestamp in seconds
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
        } finally {
            setIsChecking(false);
        }
    };


    // --- Render Helper Functions (Preserved) ---
    
    const renderAddDevisForm = () => (
        <form onSubmit={handleAddProductSubmit} className="devis-form">
            <h3>Add New Product (Lot/Devis)</h3>
            
            {/* Display Fee Recipient for Debugging */}
            <blockquote className="debug-note">
                <p><strong>Fee Recipient Check:</strong> {feeRecipient}</p>
                {feeRecipient === ethers.ZeroAddress ? (
                    <p style={{color: 'red'}}>⚠️ CRITICAL: The contract Fee Recipient is 0x0. The 'Fee transfer failed' error will persist until the contract is redeployed with a valid address.</p>
                ) : null}
            </blockquote>
            
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
                        disabled={isSubmitting} 
                    />
                </div>
            ))}
            
            <button 
                type="submit" 
                className="btn-primary" 
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Submitting Transaction...' : `Submit Devis (Cost: 1 CreditToken + HBAR)`}
            </button>
            <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => setDevisView('buttons')}
                disabled={isSubmitting}
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
                        disabled={isChecking}
                    />
                    <button type="submit" className="btn-check-submit" disabled={isChecking}>
                        {isChecking ? 'Checking...' : 'Check Devis (Call Pull)'}
                    </button>
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
                disabled={isChecking}
            >
                Back to Options
            </button>
        </div>
    );

    // --- Main Content Renderer (All Cases Included) ---

    const renderContent = () => {
        
        // 🚨 CRITICAL CONDITIONAL RENDER: Block access if the wallet is not connected.
        if (!signer || !userData?.address) {
             return (
                <div className="connection-required">
                    <h2>Wallet Connection Required</h2>
                    <p>Your user session is active, but the wallet is not connected. Please navigate to the **Demo/Login** page to initiate the MetaMask connection, or ensure MetaMask is installed and on the Hedera Testnet.</p>
                    <button className="btn-primary" onClick={() => navigate('/Demo')}>
                        Go to Connect Page
                    </button>
                    <p style={{marginTop: '15px', color: '#888'}}>
                        *Ensure you are on the Hedera Testnet network.
                    </p>
                </div>
            );
        }
        
        // If signer is present, render the selected section
        switch (activeSection) {
            case 'dashboard':
                return (
                    <div className="dashboard-content">
                        <h2>Your User Data</h2>
                        <div className="dashboard-widget">
                            <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
                            <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
                            <p><strong>Current Address:</strong> {signer.address}</p>
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
                        <div className="dashboard-widget">
                            <p>This section is reserved for listing and managing registered users, typically accessible by an administrator.</p>
                            <ul>
                                <li>View user list (placeholder)</li>
                                <li>Update user roles (placeholder)</li>
                                <li>Search users by address (placeholder)</li>
                            </ul>
                        </div>
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

                    </section>
                ); 
            case 'settings':
                return (
                    <section className='Dashboard-settings'>
                        <h2>Account Settings</h2>
                        <div className="dashboard-widget">
                            <p>This section will contain user-specific settings:</p>
                            <ul>
                                <li>Change Username/Email (Local State Update)</li>
                                <li>Update Metadata URI (Placeholder)</li>
                                <li>View Transaction History (Placeholder)</li>
                            </ul>
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };

    // --- Main Component Structure ---

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
                    {renderContent()} {/* Main content rendered here */}
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


// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers, Contract } from 'ethers';
// import "../Styles/dashboard.css"; 
// import LotTrackerABI from "./LotTrackerABI.js";
// import CreditTokenABI from './CreditTokenABI.js'; 

// // 🚨 IMPORTANT: Replace with your actual deployed CreditToken address!
// const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c"; 

// function Dashboard({ setUserData, setMessage, userData, signer, contract }) {
    
//     // --- Component State ---
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     const [devisView, setDevisView] = useState('buttons'); 
//     const [newProductData, setNewProductData] = useState({
//         name: '', manufacturer: '', manufactureDate: '', 
//         initialLocation: '', metadataURI: '' 
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isChecking, setIsChecking] = useState(false);
    
//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);
//     const [feeRecipient, setFeeRecipient] = useState('...'); 
//     const [contractCreditTokenAddress, setContractCreditTokenAddress] = useState('...'); // State to hold the CreditToken address for comparison

//     const toggleSidebar = () => setIsSidebarOpen(prev => !prev); 

//     // --- Utility Functions ---

//     // 💡 Fetch and log Fee Recipient and CreditToken Address on load (FIXED)
//     // useEffect(() => {
//     //     const checkContractConfig = async () => {
//     //         if (contract && signer) {
//     //             try {
//     //                 // ✅ FIX: Use array access notation to reliably call getter functions for public state variables
//     //                 const feeRecipientAddr = await contract["FEE_RECIPIENT"]();
//     //                 const creditTokenAddr = await contract["creditToken"](); 
                    
//     //                 setFeeRecipient(feeRecipientAddr);
//     //                 setContractCreditTokenAddress(creditTokenAddr);

//     //                 console.log(`DEBUG: LotTrackr FEE_RECIPIENT (from contract): ${feeRecipientAddr}`);
//     //                 console.log(`DEBUG: Contract Credit Token Address (from contract): ${creditTokenAddr}`);
                    
//     //                 // Add warning if the Fee Recipient is set incorrectly
//     //                 if (feeRecipientAddr.toLowerCase() === creditTokenAddr.toLowerCase()) {
//     //                     setMessage("⚠️ CRITICAL ERROR: The LotTrackr Fee Recipient is set to its own CreditToken address. All transactions will fail until you redeploy.");
//     //                 } else if (feeRecipientAddr === ethers.ZeroAddress) {
//     //                     setMessage("CRITICAL WARNING: LotTrackr FEE_RECIPIENT is 0x0. Fee transfers will fail!");
//     //                 }
//     //             } catch (error) {
//     //                 // Fallback for the persistent TypeError
//     //                 console.error("Could not fetch contract state. Check ABI, network connection, and ensure FEE_RECIPIENT/creditToken are public view functions.", error);
//     //                 setFeeRecipient("Error fetching - Check ABI/Network");
//     //                 setContractCreditTokenAddress("Error fetching - Check ABI/Network");
//     //             }
//     //         }
//     //     };
//     //     checkContractConfig();
//     // // Re-run if the contract object changes
//     // }, [contract, signer, setMessage]);


//     // 💡 Fetch and log Fee Recipient and CreditToken Address on load (ULTIMATE FIX APPLIED HERE)
//     // useEffect(() => {
//     //     const checkContractConfig = async () => {
//     //         if (contract && signer) {
//     //             try {
//     //                 // Get the LotTrackr contract address once
//     //                 const lotTrackrAddress = await contract.getAddress();
                    
//     //                 // --- FIX: Use contract.call() for maximum reliability ---
//     //                 // This method works even if the contract object is poorly initialized, 
//     //                 // as it manually builds the request using the function signature (selector).
                    
//     //                 // 1. Fetch FEE_RECIPIENT using manual signature call
//     //                 const feeRecipientAddr = await signer.call({
//     //                     to: lotTrackrAddress,
//     //                     data: contract.interface.getFunction("FEE_RECIPIENT").selector
//     //                 });
//     //                 // Decode the result (address is the only return type)
//     //                 const decodedFeeRecipient = contract.interface.decodeFunctionResult("FEE_RECIPIENT", feeRecipientAddr)[0];


//     //                 // 2. Fetch creditToken using manual signature call
//     //                 const creditTokenAddr = await signer.call({
//     //                     to: lotTrackrAddress,
//     //                     data: contract.interface.getFunction("creditToken").selector
//     //                 });
//     //                 // Decode the result
//     //                 const decodedCreditToken = contract.interface.decodeFunctionResult("creditToken", creditTokenAddr)[0];
//     //                 // --------------------------------------------------------

//     //                 setFeeRecipient(decodedFeeRecipient);
//     //                 setContractCreditTokenAddress(decodedCreditToken);

//     //                 console.log(`DEBUG: LotTrackr FEE_RECIPIENT (from manual call): ${decodedFeeRecipient}`);
//     //                 console.log(`DEBUG: Contract Credit Token Address (from manual call): ${decodedCreditToken}`);
                    
//     //                 // Add warning if the Fee Recipient is set incorrectly
//     //                 if (decodedFeeRecipient.toLowerCase() === decodedCreditToken.toLowerCase()) {
//     //                     setMessage("⚠️ CRITICAL ERROR: The LotTrackr Fee Recipient is set to its own CreditToken address. All transactions will fail until you redeploy.");
//     //                 } else if (decodedFeeRecipient === ethers.ZeroAddress) {
//     //                     setMessage("CRITICAL WARNING: LotTrackr FEE_RECIPIENT is 0x0. Fee transfers will fail!");
//     //                 }
//     //             } catch (error) {
//     //                 // Fallback for the persistent error
//     //                 console.error("Could not fetch contract state. Check ABI, network connection, and ensure FEE_RECIPIENT/creditToken are public view functions.", error);
//     //                 setFeeRecipient("Error fetching - Check ABI/Network");
//     //                 setContractCreditTokenAddress("Error fetching - Check ABI/Network");
//     //             }
//     //         }
//     //     };
//     //     checkContractConfig();
//     // // Re-run if the contract object changes
//     // }, [contract, signer, setMessage]);

//     // 💡 Fetch and log Fee Recipient and CreditToken Address on load (ULTIMATE FIX APPLIED HERE)
//     useEffect(() => {
//         const checkContractConfig = async () => {
//             if (contract && signer) {
//                 try {
//                     // Get the LotTrackr contract address once
//                     const lotTrackrAddress = await contract.getAddress();
                    
//                     // --- FIX: Use signer.call() for maximum reliability (Bypasses TypeError) ---
//                     // This manually builds the low-level call request using the function's selector.
                    
//                     // 1. Fetch FEE_RECIPIENT using manual signature call
//                     const feeRecipientData = await signer.call({
//                         to: lotTrackrAddress,
//                         data: contract.interface.getFunction("FEE_RECIPIENT").selector
//                     });
//                     // Decode the result (address is the only return type)
//                     const decodedFeeRecipient = contract.interface.decodeFunctionResult("FEE_RECIPIENT", feeRecipientData)[0];


//                     // 2. Fetch creditToken using manual signature call
//                     const creditTokenData = await signer.call({
//                         to: lotTrackrAddress,
//                         data: contract.interface.getFunction("creditToken").selector
//                     });
//                     // Decode the result
//                     const decodedCreditToken = contract.interface.decodeFunctionResult("creditToken", creditTokenData)[0];
//                     // -------------------------------------------------------------------------

//                     setFeeRecipient(decodedFeeRecipient);
//                     setContractCreditTokenAddress(decodedCreditToken);

//                     console.log(`DEBUG: LotTrackr FEE_RECIPIENT (from manual call): ${decodedFeeRecipient}`);
//                     console.log(`DEBUG: Contract Credit Token Address (from manual call): ${decodedCreditToken}`);
                    
//                     // Add warning if the Fee Recipient is set incorrectly
//                     if (decodedFeeRecipient.toLowerCase() === decodedCreditToken.toLowerCase()) {
//                         setMessage("⚠️ CRITICAL ERROR: The LotTrackr Fee Recipient is set to its own CreditToken address. All transactions will fail until you redeploy.");
//                     } else if (decodedFeeRecipient === ethers.ZeroAddress) {
//                         setMessage("CRITICAL WARNING: LotTrackr FEE_RECIPIENT is 0x0. Fee transfers will fail!");
//                     }
//                 } catch (error) {
//                     // Fallback for the persistent error
//                     console.error("Could not fetch contract state. Check ABI, network connection, and ensure FEE_RECIPIENT/creditToken are public view functions.", error);
//                     setFeeRecipient("Error fetching - Check ABI/Network");
//                     setContractCreditTokenAddress("Error fetching - Check ABI/Network");
//                 }
//             }
//         };
//         checkContractConfig();
//     // Re-run if the contract object changes
//     }, [contract, signer, setMessage]);

//     const handleLogout = () => {
//         if (setUserData) setUserData(null); 
//         if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
//         navigate("/", { replace: true }); 
//     };

//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         const date = new Date(dateString + 'T00:00:00Z'); 
//         return Math.floor(date.getTime() / 1000);
//     };
    
//     const formatKey = (key) => {
//         const statusMap = { '0': 'Active', '1': 'Inactive', '2': 'Transferred', '3': 'Discarded' };
//         switch (key) {
//             case 'lotId': return 'Lot ID';
//             case 'name': return 'Product Name';
//             case 'currentHandler': return 'Current Handler';
//             case 'currentLocation': return 'Current Location';
//             case 'currentOwner': return 'Current Owner Address';
//             case 'manufactureDate': return 'Manufacture Date';
//             case 'manufacturer': return 'Manufacturer Name';
//             case 'metadataURI': return 'Metadata URI';
//             case 'status': return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
//             default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
//         }
//     }


//     // --- Transaction/Read Functions ---

//     const handleAddProductSubmit = async (e) => {
//         e.preventDefault();

//         if (!contract || !signer) {
//             setMessage("Error: Wallet not connected or LotTrackr contract/signer not initialized. Please connect your wallet first.");
//             return; 
//         }

//         setIsSubmitting(true);
//         setMessage(`Preparing transaction for product ${newProductData.name}...`);

//         try {
//             // 1. Resolve Addresses and Prepare Amounts
//             const lotTrackrAddress = await contract.getAddress(); 
//             const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
            
//             // Fee for the LotTrackr contract (1 CreditToken with 18 decimals)
//             const fixedFeeAmount = ethers.parseUnits("1", "ether"); 
            
//             // Fee for the Hedera network interaction (Small HBAR fee)
//             const interactionFee = ethers.parseUnits("100", "gwei"); 

//             // 2. CreditToken Approval Check
//             setMessage("Step 1/2: Checking/Requesting CreditToken approval...");
            
//             const creditTokenContract = new Contract(CREDIT_TOKEN_ADDRESS, CreditTokenABI, signer);
            
//             const allowance = await creditTokenContract.allowance(signer.address, lotTrackrAddress);
            
//             // 💡 DEBUGGING LINES
//             console.log(`DEBUG: LotTrackr Address: ${lotTrackrAddress}`);
//             console.log(`DEBUG: Required Fee (Wei): ${fixedFeeAmount.toString()}`);
//             console.log(`DEBUG: Current Allowance (Wei): ${allowance.toString()}`);
//             // ------------------

//             if (allowance < fixedFeeAmount) {
//                 // Approve a large amount (e.g., 1000 tokens) to minimize future approval transactions
//                 const approvalAmount = ethers.parseUnits("1000", "ether"); // Changed to 1000 for convenience

//                 setMessage(`Insufficient allowance. Requesting approval for ${ethers.formatUnits(approvalAmount, 18)} CreditTokens...`);
                
//                 const approvalTx = await creditTokenContract.approve(
//                     lotTrackrAddress, 
//                     approvalAmount 
//                 );
//                 setMessage(`Approval transaction sent (Hash: ${approvalTx.hash}). Waiting for confirmation...`);
//                 await approvalTx.wait(); 
//                 setMessage("✅ Approval successful. Proceeding to product insertion.");
//             } else {
//                 setMessage("✅ Sufficient CreditToken allowance already set. Proceeding...");
//             }

//             // 3. Execute Insert Transaction
//             setMessage(`Step 2/2: Sending 'insert' transaction for product ${newProductData.name}...`);
            
//             // 🚀 Final execution, including the HBAR value
//             const tx = await contract.insert(
//                 newProductData.name,
//                 newProductData.manufacturer,
//                 ethers.toBigInt(timestampInSeconds),
//                 newProductData.initialLocation,
//                 newProductData.metadataURI,
//                 { 
//                     value: interactionFee // Pays the HBAR network fee (CRITICAL for Hedera EVM)
//                 }
//             ); 

//             setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

//             const receipt = await tx.wait(); 

//             if (receipt.status === 1) {
//                 setMessage(`✅ Product "${newProductData.name}" successfully added!`);
//             } else {
//                 setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
//             }

//         } catch (error) {
//             console.error("Error in transaction flow:", error);
            
//             let errorMessage = error.reason || (error.data?.message || error.message);
            
//             // Enhanced Error Reporting based on typical contract reverts
//             if (errorMessage.includes('user rejected')) {
//                  errorMessage = 'Transaction rejected by user.';
//             } else if (errorMessage.includes('Fee transfer failed')) {
//                  errorMessage = `Transaction failed: Fee transfer failed. LIKELY CAUSE: Insufficient CreditToken balance or LotTrackr allowance is too low.`;
//             } else if (errorMessage.includes('Insufficient CreditToken balance to qualify')) {
//                  errorMessage = `Transaction failed: You need at least 100 CreditTokens to qualify for the first transaction.`;
//             } else if (errorMessage.includes('Send ETH to pay the interaction fee')) {
//                  errorMessage = 'Transaction failed: Missing HBAR network fee. Ensure the transaction includes a small HBAR value.';
//             } else if (errorMessage.includes('unsupported addressable value')) {
//                  errorMessage = 'Configuration Error: LotTrackr contract address or CreditToken address is missing or invalid.';
//             }

//             setMessage(`Transaction failed: ${errorMessage}`);
//         } finally {
//             setIsSubmitting(false);
//             setNewProductData({
//                 name: '', manufacturer: '', manufactureDate: '', 
//                 initialLocation: '', metadataURI: ''
//             });
//             if (activeSection === 'devis') setDevisView('buttons'); 
//         }
//     };
    
//     // --- The rest of your component code remains largely the same ---

//     const handleCheckProductSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!contract) {
//             setMessage("Error: Contract not initialized. Please connect your wallet first.");
//             return;
//         }

//         const tokenId = checkProductId.trim();
//         if (!/^\d+$/.test(tokenId)) {
//             setMessage("Error: Lot ID must be a number.");
//             setCheckedProductResult(null);
//             return;
//         }
        
//         setIsChecking(true);
//         setCheckedProductResult(null); 
//         setMessage(`Fetching details for Lot ID ${tokenId}...`);

//         try {
//             // 'pull' is a view function, no fee needed
//             const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

//             const result = {
//                 lotId: lotStruct.lotId.toString(),
//                 name: lotStruct.name,
//                 currentHandler: lotStruct.currentHandler,
//                 manufacturer: lotStruct.manufacturer,
//                 // Assuming manufactureDate is a Unix timestamp in seconds
//                 manufactureDate: Number(lotStruct.manufactureDate) * 1000, 
//                 currentOwner: lotStruct.currentOwner,
//                 currentLocation: lotStruct.currentLocation,
//                 status: lotStruct.status.toString(),
//                 history: historyArray,
//             };

//             setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
//             setCheckedProductResult(result);
//         } catch (error) {
//             console.error("Error checking product:", error);
//             setMessage(`Error fetching Lot ID ${tokenId}. It may not exist or the transaction failed.`);
//             setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//         } finally {
//             setIsChecking(false);
//         }
//     };


//     // --- Render Helper Functions (Preserved) ---
    
//     const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {/* Display Fee Recipient for Debugging */}
//             <blockquote className="debug-note">
//                 <p><strong>Fee Recipient (Contract):</strong> {feeRecipient}</p>
//                 <p><strong>Credit Token (Contract):</strong> {contractCreditTokenAddress}</p>
//                 {feeRecipient === ethers.ZeroAddress ? (
//                     <p style={{color: 'red'}}>⚠️ CRITICAL: The contract Fee Recipient is 0x0. The 'Fee transfer failed' error will persist until the contract is redeployed with a valid address.</p>
//                 ) : null}
//             </blockquote>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                         disabled={isSubmitting} 
//                     />
//                 </div>
//             ))}
            
//             <button 
//                 type="submit" 
//                 className="btn-primary" 
//                 disabled={isSubmitting}
//             >
//                 {isSubmitting ? 'Submitting Transaction...' : `Submit Devis (Cost: 1 CreditToken + HBAR)`}
//             </button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//                 disabled={isSubmitting}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); 
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                         disabled={isChecking}
//                     />
//                     <button type="submit" className="btn-check-submit" disabled={isChecking}>
//                         {isChecking ? 'Checking...' : 'Check Devis (Call Pull)'}
//                     </button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//                 disabled={isChecking}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );

//     // --- Main Content Renderer (All Cases Included) ---

//     const renderContent = () => {
        
//         // 🚨 CRITICAL CONDITIONAL RENDER: Block access if the wallet is not connected.
//         if (!signer || !userData?.address) {
//              return (
//                  <div className="connection-required">
//                      <h2>Wallet Connection Required</h2>
//                      <p>Your user session is active, but the wallet is not connected. Please navigate to the **Demo/Login** page to initiate the MetaMask connection, or ensure MetaMask is installed and on the Hedera Testnet.</p>
//                      <button className="btn-primary" onClick={() => navigate('/Demo')}>
//                          Go to Connect Page
//                      </button>
//                      <p style={{marginTop: '15px', color: '#888'}}>
//                          *Ensure you are on the Hedera Testnet network.
//                      </p>
//                  </div>
//              );
//         }
        
//         // If signer is present, render the selected section
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {signer.address}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <div className="dashboard-widget">
//                             <p>This section is reserved for listing and managing registered users, typically accessible by an administrator.</p>
//                             <ul>
//                                 <li>View user list (placeholder)</li>
//                                 <li>Update user roles (placeholder)</li>
//                                 <li>Search users by address (placeholder)</li>
//                             </ul>
//                         </div>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 ); 
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <div className="dashboard-widget">
//                             <p>This section will contain user-specific settings:</p>
//                             <ul>
//                                 <li>Change Username/Email (Local State Update)</li>
//                                 <li>Update Metadata URI (Placeholder)</li>
//                                 <li>View Transaction History (Placeholder)</li>
//                             </ul>
//                         </div>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     // --- Main Component Structure ---

//     return (
//         <div className="dashboard-container">
//             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <span className="sidebar-title">Dashboard</span>
//                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
//                 </div>
//                 <ul className="sidebar-links">
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
//                     <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
//                 </ul>
//             </div>

//             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
//                 <header className="dashboard-header">
//                     <div className="header-left">
//                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
//                     </div>
//                     <div className="header-right">
//                         <button className="header-btn">Notifications</button>
//                         <button className="header-btn">Profile</button>
//                     </div>
//                 </header>

//                 <main className="dashboard-body">
//                     {renderContent()} {/* Main content rendered here */}
//                 </main>

//                 <footer className="dashboard-footer">
//                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
//                 </footer>
//             </div>

//             <div className="back-to-website">
//                 <button className="back-btn logout-btn" onClick={handleLogout}>
//                     Logout 🚪
//                 </button>
//                 <button className="back-btn" onClick={() => navigate('/')}> 
//                     Back to Website 
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ethers, Contract, BrowserProvider } from 'ethers';
// import "../Styles/dashboard.css"; 
// import LotTrackerABI from "./LotTrackerABI.js"

// function Dashboard({ setSigner, setUserData, setMessage, userData, signer, contract }) {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [activeSection, setActiveSection] = useState('dashboard'); 
//     const navigate = useNavigate();

//     const [devisView, setDevisView] = useState('buttons'); 

//     const [newProductData, setNewProductData] = useState({
//         name: '', 
//         manufacturer: '', 
//         manufactureDate: '', 
//         initialLocation: '', 
//         metadataURI: '' 
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isChecking, setIsChecking] = useState(false);

//     const [checkProductId, setCheckProductId] = useState('');
//     const [checkedProductResult, setCheckedProductResult] = useState(null);

//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const TRANSACTION_COST_CREDITS = 1;
//     const contractAddress = "0x14b73dec132db19ddbafc6f4dbaf3756207ff4d6";
//     const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

//     // ------------------- MetaMask Connection -------------------
//     const connectAndSetup = async () => {
//         if (!window.ethereum) {
//             setMessage("MetaMask is not installed. Please install it.");
//             return;
//         }

//         try {
//             const provider = new BrowserProvider(window.ethereum);
//             await provider.send("eth_requestAccounts", []);

//             const network = await provider.getNetwork();
//             if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
//                 setMessage("MetaMask is on the wrong network. Switch to Hedera Testnet.");
//                 return;
//             }

//             const _signer = await provider.getSigner();
//             setSigner(_signer);

//             setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);
//         } catch (err) {
//             console.error(err);
//             setMessage(`Connection failed: ${err.message || err}`);
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

//     const handleLogout = () => {
//         setSigner?.(null);
//         setUserData?.(null);
//         setMessage?.("Successfully logged out.");
//         navigate("/", { replace: true });
//     };

//     const dateToUnixTimestamp = (dateString) => {
//         if (!dateString) return 0;
//         const date = new Date(dateString + 'T00:00:00Z');
//         return Math.floor(date.getTime() / 1000);
//     };

//     // ------------------- Add Product -------------------
//     const handleAddProductSubmit = async (e) => {
//         e.preventDefault();

//         if (!contract || !signer) {
//             setMessage("⚠️ Contract or signer not available. Connect wallet first.");
//             return;
//         }

//         setIsSubmitting(true);
//         setMessage("Submitting transaction...");

//         try {
//             const timestamp = dateToUnixTimestamp(newProductData.manufactureDate);

//             const tx = await contract.insert(
//                 newProductData.name,
//                 newProductData.manufacturer,
//                 ethers.toBigInt(timestamp),
//                 newProductData.initialLocation,
//                 newProductData.metadataURI
//             );

//             setMessage(`Transaction sent (hash: ${tx.hash})`);
//             const receipt = await tx.wait();
//             setMessage(receipt.status === 1 ? "✅ Product added successfully!" : "❌ Transaction failed");

//             setNewProductData({ name: '', manufacturer: '', manufactureDate: '', initialLocation: '', metadataURI: '' });
//         } catch (err) {
//             console.error(err);
//             setMessage(`Error: ${err.reason || err.message || err}`);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // ------------------- Check Product -------------------
//     const handleCheckProductSubmit = async (e) => {
//         e.preventDefault();

//         if (!contract) {
//             setMessage("Contract not initialized.");
//             return;
//         }

//         const tokenId = checkProductId.trim();
//         if (!/^\d+$/.test(tokenId)) {
//             setMessage("Lot ID must be a number.");
//             setCheckedProductResult(null);
//             return;
//         }

//         setIsChecking(true);
//         setCheckedProductResult(null);
//         setMessage(`Fetching Lot ID ${tokenId}...`);

//         try {
//             const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

//             if (!lotStruct || lotStruct.lotId === undefined) throw new Error("Lot not found");

//             const result = {
//                 lotId: lotStruct.lotId.toString(),
//                 name: lotStruct.name,
//                 currentHandler: lotStruct.currentHandler,
//                 manufacturer: lotStruct.manufacturer,
//                 manufactureDate: Number(lotStruct.manufactureDate) * 1000,
//                 currentOwner: lotStruct.currentOwner,
//                 currentLocation: lotStruct.currentLocation,
//                 status: lotStruct.status.toString(),
//                 history: historyArray,
//             };

//             setCheckedProductResult(result);
//             setMessage(`✅ Lot ID ${tokenId} retrieved successfully.`);
//         } catch (err) {
//             console.error(err);
//             setMessage(`Error fetching Lot ID ${tokenId}: ${err.message || err}`);
//             setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
//         } finally {
//             setIsChecking(false);
//         }
//     };

//             const renderAddDevisForm = () => (
//         <form onSubmit={handleAddProductSubmit} className="devis-form">
//             <h3>Add New Product (Lot/Devis)</h3>
            
//             {Object.keys(newProductData).map(key => (
//                 <div key={key} className="form-group">
//                     <label htmlFor={key}>{formatKey(key)}:</label>
//                     <input
//                         id={key}
//                         type={key === 'manufactureDate' ? 'date' : 'text'} 
//                         required
//                         placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
//                         value={newProductData[key]}
//                         onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
//                         className="form-input"
//                     />
//                 </div>
//             ))}
            
//             <button type="submit" className="btn-primary">Submit Devis (Cost: {TRANSACTION_COST_CREDITS} Credit)</button>
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => setDevisView('buttons')}
//             >
//                 Back to Options
//             </button>
//         </form>
//     );

//     const renderCheckDevisForm = () => (
//         <div className="devis-check-view">
//             <form onSubmit={handleCheckProductSubmit} className="check-form">
//                 <div className="form-group-inline">
//                     <label htmlFor="checkId">Enter Lot ID:</label>
//                     <input
//                         id="checkId"
//                         type="text"
//                         required
//                         value={checkProductId}
//                         onChange={(e) => {
//                             setCheckProductId(e.target.value);
//                             setCheckedProductResult(null); 
//                         }}
//                         className="form-input"
//                         placeholder="e.g., 123 (Lot ID)"
//                     />
//                     <button type="submit" className="btn-check-submit">Check Devis (Call Pull)</button>
//                 </div>
//             </form>

//             {checkedProductResult && (
//                 <div className="product-result">
//                     <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
//                     {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
//                         <p className="not-found">Status: {checkedProductResult.status}</p>
//                     ) : (
//                         <div className="dashboard-widget">
//                             {Object.entries(checkedProductResult)
//                                 .filter(([key]) => key !== 'history' && key !== 'status')
//                                 .map(([key, value]) => (
//                                     <p key={key}>
//                                         <strong>{formatKey(key)}:</strong> 
//                                         {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
//                                     </p>
//                                 ))}
                            
//                             <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
//                             <hr/>
//                             <h5>Ownership History:</h5>
//                             {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
//                                 <ol>
//                                     {checkedProductResult.history.map((address, index) => (
//                                         <li key={index}>{address}</li>
//                                     ))}
//                                 </ol>
//                             ) : (<p>No history recorded yet.</p>)}
//                         </div>
//                     )}
//                 </div>
//             )}
            
//             <button 
//                 type="button" 
//                 className="btn-secondary" 
//                 onClick={() => {
//                     setDevisView('buttons');
//                     setCheckProductId('');
//                     setCheckedProductResult(null);
//                 }}
//             >
//                 Back to Options
//             </button>
//         </div>
//     );

//     const renderContent = () => {
//         switch (activeSection) {
//             case 'dashboard':
//                 return (
//                     <div className="dashboard-content">
//                         <h2>Your User Data</h2>
//                         <div className="dashboard-widget">
//                             <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
//                             <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
//                             <p><strong>Current Address:</strong> {userData?.address || 'N/A'}</p>
//                             <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
//                             <p>
//                                 <strong>Creation Time : </strong> 
//                                 {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             case 'users':
//                 return (
//                     <section className='Dashboard-users'>
//                         <h2>User Management Section</h2>
//                         <p>This section will contain the list of registered users and admin tools.</p>
//                     </section>
//                 );

//             case 'devis':
//                 return (
//                     <section className='Dashboard-devis'>
//                         <h2>Devis Management</h2>
//                         <p>Manage product additions and track existing products on the chain.</p>
                        
//                         {devisView === 'buttons' && (
//                             <div className="devis-container-btns">
//                                 <button 
//                                     className='btn-add-devise' 
//                                     onClick={() => setDevisView('add')}
//                                 >
//                                     Add New Product
//                                 </button>
//                                 <button 
//                                     className='btn-check-devise' 
//                                     onClick={() => setDevisView('check')}
//                                 >
//                                     Check Product Status
//                                 </button>
//                             </div>
//                         )}

//                         {devisView === 'add' && renderAddDevisForm()}
//                         {devisView === 'check' && renderCheckDevisForm()}

//                     </section>
//                 ); 
//             case 'settings':
//                 return (
//                     <section className='Dashboard-settings'>
//                         <h2>Account Settings</h2>
//                         <p>This section will contain user-specific settings like password change or profile update options.</p>
//                     </section>
//                 );
//             default:
//                 return null;
//         }
//     };

//     // ------------------- Rest of your HTML/JSX remains unchanged -------------------
//     // Keep the sidebar, slider options, forms, and main layout exactly as before

//     return (
//         <div className="dashboard-container">
//                 //             <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
// //                 <div className="sidebar-header">
// //                     <span className="sidebar-title">Dashboard</span>
// //                     <button onClick={toggleSidebar} className="close-btn">&times;</button>
// //                 </div>
// //                 <ul className="sidebar-links">
// //                     <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
// //                     <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
// //                     <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
// //                     <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
// //                 </ul>
// //             </div>

// //             <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
// //                 <header className="dashboard-header">
// //                     <div className="header-left">
// //                         <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
// //                     </div>
// //                     <div className="header-right">
// //                         <button className="header-btn">Notifications</button>
// //                         <button className="header-btn">Profile</button>
// //                     </div>
// //                 </header>

// //                 <main className="dashboard-body">
// //                     {renderContent()}
// //                 </main>

// //                 <footer className="dashboard-footer">
// //                     <p>&copy; 2025 MedSupply Chain. All rights reserved.</p>
// //                 </footer>
// //             </div>

// //             <div className="back-to-website">
// //                 <button className="back-btn logout-btn" onClick={handleLogout}>
// //                     Logout 🚪
// //                 </button>
// //                 <button className="back-btn" onClick={() => navigate('/')}> 
// //                     Back to Website 
// //                 </button>
// //             </div>
//         </div>
//     );
// }

// export default Dashboard;
