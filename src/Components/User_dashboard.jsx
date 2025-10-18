import {Link} from "react-router-dom";
import "../Styles/User_dashboard.css"
const User_dashboard = () => {
    return (
        <>
            <h1>User dashboard</h1>
            <div className="User_dashboard_wrapper">
                <nav>
                    <Link to="/">home</Link>
                    <Link>historique</Link>
                    <Link>Profile</Link>
                    <Link>logout</Link>
                </nav>
            </div>
            
        </>
    )
}

export default User_dashboard;