import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogs, handleReadTime, handleBookmarked}) => {
    //console.log(blogs);
    return (
        <div>
            {
                blogs.map(blog => 
                <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleReadTime={handleReadTime}
                    handleBookmarked={handleBookmarked}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;