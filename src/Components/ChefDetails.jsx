// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
    const { chefID } = useParams();
    const chefs = useLoaderData();
    // console.log(chefs)

    const chef = chefs.find(c => c._id === chefID);
    // console.log(chef);
    const { name, picture, experience, number_of_recipes, likes, recipes } = chef;
    console.log(recipes);
    return (
        <div>
            <div className="flex w-1/2 mx-auto justify-between rounded-md border border-2">
                <img className="w-96" src={picture} alt="" />
                <div className="flex justify-center items-center">
                    <div className="text-3xl text-white">
                        <h1>{name}</h1>
                        <p>Experience: {experience}</p>
                        <p>Number of Recipes: {number_of_recipes}</p>
                        <p>Likes: {likes}</p>

                    </div>
                </div>

            </div>
            <div className="flex w-4/5 mx-auto gap-10 mt-32">
                {
                    recipes.map(recipe =>
                        <div key={recipe.name} className="flex">
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={recipe.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{recipe.name}</h2>
                                   {
                                    recipe.ingredients.map(x => <li key={x}>{x}</li>)
                                   }
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary absolute bottom-0">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ChefDetails;