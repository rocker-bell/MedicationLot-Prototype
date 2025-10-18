import {Link} from "react-router-dom";
import "../Styles/about.css"

const About = () => {
    return (
        <>

              <div className="about-wrapper">
                <h1>About us page</h1>
                <nav>
                    <Link to="/">home</Link>
                </nav>
                
                </div>  
            
        </>
    )
}

export default About;