import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <p className="text-3xl font-bold">Knowledge Cafe</p>
            </div>
            <div className="flex-none gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/11908236?s=400&u=75a3236795822893dba62429987309392a52776d&v=4" />
                </div>
                </label>
            </div>
        </nav>
    );
};

export default Navbar;