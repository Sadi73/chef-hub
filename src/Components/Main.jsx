// import React from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from './Footer';
import NavBar from './NavBar';


const Main = () => {
    return (
        <div className='min-w-screen min-h-screen ' style={{backgroundImage:"url('./public/veg.jpg')"}}>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;