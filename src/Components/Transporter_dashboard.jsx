import "../Styles/Transporter_dashboard.css"
import {Link} from "react-router-dom"
const Transporter_dashboard = () => {
    return (
        <>
               <h1>Transporter dashboard</h1>
            <div className="Transporter_dashboard_wrapper">
                <nav>
                    <Link to="/">home</Link>
                    <Link>historique</Link>
                    <Link>Profile</Link>
                    <Link>logout</Link>
                </nav>
                <div className="Transporter_dashboard_mainCOntainer">
                    
                </div>
            </div>
        
        </>
    )
}

export default Transporter_dashboard;