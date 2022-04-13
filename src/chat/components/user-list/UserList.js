import React from "react";
import UserItem from "./UserItem";

import './UserList.css'
const users = [
    {id:'1', name:'AhmadIilawa', img:'https://picsum.photos/200/300', text:'i would to ask u some questions', date:'2019/2/3'},
    {id:'2', name:'Mohammad Jammal', img:'https://picsum.photos/200/301', text:'wher are u ', date:'2019/2/3'},
    {id:'3', name:'Moe Sallah', img:'https://picsum.photos/200/304', text:'text', date:'2019/2/3'},


]
const UserList = props =>{

    const content = users.map(user => 
        <div>
            <UserItem id={user.id} name={user.name} img={user.img} text={user.text} date={user.date} />
            <div  style={{margin:'0px' , width:'100%' , backgroundColor:'grey', opacity:'0.5', height:'1px'}} />
        </div>
        )
    return <div className="user-list">
        {content}
    </div>

}

export default UserList