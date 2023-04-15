import React, { useEffect, useState } from 'react';

const Read = ({readTime, bookMarked}) => {
    const [time, setTime] = useState(readTime);
    const [read, setRead] = useState(bookMarked);
    //console.log(bookMarked);

    useEffect( ()=>{
        const getReadTime = JSON.parse(localStorage.getItem('readTime'));
        setTime(getReadTime);
    }, [readTime]);

    useEffect( ()=>{
        const getReadTime = JSON.parse(localStorage.getItem('bookMarked'));
        setRead(getReadTime);
    }, [bookMarked]);

    return (
        <div className='sticky top-4'>
            <div className='w-full'>
                <h2 className='text-lg font-semibold text-blue-700 p-2 border border-blue-900 rounded bg-blue-50'>Spent time on read : {time? time : 0} min</h2>
                <div className="bg-slate-100 p-2 text-left mt-5 rounded-sm">
                    <h2 className="text-lg font-semibold">Bookmarked Blogs : {read ? read.length : 0}</h2>
                    {
                        read?.map(book => <p className='mt-2 text-sm md:text-xs font-bold text-gray-600 bg-white rounded p-2'>{book}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Read;