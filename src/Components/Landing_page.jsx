// import "../Styles/Landing_page.css";
// import {useNavigate} from "react-router-dom";

// // images imp[orts]

// import menu1 from './images/menu1.png';
// import home from './images/home.png';
// import searched from './images/searched.png';
// import info from './images/info.png';
// import contact from './images/contact.png';
// import userInterface from './images/user-interface.png';


// const Landing_page = () => {

//     const navigate = useNavigate()

//     const handleprofileIconCLick = () => {
//             navigate("/User_interface")
//     }

//     return (
//         <>
//                 <div className="landing_page_wrapper">
//                     <nav className="landing_page_navigation">
//                         <button className="landing_page_NavDropdown">
//                             <img src="menu" alt="" className="LandingPage_navbarIcons" />
//                         </button>
//                         <ul className="landing_page_NavList">
//                             <li className="LP_Navlists">
//                                 <img src="home" alt="" className="LandingPage_navbarIcons" />
//                             </li>
//                             <li className="LP_Navlists">
//                                 <img src="searched" alt="" className="LandingPage_navbarIcons" />
//                             </li>
//                             <li className="LP_Navlists">
//                                 <img src="info" alt="" className="LandingPage_navbarIcons" />
//                             </li>
//                             <li className="LP_Navlists">
//                                 <img src="contact" alt=""  className="LandingPage_navbarIcons" />
//                             </li>
//                             <li className="LP_Navlists">
//                                 <img src="userInterface" alt="" className="LandingPage_navbarIcons" onClick={handleprofileIconCLick} />
//                             </li>
//                         </ul>

//                     </nav>
//                     <div className="landing_page_mainContainer">
//                                 <form action="">
//                                         <div className="form-group">
//                                             <label htmlFor="" className="location-finder-title">Find any location Trajectory</label>
//                                             <div className="inside-form-group">
//                                                 <input type="text"  placeholder="write your desired location here" className="search-location-input"/>
//                                                 <button className="submit-location">Find </button>
//                                             </div>
//                                         </div>

//                                 </form>
//                     </div>
                   
//                 </div>
//         </>
//     )
// }

// export default Landing_page;


import "../Styles/Landing_page.css";
import { useNavigate, Link } from "react-router-dom";

// Import images
import menu1 from './images/menu1.png';
import home from './images/home.png';
import searched from './images/searched.png';
import info from './images/info.png';
import contact from './images/contact.png';
import userInterface from './images/user-interface.png';
import car2 from "./images/car1.png"
import logo2 from "./images/logo1.jpeg"
import Logo from "./Logo.jsx"

const Landing_page = () => {
    const navigate = useNavigate();

    const handleprofileIconCLick = () => {
        navigate("/User_interface");
    }

    return (
        <div className="landing_page_wrapper">
            <nav className="landing_page_navigation">
                <button className="landing_page_NavDropdown">
                    <Link><img src={menu1} alt="" className="LandingPage_navbarIcons" /></Link>
                    
                </button>
                <ul className="landing_page_NavList">
                    <li className="LP_Navlists">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </li>
                    {/* <li className="LP_Navlists">
                        <Link to="/"><img src={home} alt="" className="LandingPage_navbarIcons" /></Link>
                        
                    </li> */}
                    <li className="LP_Navlists">
                        <Link to="/Searched_location"><img src={searched} alt="" className="LandingPage_navbarIcons" /></Link>
                        
                    </li>
                    <li className="LP_Navlists">
                        <Link to="/About"><img src={info} alt="" className="LandingPage_navbarIcons" /></Link>
                        
                    </li>
                    <li className="LP_Navlists">
                        <Link to="/ContactUS"><img src={contact} alt="" className="LandingPage_navbarIcons" /></Link>
                        
                    </li>
                    <li className="LP_Navlists">
                        <Link to="/user_interface"><img src={userInterface} alt="" className="LandingPage_navbarIcons" onClick={handleprofileIconCLick} /></Link>
                        
                    </li>
                </ul>
            </nav>
            <div className="landing_page_mainContainer">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="" className="location-finder-title">Find any location Trajectory</label>
                        <div className="inside-form-group">
                            <img src={car2} alt="" className="car2" />
                            <input type="text" placeholder="write your desired location here" className="search-location-input"  />
                            <button className="submit-location">Find </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Landing_page;
