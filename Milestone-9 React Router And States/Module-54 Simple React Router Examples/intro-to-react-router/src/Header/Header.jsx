import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to="friends">Friends</Link>
            <ActiveLink to={"/about"}>About</ActiveLink>
            <Link to={"/contact"}>Contact</Link>
        </nav>
    );
};

export default Header;