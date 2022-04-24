import React, { useState } from "react";
import UserItem from "./UserItem";

import './UserList.css'
import Button from "../../../shared/components/form-component/button/Button";
const users = [
    {id:'1', name:'AhmadIilawa', img:'https://picsum.photos/200/300', text:'i would to ask u some questions', date:'2019/2/3'},
    {id:'2', name:'Mohammad Jammal', img:'https://picsum.photos/200/301', text:'wher are u ', date:'2019/2/3'},
    {id:'3', name:'Moe Sallah', img:'https://picsum.photos/200/304', text:'text', date:'2019/2/3'},


]
const UserList = props =>{

    const [shownUsers, setShownUsers] = useState(users)
    const searchChangeHandler = event =>{
        let lowerCaseItems  = users.filter(item => item.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
        setShownUsers(lowerCaseItems)
    }
    const content = shownUsers.map(user => 
        <div  key={user.id}>
            <UserItem key={user.id} id={user.id} name={user.name} img={user.img} text={user.text} date={user.date} />
            <div  style={{margin:'auto' , width:'95%' , backgroundColor:'grey', opacity:'0.3', height:'1px'}} />
        </div>
        )
    return <div className="user-list">

        <input type='search' className="search-user-input" onChange={searchChangeHandler} />
        {content}
    </div>

}

export default UserList