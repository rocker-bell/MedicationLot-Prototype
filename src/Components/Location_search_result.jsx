import {Link} from "react-router-dom"
import "../Styles/Location_search_result.css"
const Location_search_result = () => {
    return (
        <>
            <h1>Location search result</h1>
              <div className="Location_search_result_wrapper">
                <nav>
                    <Link to="/">home</Link>
                </nav>
            </div>
        </>
    )
}

export default Location_search_result;