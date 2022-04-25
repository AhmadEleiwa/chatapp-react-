import React, { useCallback, useEffect, useState } from "react";
import MessageCard from "./MessageCard";


import './ChatContent.css'





const ChatContent = props => { 

    const [content, setContent] = useState([...props.messages])
 
    useEffect(()=>{
        setContent([...props.messages])

    },[props.messages])
    let c = 0
    return <div className="chat-content" >
        {content.map( message =>{
            c++
            if(c!=content.length)
                return <MessageCard   key={message.id} sender={message.user=='ahmadeleiwa'} >{message.message}</MessageCard>
            else
                return <MessageCard  scroll  key={message.id} sender={message.user=='ahmadeleiwa'} >{message.message}</MessageCard>

        }
        )
        
        
        }

        
    </div>
}

export default ChatContent