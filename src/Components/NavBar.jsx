// import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex justify-center text-center'>
            <div className='p-5 text-white'>
                <div className='mt-20'>
                    <h1 className='text-5xl font-bold mb-1 text-yellow-500'>Chef Hub</h1>
                    <p className='text-3xl font-light mb-5'>Find Your <span className='text-yellow-300 font-semibold'>Chef</span> </p>
                </div>
                <div>
                    <Link to='/' className='mr-10 hover:text-yellow-500'>Home</Link>
                    <Link to='/blog' className='mr-10 hover:text-yellow-500'>Blog</Link>
                    <Link to='/register' className='mr-10 hover:text-yellow-500'>Register</Link>
                    <Link to='/login' className=' hover:text-yellow-500'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;