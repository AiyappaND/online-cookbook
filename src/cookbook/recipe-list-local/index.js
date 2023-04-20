import React, {useEffect, useState} from "react";
import RecipeCard from "./recipe-card";
import './index.css';
import {useDispatch} from "react-redux";
import {getLatestRecipesThunk} from "../services/recipe-thunks";

const RecipeListLocal = () => {
    const dispatch = useDispatch();
    const [localRecipes, setLocalRecipes] = useState([])

    useEffect( () => {
        const fetchLatestRecipes = async () => {
            const payload = await dispatch(getLatestRecipesThunk()).unwrap();
            setLocalRecipes(payload)
        }
        fetchLatestRecipes();
        // eslint-disable-next-line
    }, []);
    return(
            <div className="wrapper">
                {
                    localRecipes.map(recipe =>
                        <RecipeCard
                            key={recipe._id}
                            recipe={recipe}
                        />
                    )
                }
            </div>
    );
};
export default RecipeListLocal;