import React from "react";

import { NavLink } from "react-router-dom";
import Button from "../../form-component/button/Button";
// import { CSSTransition } from "react-transition-group";

import './NavLinks.css'

const NavLinks = props =>{
    let c =0 
    const items = props.links.map(link => (<li  className={link.type == Button? '' : 'button-link'} key={c++} onClick={props.onClick}>{link}</li>))

    return <ul className={`nav-links ${props.className} `}>{items}</ul>
    
}

export default NavLinks;