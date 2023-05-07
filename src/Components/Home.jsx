// import React, { useEffect, useState } from 'react';
import ChefTest from './ChefTest';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);
    return (
        <div className="grid grid-cols-2 gap-5 container px-64 mt-32">
            
            {
                chefs.map(chef => <ChefTest key={chef._id} chef={chef}></ChefTest> )
            }


        </div>
    );
};

export default Home;