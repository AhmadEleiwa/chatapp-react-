import React from "react";

import './ChatHeader.css'
import SettingsButton from "../../../shared/components/icons/SettingsButton";

const ChatHeader = props =>{

    return <div className="chat-header">
        <div className="left">
            <SettingsButton />
        </div>
        <div className="right">
            <div className="right-content">
                <p className="right-content__name">User Name</p>
                <p className="right-content__date">2019/2/3</p>
            </div>
            <img src="https://picsum.photos/200/300" />

        </div>

    </div>

}


export default ChatHeader