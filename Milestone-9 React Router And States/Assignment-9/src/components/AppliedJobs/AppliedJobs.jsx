import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');
    const featuredJobs = useLoaderData();
    //console.log(featuredJobs.id);
    let appliedJob = [];

    useEffect(()=>{
        const storedJob = localStorage.getItem('apply-job');
        if(storedJob){
            const applied = JSON.parse(storedJob);
            
            for(const data of applied){
                const job = featuredJobs.filter(jobs => jobs.id === data);
                appliedJob.push(...job);
            }
            if(filter === "Remote" || filter === "Onsite"){
                const job = appliedJob?.filter(jobs => jobs.job_location == filter);
                appliedJob = [];
                appliedJob.push(...job);
            }
            setJobs(appliedJob);
        }        
    }, [filter]);
    
    return (
        <div className='mt-5'>
            <div className="bg-[url('vector.png')] bg-no-repeat bg-left p-24">
                <h2 className='text-3xl font-semibold text-center'>Applied Jobs</h2>
            </div>
            <div className='mx-20 md:mx-40 my-14'>
                <div className='flow-root'>
                    <select value={filter} onChange={e => setFilter(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 float-right">
                        <option defaultValue>Filter By</option>
                        <option>All</option>
                        <option>Remote</option>
                        <option>Onsite</option>
                    </select>
                </div>                
                {
                    jobs.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;