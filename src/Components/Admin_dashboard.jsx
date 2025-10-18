import "../Styles/admin_dashboard.css"

import {Link} from "react-router-dom"
const Admin_dashboard = () => {
    return (
        <>
            <h1>Admin dashboard</h1>
             <div className="admin_dashboard_wrapper">
                <nav>
                    <Link to="/">home</Link>
                    <Link> current transportation orders </Link>
                    <Link> users </Link>
                    <Link>profile</Link>
                    <Link>logout</Link>
                </nav>
                <div className="admin_dashboard_main_container">

                </div>
            </div>
        </>
    )
}

export default Admin_dashboard;