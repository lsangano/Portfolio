import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav className='navbar'>
            <span className="navbar-brand mb-0 h1"> </span>
            <ul className="nav justify-content-end">
                <Link className="fas fa-home highlight-me icon-link" to="/"></Link>
                <a className="fab fa-github highlight-me icon-link" href="https://github.com/lsangano"></a>
                <a className="fab fa-linkedin highlight-me icon-link" href="https://www.linkedin.com/in/laeticiandutiye-733149a/"></a>
            </ul>
        </nav>
        )
}


export default Navbar