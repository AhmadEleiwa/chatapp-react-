import React from "react";
import Card from '../../../shared/components/card/Card'


import './UserItem.css'
const UserItem = props =>{
    
    
    return <Card theme='card-darkblue' className='user-card' noboxshadow>
        <img src={props.img} alt={props.name} />
        <div className="card-content">
            <div className="left">
                <h4>{props.name} </h4>
                <p>{props.text.length > 20? props.text.substring(0, 20)+'...' : props.text}</p>
            </div>
            <div className="right">
                <p style={{marginTop:'0x'}} >{props.date}</p>
            </div>
        </div>

    </Card>
}

export default UserItem