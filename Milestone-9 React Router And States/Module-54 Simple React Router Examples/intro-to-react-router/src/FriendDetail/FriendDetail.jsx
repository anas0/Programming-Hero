import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    const {email, id, name, phone} = friend;
    console.log(friend);
    
    return (
        <div>
            <h3>Every thing you need to know about this parson</h3>
            <h5>Name: {name}</h5>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetail;