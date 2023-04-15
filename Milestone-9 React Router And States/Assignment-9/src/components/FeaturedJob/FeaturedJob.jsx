import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeaturedJob = ({featuredJob}) => {
    const {id, job_title, company_name, img, job_location, job_type, address, salary} = featuredJob;

    return (
        <div className='mx-auto lg:mx-0 bg-slate-50 shadow border border-gray-100 rounded p-5'>
            <img className='w-40' src={img} alt="" />
            <h4 className='text-base font-semibold mt-3'>{job_title}</h4>
            <p className='mb-3 text-gray-500 text-xs mt-2'>{company_name}</p>
            <div className='flex gap-2'>
                <p className='border border-purple-500 rounded py-1 px-2 w-fit text-xs text-purple-500'>{job_location}</p>
                <p className='border border-purple-500 rounded py-1 px-2 w-fit text-xs text-purple-500'>{job_type}</p>
            </div>
            <div className='flex gap-3 py-3'>
                <p className='flex mb-3 text-gray-500 text-xs mt-2 gap-1'>
                    <MapPinIcon className="h-4 w-4" />
                    <span>{address}</span>
                </p>
                <p className='flex mb-3 text-gray-500 text-xs mt-2 gap-1'>
                    <CurrencyDollarIcon className="h-4 w-4" />
                    <span>Salary : {salary}</span>
                </p>
            </div>
            <Link to={`/job-details/${id}`} className="btn border-none text-xs font-semibold bg-gradient-to-r from-violet-400 to-violet-600">View Details</Link>
        </div>
    );
};

export default FeaturedJob;