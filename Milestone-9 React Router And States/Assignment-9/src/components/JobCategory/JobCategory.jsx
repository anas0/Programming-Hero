import React from 'react';

const JobCategory = ({category}) => {
    const {picture, category_name, jobs} = category;
    //console.log(category);
    
    return (        
        <div className='mx-auto lg:mx-0'>
            <img className='w-12' src={picture} alt="" />
            <h4 className='text-base font-semibold mt-3'>{category_name}</h4>
            <p className='my-10 text-gray-500 text-xs mt-2'>{jobs} Jobs Available</p>
        </div>
        
    );
};

export default JobCategory;