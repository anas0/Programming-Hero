import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <div className="bg-[url('vector.png')] bg-no-repeat bg-left p-24">
                <h2 className='text-3xl font-semibold text-center'>Blog</h2>
            </div>
            <div className='mx-20 md:mx-40 mb-20'>
                <div className='card text-left my-5'>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            When to use context api?
                        </div>
                        <div className="collapse-content"> 
                            <p>Context api is to allow your components to access global data and re-render when that global data is changed.</p>
                        </div>
                    </div>
                    <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is custom hook?
                        </div>
                        <div className="collapse-content"> 
                            <p>Custom hook is a JavaScript function which we create by ourselves  whose name starts with 'use' and can be used to call other hooks.</p>
                        </div>
                    </div>
                    <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is useRef?
                        </div>
                        <div className="collapse-content"> 
                            <p>useRef is a react hook used in a function which takes a maximum of one argument and returns an Object.</p>
                        </div>
                    </div>
                    <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is useMemo?
                        </div>
                        <div className="collapse-content"> 
                            <p>useMemo is a react hook used in the functional component of react that returns a memoized value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;