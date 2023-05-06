import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex bg-red-100 items-center justify-around p-5'>
            <div>
                <h1 className='text-xl font-bold'>Chef Hub</h1>
                <p className='text-xl font-light'>Find Your Chef</p>
            </div>
            <div>
                <Link to='/' className='mr-4'>Home</Link>
                <Link to='/blog' className='mr-4'>Blog</Link>
                <Link to='/register' className='mr-4'>Register</Link>
                <Link to='/login' className='mr-4'>Login</Link>
            </div>

        </div>
    );
};

export default NavBar;