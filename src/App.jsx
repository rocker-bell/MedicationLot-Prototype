import {Routes, Route} from "react-router-dom";
import Landing_page from "./Components/Landing_page1";
import User_interface from "./Components/User_interface";
import Admin_dashboard from "./Components/Admin_dashboard";
import User_dashboard from "./Components/User_dashboard";
import Searched_location from "./Components/Searched_location";
import Location_search_result from "./Components/Location_search_result";
import About from "./Components/About";
import ContactUS from "./Components/ContactUs.jsx";
import Transporter_dashboard from "./Components/Transporter_dashboard.jsx"; 

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Landing_page/>} />
            <Route path="/user_interface" element={<User_interface/>}/>
            <Route path="/Admin_dashboard" element={<Admin_dashboard/>}/>
            <Route path="/User_dashboard" element={<User_dashboard/>}/>
            <Route path="/Searched_location" element={<Searched_location/>} />
            <Route path="/Location_search_result" element={< Location_search_result/>}  />
            <Route path="/About" element={< About/>}  />
            <Route path="/ContactUS" element={< ContactUS/>}  />
              <Route path="/Transporter_dashboard" element={<Transporter_dashboard/>} />
        </Routes>
    </>
  )
}

export default App;