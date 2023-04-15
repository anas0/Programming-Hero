import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobCategorys = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect( ()=>{
        fetch('job-category.json')
            .then(res => res.json())
            .then(data => setCategorys(data));
    }, []);

    return (
        <div>
            <div className="text-center mt-16">
                <h3 className='text-4xl font-bold'>Job Category List</h3>
                <p className='my-10 text-gray-500 text-sm mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 my-16'>
                {
                    categorys.map(category => <JobCategory
                        key={category.id}
                        category={category}
                    ></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategorys;