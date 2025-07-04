import React from 'react'
import './Contact.css'
import location from '../../assets/location_icon.svg'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
const Contact = () =>{
const [result, setResult] = React.useState(""); 
      const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1b4d2206-1489-4788-8f34-dba4137786e2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


    return(
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm available for projects in Full Stack Development and Data Science. If you need help building web apps or working with data, feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail} alt="" /><p>jatinsharma2002oct@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call} alt="" /><p>+91 78768-22458</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location} alt="" /><p>Kangra,Himachal Pradesh,India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter your email' name='email'/>
                    <label htmlFor="" >Write Your message here</label>
                    <textarea name="message" rows='8' placeholder='Enter your message'i></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact