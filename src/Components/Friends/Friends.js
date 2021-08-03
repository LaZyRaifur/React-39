import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    const {name,email,id} = props.friend;
    
    const history = useHistory();
    const handleClick = (friendId)=>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }

    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>id: <Link to={`/friend/${id}`}>Show Detail of {id}</Link></p>
            <button onClick= {()=>handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friends;