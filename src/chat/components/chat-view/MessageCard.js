import React from "react";
import Card from '../../../shared/components/card/Card'

import { Link } from "react-router-dom";

import './MessageCard.css'
const MessageCard = props =>{
    let content = '' 
    let element  = [];
    content = props.children

    if(content.search('www.youtube.com/watch')>=0){
    //    content= content.replace('watch?v=', 'embed/')
       let link = content.substring(content.search('https://www.youtube.com/watch') , content.length)
       let frame = link.replace('watch?v=', 'embed/')
       element.push(<iframe  src={frame}></iframe>)
       element.push(<a  href={link} target='_blank'>{link}</a>)
       element.push(<p>{content.replace(link, '')}</p>) 
       
    }
    else if(content.includes('https') && content.includes('com')){
        let link = content.substring(content.search('https'),content.search('com')+3)
        let c = content.split(link)
        console.log(c)      
        element.push(<p>{c[0]}<a  href={link} target='_blank'>{link}</a>{c[1]}</p>)

    }
    else if(content.includes('http') && content.includes('com')){
        let link = content.substring(content.search('http'),content.search('com')+3)
        let c = content.split(link)
        console.log(c)      
        element.push(<p>{c[0]}<a  href={link} target='_blank'>{link}</a>{c[1]}</p>)

    }
    else{
        element.push(<p>{props.children}</p>)
    }

    const loaded = event =>{
        event.target.scrollIntoView();
        console.log(event)
    }

    if(!props.scroll)
    return <div className={`message `}    >
        <Card className={`message-card ${props.sender? 'sender' : ''}`}  >
           {element}
    </Card>
    </div>
    else{
    return <div className={`message ${props.scroll? 'scroll': ''}`}  onMouseDown={loaded}  >
        <Card className={`message-card ${props.sender? 'sender' : ''}`}  >
           {element}
    </Card>
    </div>
    }
}

export default MessageCard