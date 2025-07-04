import React from "react";
import './About.css'
import image2 from '../../assets/image2.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
    return(
    <div id="about" className="about">
        <div className="about-title">
            <span className="about-title-text">About Me</span>
            <img className="about-title-bg" src={theme_pattern} height='300px' width='300px' alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={image2} height='300px' width='300px' alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm currently pursuing my Master of Computer Applications (MCA) from the Central University of Himachal Pradesh, with a strong academic foundation in programming, mathematics, and data analytics.</p>
                    <p>I’ve worked on several projects involving data visualization, statistical analysis, and predictive modeling using libraries like Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn. I'm passionate about exploring the power of data to solve real-world problems.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS<hr style={{width:'50%'}} /></p></div>
                    <div className="about-skill"><p>Java Script & React Js<hr style={{width:"60%"}} /></p></div>
                    <div className="about-skill"><p>Node Js & Express<hr style={{width:"70%"}} /></p></div>
                    <div className="about-skill"><p>PYTHON,C++,C<hr style={{width:"50%"}} /></p></div>
                    <div className="about-skill"><p>MySQL, Pandas, NumPy, Matplotlib<hr style={{width:"40%"}} /></p></div>
                </div>
            </div>
        </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>1+</h1>
                        <p>Continuesly Acquiring Knowledge</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>15+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>Get Certificate By Pass the test from UNISOLE AI</p>
                    </div>
                </div>
    </div>
    )
}
export default About