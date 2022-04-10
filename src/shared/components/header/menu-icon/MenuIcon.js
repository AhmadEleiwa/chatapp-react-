import React from "react";

import './MenuIcon.css'

const MenuIcon = props =>{

    

    return(
        <button onClick={props.onClick} className={`MenuIcon ${props.className}`} >
            <div style={{backgroundColor: props.color }} />
            <div style={{backgroundColor: props.color }} />
            <div style={{backgroundColor: props.color }} />

        </button>
    )
}

export default MenuIcon