import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);
    let jobs;

    useEffect( ()=>{
        fetch('featured-jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));
    }, []);
    
    if(!showAll){
        jobs = featuredJobs.slice(0, 4);
    }else{
        jobs = [...featuredJobs];
    }

    return (
        <div>
            <div className="text-center mt-16">
                <h3 className='text-4xl font-bold'>Featured Jobs</h3>
                <p className='my-10 text-gray-500 text-sm mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 my-16 gap-3'>
                {
                    jobs.map(featuredJob => <FeaturedJob
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    ></FeaturedJob>)
                }       
            </div>

            <div className={`text-center py-10 ${showAll && 'hidden'}`}>
                <a onClick={ ()=> setShowAll(true)} className="btn border-none text-xs font-semibold bg-gradient-to-r from-violet-400 to-violet-600">See All Jobs</a>
            </div>
        </div>
    );
};

export default FeaturedJobs;