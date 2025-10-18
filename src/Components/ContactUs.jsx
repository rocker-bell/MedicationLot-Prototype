import {Link} from "react-router-dom";
import "../Styles/contactus.css"
const ContactUS = () => {

    const handlesubmitcontactform = () => {
        alert("this website is still under maintenance : (email : bloggebook@proton.me if anything urgent)")
    }

    return (
        <>
            <div className="Contactusform-wrapper">
                <Link to="/">home</Link>
                <fieldset className="Contactusfieldset">
                    <legend>contact support form</legend>
                    <form  method="POST" className="Contactusform">
                        <div className="Contactusform-group">
                            <label htmlFor="" className="Contactusform-label">Full name</label>
                            <input type="text" className="Contactusform-control" placeholder="full name" required/>
                        </div>
                        <div className="Contactusform-group">
                            <label htmlFor="" className="Contactusform-label">email</label>
                            <input type="email" className="Contactusform-control" placeholder="Enter your personal/business valid email" required/>
                        </div>
                         <div className="Contactusform-group">
                            <label htmlFor="" className="Contactusform-label" >phone number</label>
                            <input type="number" className="Contactusform-control" placeholder="personal phone number or business phone number " required/>
                        </div>
                         <div className="Contactusform-group">
                            <label htmlFor="" className="Contactusform-label">Organization email/name/domaine</label>
                            <input type="text" className="Contactusform-control" placeholder="organization info (enter no organization if no organization term)" required />
                        </div>
                         <div className="Contactusform-group">
                            <label htmlFor="" className="Contactusform-label">Contact subject</label>
                            <input type="text" className="Contactusform-control" placeholder="contact subject, specify main contact subject" required />
                        </div>
                         <div className="Contactusform-group">
                            <label htmlFor="" className="Contactusform-label">subject details</label>
                            <textarea type="text" className="Contactusform-control textArea-input"  placeholder="details fro contact subject" required />
                        </div>
                        <div className="Contactusform-group">
                            <label htmlFor="" className="Contactusform-label">feedback</label>
                            <textarea name="" className="Contactusform-control textArea-input" placeholder="thoughtful feedback. (optional but we appreciate it (write no feedback if no feedback))" />
                        </div>

                        <button className="submit-formbtn" onClick={handlesubmitcontactform} >submit</button>
                    </form>
                </fieldset>
            </div>
        
        </>
    )

} 

export default ContactUS;