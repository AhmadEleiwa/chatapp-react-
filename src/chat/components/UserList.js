import React from "react";
import UserItem from "./UserItem";

import './UserList.css'
const users = [
    {id:'1', name:'ahmad ilawa', img:'https://picsum.photos/200/300', text:'i would to ask u some questions'},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'3', name:'moe Sallah', img:'https://picsum.photos/200/304', text:'text'},

    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},
    {id:'2', name:'mohammad jammal', img:'https://picsum.photos/200/301', text:'wher are u '},


]
const UserList = props =>{

    const content = users.map(user => 
        <UserItem id={user.id} name={user.name} img={user.img} text={user.text} />
        )
    return <div className="user-list">
        {content}
    </div>

}

export default UserList