import React from "react";
import RecipeCard from "./recipe-card";
import {useSelector} from "react-redux";
import './index.css';

const RecipeList = () => {
    const recipeArray = useSelector(
        (state) => state.recipe);
    return(

            <div className="wrapper">
                {
                    recipeArray.map(recipe =>
                        <RecipeCard
                            key={recipe._id}
                            recipe={recipe}
                        />
                    )
                }
            </div>


    );
};
export default RecipeList;