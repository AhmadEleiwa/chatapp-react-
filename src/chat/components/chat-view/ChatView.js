import React from "react";
import ChatContent from "./ChatContent";
import ChatHeader from "./ChatHeader";

import './ChatView.css'

const ChatView = props => {


    return <div className="chat-view">
        <ChatHeader />
        <ChatContent />
    </div>;
}


export default ChatView;