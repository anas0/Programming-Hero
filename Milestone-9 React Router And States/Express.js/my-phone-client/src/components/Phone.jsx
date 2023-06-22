import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    console.log("Hi");
    const phone = useLoaderData();
    console.log(phone); 
    return (
        <div>
            <h2>{phone.name}</h2>
        </div>
    );
};

export default Phone;