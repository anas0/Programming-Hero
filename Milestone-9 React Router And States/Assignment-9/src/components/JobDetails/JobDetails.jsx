import React, { useState } from 'react';
import { MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useLoaderData, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const JobDetails = () => {
    const {id} = useParams();
    const featuredJobs = useLoaderData();
    let featuredJob;
    
    if(featuredJobs){
        featuredJob = featuredJobs.find(job => job.id === id);
    }
    //console.log(featuredJob);
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, phone, email, address} = featuredJob;

    const applyNow = () => {
        let applyJob = [];
        const newApply = id;

        const appliedJob = localStorage.getItem('apply-job');
        
        if(appliedJob){
            const applied = JSON.parse(appliedJob);
            const isExist = applied.find(job => job === id);
            if(isExist){
                toast('Already applied in this job.')
                return;
            }
            applyJob = [...applied, newApply];
            localStorage.setItem('apply-job', JSON.stringify(applyJob));
        }
        else{
            applyJob.push(newApply);
            localStorage.setItem('apply-job', JSON.stringify(applyJob));
        }
    }
    
    return (
        <div className='mt-5'>
            <div className="bg-[url('vector.png')] bg-no-repeat bg-left p-24">
                <h2 className='text-3xl font-semibold text-center'>Job Details</h2>
            </div>
            <div className='grid grid-cols-3 gap-4  mx-20 md:mx-40 mb-20'>
                <div className='col-span-2'>
                    <p>
                        <strong>Job Description: </strong>
                        {job_description}
                    </p>
                    <p className='py-7'>
                        <strong>Job Responsibility: </strong>
                        {job_responsibility}
                    </p>
                    <p><strong>Educational Requirements:</strong></p>
                    <p>{educational_requirements}</p>
                    <p className='pt-7'><strong>Experiences:</strong></p>
                    <p>{experiences}</p>
                </div>
                <div className='bg-slate-100 rounded-sm p-7 shadow-md'>
                    <p className='border-b  border-slate-300 pb-2'><strong>Job Details</strong></p>
                    <p className='mt-3 flex items-center content-center'>
                        <CurrencyDollarIcon className="h-4 w-4  text-purple-400 mr-2" />
                        <strong>Salary : </strong> {salary}
                    </p>
                    <p className='flex items-center content-center'>
                        <BriefcaseIcon className="h-4 w-4  text-purple-400 mr-2" />
                        <strong>Job Title : </strong> {job_title}
                    </p>

                    <p className='mt-3 border-b  border-slate-300 pb-2'><strong>Contact Information</strong></p>
                    <p className='mt-3 flex items-center content-center'>
                        <PhoneIcon className="h-4 w-4  text-purple-400 mr-2" />
                        <strong>Phone : </strong> {phone}
                    </p>
                    <p className='flex items-center content-center'>
                        <EnvelopeIcon className="h-4 w-4  text-purple-400 mr-2" />
                        <strong>Email : </strong> {email}
                    </p>
                    <p className='flex items-center content-center'>
                        <MapPinIcon className="h-4 w-4  text-purple-400 mr-2" />
                        <strong>Address : </strong> {address}
                    </p>

                    <a onClick={applyNow} className="mt-10 w-full btn border-none font-semibold bg-gradient-to-r from-violet-400 to-violet-600">Apply Now</a>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;