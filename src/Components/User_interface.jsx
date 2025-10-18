// import "../Styles/User_interface.css"
// import {Link} from "react-router-dom"
// const User_interface = () => {
//     return (
//         <>
//             <h1>User interface page</h1>

//             <div className="user_interfaceWrapper">
//                 <Link to="/">home</Link>
//                 <div className="ContainerLogin_register">
//                 <div className="user_interfaceLogin">
//                     <h3>Login </h3>
//                     <form action="" className="user_interfaceLoginForm">
                            
//                         <div className="user_interfaceLogin_formGroup">
//                                 <label htmlFor="" className="form-label">
//                                         email
//                                 </label>
//                                 <input type="email"  className="form-control loginemail" placeholder="Login email"/>
//                         </div>
//                          <div className="user_interfaceLogin_formGroup">
//                              <label htmlFor="" className="form-label">
//                                         password
//                                 </label>
//                                 <input type="password"  className="form-control loginpassword" placeholder="Login password"/>
                            
//                         </div>
//                         <button className="submit-btn submit-login-password">login</button>
//                     </form>
//                 </div>


//                 <div className="user_interfaceRegister">
//                     <h3>Register</h3>
//                     <form action="" className="user_interfaceRegisterForm">
                        
//                          <div className="user_interfaceRegister_formGroup">
//                                 <label htmlFor="" className="form-label">
//                                         username
//                                 </label>
//                                 <input type="username"  className="form-control Registerusername" placeholder="Register username"/>
//                         </div>
//                         <div className="user_interfaceRegister_formGroup">
//                                 <label htmlFor="" className="form-label">
//                                         email
//                                 </label>
//                                 <input type="email"  className="form-control Registeremail" placeholder="Register email"/>
//                         </div>
//                          <div className="user_interfaceRegister_formGroup">
//                              <label htmlFor="" className="form-label">
//                                         password
//                                 </label>
//                                 <input type="password"  className="form-control Registerpassword" placeholder="Register password"/>
                            
//                         </div>
//                         <button className="submit-btn submit-Register-password">Register</button>
//                     </form>
//                 </div>
//             </div>
//             </div>
//         </>
//     )
// }

// export default User_interface;


// import { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../Styles/User_interface.css";

// const User_interface = () => {
//   const [isLoginActive, setIsLoginActive] = useState(true);
//   const [isSwiping, setIsSwiping] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const containerRef = useRef(null);

//   const handleToggle = () => {
//     setIsLoginActive(!isLoginActive);
//   };

//   // Touch event handlers for swipe functionality
//   const handleTouchStart = (e) => {
//     setStartX(e.touches[0].clientX);
//     setIsSwiping(true);
//   };

//   const handleTouchMove = (e) => {
//     if (!isSwiping) return;
//     const currentX = e.touches[0].clientX;
//     const diff = startX - currentX;

//     if (diff > 50 && isLoginActive) { // Swipe left to show register
//       setIsLoginActive(false);
//       setIsSwiping(false);
//     } else if (diff < -50 && !isLoginActive) { // Swipe right to show login
//       setIsLoginActive(true);
//       setIsSwiping(false);
//     }
//   };

//   const handleTouchEnd = () => {
//     setIsSwiping(false);
//   };

//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.style.transition = "transform 0.6s ease-in-out";
//       containerRef.current.style.transform = isLoginActive
//         ? "translateX(0)"
//         : "translateX(-50%)";
//     }
//   }, [isLoginActive]);

//   return (
//     <>
//       <div className="user_interfaceWrapper">
//         <Link to="/" className="back-link">
//           ← Back to Home
//         </Link>

//         <div className="ContainerLogin_register">
//           {/* Toggle Buttons */}
//           <div className="toggle-container">
//             <button
//               className={`toggle-btn ${isLoginActive ? "active" : ""}`}
//               onClick={() => isLoginActive || handleToggle()}
//             >
//               Login
//             </button>
//             <button
//               className={`toggle-btn ${!isLoginActive ? "active" : ""}`}
//               onClick={() => !isLoginActive || handleToggle()}
//             >
//               Register
//             </button>
//           </div>

//           {/* Swipeable Container */}
//           <div
//             className="login_register_container"
//             ref={containerRef}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             {/* Login Section */}
//             <div className="user_interfaceLogin">
//               <h3>Welcome Back</h3>
//               <p className="subtitle">Sign in to access your account</p>

//               <form action="" className="user_interfaceLoginForm">
//                 <div className="user_interfaceLogin_formGroup">
//                   <label htmlFor="loginEmail" className="form-label">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="loginEmail"
//                     className="form-control loginemail"
//                     placeholder="Enter your university email"
//                     required
//                   />
//                 </div>

//                 <div className="user_interfaceLogin_formGroup">
//                   <label htmlFor="loginPassword" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="loginPassword"
//                     className="form-control loginpassword"
//                     placeholder="Enter your password"
//                     required
//                   />
//                 </div>

//                 <div className="form-options">
//                   <div className="remember-me">
//                     <input type="checkbox" id="remember" />
//                     <label htmlFor="remember">Remember me</label>
//                   </div>
//                   <Link to="#" className="forgot-password">
//                     Forgot password?
//                   </Link>
//                 </div>

