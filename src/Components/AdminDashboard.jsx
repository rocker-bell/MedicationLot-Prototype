import Logo from "../Assets/Logo.svg";
const Dashboard_Admin = () => {
    return (
        <>
           <div className="admin_dashboard_wrapper">
                    <div className="admin_dashboard_container">
                        <span className="admin_nav">
                        <nav className="admin_badge_identification_nav">
                            <img src={Logo} alt="Admin Dashboard Logo" className="admin_dashboard_Logo"/>
                            <ul className="nav_lists">
                                <li className="nav_list">image</li>
                                <li className="nav_list">id</li>
                                <li className="nav_list">username</li>
                                <li className="nav_list">role</li>
                                <li className="nav_list">credits</li>
                                <li className="nav_list">permissions</li>
                            </ul>

                        </nav>

                         <nav className="admin_actions_nav">
                           
                            <ul className="nav_lists_slider">
                                <li className="nav_list">users</li>
                                <li className="nav_list">products</li>
                                <li className="nav_list">statistique</li>
                                <li className="nav_list">notes</li>
                                <li className="nav_list">connect_bar</li>

                            </ul>

                        </nav>
                        </span>


                        <span className="admin_main_container_slider_components">
                            <span className="users_general"></span>
                            <span className="products_general"></span>
                            <span className="statistique"></span>
                            <span className="notes_bar"></span>
                            <span className="connect"></span>
                        </span>
                    </div>
           </div>
        </>
    )
}

export default Dashboard_Admin;