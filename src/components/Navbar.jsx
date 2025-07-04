import React, { useRef } from "react";
import './Navbar.css'
import menu_open from '../assets/menu_open.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import nav_image from '../assets/nav_underline.svg'
import js_logo from '../assets/js_logo.webp'
import menu_close from '../assets/menu_close.svg'
const Navbar = () => {
    const[menu,setMenu] = useState("home");
    const menuRef = useRef(null);
    const openMenu = () => {
        menuRef.current.style.right='0';
    }
    const closeMenu = () => {
        menuRef.current.style.right='-350px';
    }
    return (
        <div className="navbar">
            <img src={js_logo} width="200" height="150" style={{borderRadius: '50%'}} alt="logo" />
            <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li className="nav-home">
                  <AnchorLink className="anchor-link" href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>
                  <img className="nav-underline" src={nav_image} alt="nav" />
                </li>
                <li className="nav-about">
                  <AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={() => setMenu("about")} >About Me</p></AnchorLink>
                  <img className="nav-underline" src={nav_image} alt="nav" />
                </li>
                <li className="nav-portfolio">
                  <AnchorLink
                    className="anchor-link"
                    offset={50}
                    href='#portfolio'
                    onClick={() => {
                      setMenu("portfolio");
                      setTimeout(() => { window.location.reload(); }, 500);
                    }}
                  >
                    <p>Portfolio</p>
                  </AnchorLink>
                  <img className="nav-underline" src={nav_image} alt="nav" />
                </li>
                <li className="nav-contact">
                  <AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={() => setMenu("contact")} >Contact</p></AnchorLink>
                  <img className="nav-underline" src={nav_image} alt="nav" />
                </li>
            </ul>
            <div className="nav-connect"> <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        </div>
    )
}
export default Navbar