//                 <button type="submit" className="submit-btn submit-login-password">
//                   Sign In
//                 </button>

//                 <div className="social-login">
//                   <p>Or sign in with</p>
//                   <div className="social-icons">
//                     <button className="social-btn google">
//                       <i className="fab fa-google"></i>
//                     </button>
//                     <button className="social-btn facebook">
//                       <i className="fab fa-facebook-f"></i>
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>

//             {/* Register Section */}
//             <div className="user_interfaceRegister">
//               <h3>Create Account</h3>
//               <p className="subtitle">Join our campus transport community</p>

//               <form action="" className="user_interfaceRegisterForm">
//                 <div className="user_interfaceRegister_formGroup">
//                   <label htmlFor="registerUsername" className="form-label">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     id="registerUsername"
//                     className="form-control Registerusername"
//                     placeholder="Choose a username"
//                     required
//                   />
//                 </div>

//                 <div className="user_interfaceRegister_formGroup">
//                   <label htmlFor="registerEmail" className="form-label">
//                     University Email
//                   </label>
//                   <input
//                     type="email"
//                     id="registerEmail"
//                     className="form-control Registeremail"
//                     placeholder="Enter your university email"
//                     required
//                   />
//                 </div>

//                 <div className="user_interfaceRegister_formGroup">
//                   <label htmlFor="registerPassword" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="registerPassword"
//                     className="form-control Registerpassword"
//                     placeholder="Create a password"
//                     required
//                   />
//                 </div>

//                 <div className="user_interfaceRegister_formGroup">
//                   <label htmlFor="confirmPassword" className="form-label">
//                     Confirm Password
//                   </label>
//                   <input
//                     type="password"
//                     id="confirmPassword"
//                     className="form-control"
//                     placeholder="Confirm your password"
//                     required
//                   />
//                 </div>

//                 <div className="form-options">
//                   <div className="terms-checkbox">
//                     <input type="checkbox" id="terms" required />
//                     <label htmlFor="terms">
//                       I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
//                     </label>
//                   </div>
//                 </div>

//                 <button type="submit" className="submit-btn submit-Register-password">
//                   Create Account
//                 </button>

//                 <div className="social-login">
//                   <p>Or register with</p>
//                   <div className="social-icons">
//                     <button className="social-btn google">
//                       <i className="fab fa-google"></i>
//                     </button>
//                     <button className="social-btn facebook">
//                       <i className="fab fa-facebook-f"></i>
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* Swipe Indicator */}
//           <div className="swipe-indicator">
//             <span>Swipe {isLoginActive ? "left" : "right"}</span>
//             <div className="swipe-dots">
//               <div className={`swipe-dot ${isLoginActive ? "active" : ""}`}></div>
//               <div className={`swipe-dot ${!isLoginActive ? "active" : ""}`}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default User_interface;


import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/User_interface.css";

const User_interface = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    // Only trigger swipe if moved significantly
    if (diff > 50 && isLoginActive) { // Swipe left to show register
      setIsLoginActive(false);
    } else if (diff < -50 && !isLoginActive) { // Swipe right to show login
      setIsLoginActive(true);
    }

    setStartX(0); // Reset touch position
  };

  // Update container position when active form changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.6s ease-in-out";
      containerRef.current.style.transform = isLoginActive
        ? "translateX(0)"
        : "translateX(-50%)";
    }
  }, [isLoginActive]);

  return (
    <div className="user_interfaceWrapper">
      <Link to="/" className="back-link">← Back to Home</Link>

      <div className="ContainerLogin_register">
        {/* Toggle buttons */}
        <div className="toggle-container">
          <button
            className={`toggle-btn ${isLoginActive ? "active" : ""}`}
            onClick={() => setIsLoginActive(true)}
          >
            Login
          </button>
          <button
            className={`toggle-btn ${!isLoginActive ? "active" : ""}`}
            onClick={() => setIsLoginActive(false)}
          >
            Register
          </button>
        </div>

        {/* Swipeable container */}
        <div
          className="login_register_container"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Login Form */}
          <div className="user_interfaceLogin">
            <h3>Welcome Back</h3>
            <form className="user_interfaceLoginForm">
              <div className="form-group">
                <label htmlFor="loginEmail" className="form-label">Email</label>
                <input
                  type="email"
                  id="loginEmail"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="submit-btn submit-login-password">
                Sign In
              </button>
            </form>
          </div>

          {/* Register Form */}
          <div className="user_interfaceRegister">
            <h3>Create Account</h3>
            <form className="user_interfaceRegisterForm">
              <div className="form-group">
                <label htmlFor="registerEmail" className="form-label">Email</label>
                <input
                  type="email"
                  id="registerEmail"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="registerPassword" className="form-label">Password</label>
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control"
                  placeholder="Create a password"
                  required
                />
              </div>
              <button type="submit" className="submit-btn submit-Register-password">
                Register
              </button>
            </form>
          </div>
        </div>

        {/* Swipe indicator */}
        <div className="swipe-indicator">
          <span>Swipe {isLoginActive ? "left" : "right"}</span>
          <div className="swipe-dots">
            <div className={`swipe-dot ${isLoginActive ? "active" : ""}`}></div>
            <div className={`swipe-dot ${!isLoginActive ? "active" : ""}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_interface;
