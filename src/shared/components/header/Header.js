import React, {useState} from "react";
import NavLinks from "./NavLinks/NavLinks";
import MenuIcon from "./menu-icon/MenuIcon";
import Backdrop  from '../backdrop/Backdrop'
import SideDrawer from "./side-drawer/SideDrawer";
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = props =>{
    const [headerIsOpen, setHeaderIsOpen] = useState(false)

    const openHeaderHandler = event =>{
        setHeaderIsOpen(true);
    }
    const closeHeaderHandler = event => {
        setHeaderIsOpen(false)
    }

    return <div>
        <SideDrawer show={headerIsOpen}  width={props.sideDrawerSize}>
            <nav className="side-drawer__content" style={props.sideDrawerStyle ? props.sideDrawerStyle  : props.style  }>
                
                <div className="content" >{props.children}</div>    
                
                <NavLinks onClick={closeHeaderHandler} links={props.links} className={props.navStyle}/>
            </nav>

        </SideDrawer>
        {headerIsOpen &&<Backdrop onClick={closeHeaderHandler} />}
        <header 
        className={` ${props.className } Main-Header   ${props.vertical ? 'vertical' : ''} Main-Header-${props.transparent? 'transparent': props.theme}`} 
        style={{...props.style, backgroundColor:props.backgroundColor, color:props.color}}
        >
        {props.menuIcon ? props.menuIcon : <MenuIcon color={props.theme==='dark'|| props.theme==='darkblue' ? 'white' : 'black'} className={props.menuIconClassName} onClick={props.menuIconOnClick ? props.menuIconOnClick : openHeaderHandler }/>} 
        {props.title && props.titleTo ?  <NavLink to={props.titleTo} style={{...props.titleStyle, color:props.titleColor, fontSize:props.titleSize}} className={`title ${props.titleStyle}`}>{props.title}</NavLink> 
        : <h2 style={{...props.titleStyle, color:props.titleColor, fontSize:props.titleSize}} className={`title ${props.titleStyle}`}>{props.title}</h2> }

        <div className="content" >{props.children}</div>

        <NavLinks links={props.links} className={props.navLinksClassName} style={props.navLinksStyle}/>
        
        
    </header>
    </div>

}

export default Header