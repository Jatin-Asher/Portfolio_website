import React from 'react'
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import image4 from '../../assets/image4.jpg'
const Hero = () => {
    return(
        <div id='home' className='hero'>
            <img src={image4} height='300px' width='300px' style={{borderRadius: '50%'}} alt="" />
            <h1><span>I'm Jatin Sharma</span>, Aspiring DataScientist|MCA Student|Full Stack developer</h1>
            <p>I'm a postgraduate computer applications student passionate about transforming data into actionable insights. With strong foundations in Python, SQL, and statistics, along with hands-on experience in web development (React, Node.js, Express), I bridge the gap between data and applications. Currently seeking a Data Science internship opportunity to apply and grow my analytical and programming skills.</p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero