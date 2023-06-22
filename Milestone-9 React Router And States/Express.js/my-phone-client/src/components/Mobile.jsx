import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Mobile = () => {
    console.log('anas');
    const mobile = useLoaderData();
    console.log(mobile);
    return (
        <div>
            <h2>{mobile.name}</h2>
            <img src={mobile.image} alt="" />
        </div>
    );
};

export default Mobile;