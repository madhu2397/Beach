import React from 'react';
import '../Contact/Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
//import HomePage from '../HomePage/HomePage'
const Contact = () => {
return (
<>
<Navbar/>
<div className="contact-section">
    <div className="contact-form">
        <h2>Contact Us</h2>
        <form className="contact" >
          <input type="text" name="name" className="text-box" placeholder="Your Name" required/>
          <input type="email" name="email" className="text-box" placeholder="Your Email" required/>
          <textarea name="message" rows="5" className="text-area" placeholder="Your Message" required></textarea>
          <input type="submit" name="submit" className="send-btn" value="Send"/>
        </form>
      </div>

</div>

</>
)
}
export default Contact;