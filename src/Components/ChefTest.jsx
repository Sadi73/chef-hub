// import React from 'react';

import { Link } from "react-router-dom";

const ChefTest = ({chef}) => {
    // console.log(chef);
    const {_id, name, picture, experience, number_of_recipes, likes} = chef;
    // const handleButton = (id) => {
    //     console.log('button clicked', id);
    // }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img className="w-64 h-72" src={picture} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Experience: {experience}</p>
                    <p>Number of Recipes: {number_of_recipes}</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chef/${_id}`}><button className="btn btn-primary">View Recipe</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefTest;