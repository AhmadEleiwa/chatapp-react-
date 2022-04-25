import React, { useCallback, useState } from "react";
import ChatContent from "./ChatContent";
import ChatHeader from "./ChatHeader";

import './ChatView.css'
import FormSender from "./FormSender";


const messages = [
    {id:'1', message:'https://www.youtube.com/watch?v=mVvFclqodMc', user:'ahmadeleiwa'},
    {id:'2', message:'hello bro , wass up!', user:'mohammadjammal'},
    {id:'3', message:'nothin just chillin', user:'ahmadeleiwa'},
    {id:'4', message:'watch this https://www.youtube.com/watch?v=xF45xhMZJJk', user:'mohammadjammal'},
] 


const ChatView = props => {
    const [messagesContent, setMessagesContent] = useState([...messages])
    const addMessage=useCallback((item) =>{
        setMessagesContent((ms) => [...ms ,item])
    },[messagesContent])
    
    return <div className="chat-view">
        <ChatHeader />
        <ChatContent messages={messagesContent} />
        <FormSender getMessage={addMessage} />
    </div>;

}


export default ChatView;