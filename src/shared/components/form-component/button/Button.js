import React from "react";
import { NavLink } from "react-router-dom";
import './Button.css'


const Button = props =>{
    const ptype = () => {return 'Button'}
    if(props.to)
        return <NavLink 
        onClick={props.onClick}
        to={props.to} 
        style={{transition:"all", transitionDuration:props.transitionTimeOut ? props.transitionTimeOut : '0.17s',  ...props.style}} 
        className={`button ${props.className} button--${props.color }${props.inverse ? '-inverse' : '' }  ${props.inverse && !props.color? ' button--inverse' : ''} button--${props.size}  ${props.style}`}>
            {props.children}
            </NavLink>
    else
        return <button 
        disabled={props.disabled}
        onClick={props.onClick}
        type={props.type}
        style={{transition:"all", transitionDuration:props.transitionTimeOut ? props.transitionTimeOut : '0.17s', ...props.style}} 
        className={`button ${props.className}   button--${props.color }${props.inverse ? '-inverse' : '' }  ${props.inverse && !props.color? ' button--inverse' : ''} button--${props.size} ${props.style}`}>
            {props.children}
            </button>
    
}


export default Button