import React from "react";
import Card from '../../shared/components/card/Card'


import './UserItem.css'
const UserItem = props =>{
    
    
    return <Card theme='card-darkblue' className='user-card' noboxshadow>
        <img src={props.img} alt={props.name} />
        <div className="card-content">
            <h2>{props.name}</h2>
            <p>{props.text.length > 20? props.text.substring(0, 20)+'...' : props.text}</p>
        </div>
    </Card>
}

export default UserItem