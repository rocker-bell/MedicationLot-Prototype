import {Link} from "react-router-dom"
import "../Styles/searched_location.css"
const Searched_location = () => {
    return (
        <>
            <h1>Searched location</h1>
             <div className="Search_location_wrapper">
                <nav>
                    <Link to="/">home</Link>
                </nav>
            </div>
        </>
    )
}

export default Searched_location;