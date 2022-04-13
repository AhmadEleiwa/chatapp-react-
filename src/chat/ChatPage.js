import React from "react";
import ChatView from "./components/chat-view/ChatView";
import UserList from "./components/user-list/UserList";


import './ChatPage.css'

const ChatPage = () =>{


    return <div className="chat" >
        <UserList />
        <ChatView />
    </div>
}


export default ChatPage