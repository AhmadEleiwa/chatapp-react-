import React from "react";

import './Card.css'

const Card = props =>{
    return <div 
    className={`card ${props.theme} ${props.className} ${props.noboxshadow? 'no-boxshadow' : '' }` } 
    style={{maxWidth:props.maxWidth, width:props.width }}
    onClick={props.onClick}
    >
        {props.children}
    </div>
}

export default Card