import React, { useEffect, useState } from 'react';
import ChefTest from './ChefTest';


const Home = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('/public/chef_data.json')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className="grid grid-cols-2 gap-5 container px-64 mt-32">
            
            {
                chefs.map(chef => <ChefTest key={chef._id} chef={chef}></ChefTest> )
            }


        </div>
    );
};

export default Home;