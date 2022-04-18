import React from "react";
import MessageCard from "./MessageCard";


import './ChatContent.css'
const ChatContent = props => { 


    const messages = [
        {id:'1', message:'https://www.youtube.com/watch?v=mVvFclqodMc', user:'ahmadeleiwa'},
        {id:'2', message:'hello bro , wass up!', user:'mohammadjammal'},
        {id:'3', message:'nothin just chillin', user:'ahmadeleiwa'},
        {id:'4', message:'watch this https://www.youtube.com/watch?v=xF45xhMZJJk', user:'mohammadjammal'},
    ] 
    let messagesElments=messages.map(message => 
        <MessageCard key={message.id} sender={message.user=='ahmadeleiwa'} >{message.message}</MessageCard>
        )
    
    
    return <div className="chat-content">
        {/* <MessageCard sender >https://www.youtube.com/watch?v=mVvFclqodMc</MessageCard>
        <MessageCard > hellow</MessageCard> */}
        {messagesElments}
        
    </div>
}

export default ChatContent