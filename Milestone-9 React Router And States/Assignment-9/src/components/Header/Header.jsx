import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mx-20 md:mx-40 py-3'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/statistics'
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/applied-jobs'
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                    <p className="font-bold normal-case text-2xl">workCenter</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/statistics'
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/applied-jobs'
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-none font-semibold bg-gradient-to-r from-violet-400 to-violet-600">Star Applying</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;