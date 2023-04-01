import React from 'react';

const Question = () => {
    return (
        <div className='card text-left my-5'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between props and state.
                </div>
                <div className="collapse-content"> 
                    <p>Props are immutable which is read only on the other hand state is mutable which can change.</p>
                    <p>Props can be accessed by the child component the other hand state cannot be accessed by child components.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does useState work?
                </div>
                <div className="collapse-content"> 
                    <p>useState is a react hook which allow us to track state in function component.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is useEffect work other then load data?
                </div>
                <div className="collapse-content"> 
                    <p>useEffect use to run code when a state change or a props change.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does react work?
                </div>
                <div className="collapse-content"> 
                    <p>React is a javascript library which halp build dynamic user interactive website. React is component based means you create component tree which halp you to organize your code.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;