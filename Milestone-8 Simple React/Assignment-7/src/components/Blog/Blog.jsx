import React from 'react';

const Blog = ({blog, handleReadTime, handleBookmarked}) => {
    const {img, title, writer, publish_in, read_time, hashtag, url} = blog;
    
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={url} />
                                </div>
                            </div>
                            <div className='ml-5 text-left'>
                                <span className='block font-bold'>{writer}</span>
                                <span className='block text-xs text-gray-400 font-semibold'>{publish_in}</span>
                            </div>
                        </div>
                        <div className='flex gap-2 text-gray-500 text-sm'>
                            <span>{read_time} min read</span>
                            <a onClick={ ()=> handleBookmarked(title)} className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-left md:pr-28">{title}</h2>
                    <p className='text-left py-3'>
                        {
                            hashtag.map(tag => <span className='mr-2'>#{tag}</span>)
                        }
                    </p>
                    <a onClick={ () => handleReadTime(read_time)} className='text-left text-blue-900 underline cursor-pointer'>Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;