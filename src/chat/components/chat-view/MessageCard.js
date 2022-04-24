import React from "react";
import Card from '../../../shared/components/card/Card'

import { Link } from "react-router-dom";

import './MessageCard.css'
const MessageCard = props =>{
    let content = '' 
    let element  = [];
    content = props.children
    if(content.search('www.youtube.com/watch')>0){
    //    content= content.replace('watch?v=', 'embed/')
       let link = content.substring(content.search('https://www.youtube.com/watch') , content.length)
       let frame = link.replace('watch?v=', 'embed/')
       element.push(<iframe  src={frame}></iframe>)
       element.push(<a  href={link} target='_blank'>{link}</a>)
       element.push(<p>{content.replace(link, '')}</p>) 
       
    }
    else{
        element.push(<p>{props.children}</p>)
    }
    return <div className='message'>
        <Card className={`message-card ${props.sender? 'sender' : ''}`}  >
           {element}
    </Card>
    </div>
}

export default MessageCard