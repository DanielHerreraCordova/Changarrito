import React from "react"
import "./form.css"

const Form = () => (
    <div className="form">
        <h3 className="titleS-2">Contacto</h3>
        <form>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
)
export default Form
