import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const angti = useContext(RingContext);
    
    return (
        <div>
            <h3>Friend</h3>
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default Friend;