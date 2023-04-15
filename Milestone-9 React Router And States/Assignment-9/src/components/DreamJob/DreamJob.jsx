import React from 'react';

const DreamJob = () => {
    return (
        <div className='lg:flex'>
            <div className='lg:w-6/12 my-10 pr-14 lg:pr-28'>
                <h1 className='text-6xl font-semibold'>One Step Closer To Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-500'>Dream Job</span></h1>
                <p className='my-10 text-gray-500 text-sm'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <a className="btn border-none font-semibold bg-gradient-to-r from-violet-400 to-violet-600">Get Started</a>
            </div>
            <div className='lg:w-6/12'>
                <img src="man.png" alt="" />
            </div>
        </div>
    );
};

export default DreamJob;