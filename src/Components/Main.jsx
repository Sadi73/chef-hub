// import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

// style={{ backgroundImage: "url('./public/veg.jpg')" }}
const Main = () => {
    return (
        <div>
            <div      className='min-w-screen min-h-screen bg-[url("./public/veg.jpg")] bg-fixed'  >
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;