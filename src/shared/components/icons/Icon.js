import React from "react";
import { Link } from "react-router-dom";

const Icon = props =>{
    let content;
    if(props.to){
        content = <Link to={props.to} className={` ${props.className}`} width={props.width? props.width: '30px'}  onClick={props.onClick} style={{backgroundColor: 'transparent', outline:'none', border:'none' , cursor:'pointer'}}>
            <img className={` ${props.classNameImg}`} src={props.src} width={props.width? props.width: '30px'} />
        </Link>
    }
    else{        
        content = <button className={` ${props.className}`} width={props.width? props.width: '30px'}  onClick={props.onClick} style={{backgroundColor: 'transparent', outline:'none', border:'none' , cursor:'pointer'}}>
            <img className={` ${props.classNameImg}`} src={props.src} width={props.width? props.width: '30px'} />
        </button>
    }
    return content
}


export default Icon