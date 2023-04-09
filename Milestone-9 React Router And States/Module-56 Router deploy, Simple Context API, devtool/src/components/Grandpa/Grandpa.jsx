import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('Gold');

const Grandpa = () => {
    const ring = 'Diamond';
    
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <RingContext.Provider value="Golden">
                <section className='flex'>
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;