import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import RecipeCard from "../recipe-list-local/recipe-card";
import {findLocalRecipesByNameThunk, findRemoteRecipesByNameThunk} from "../services/recipe-thunks";

const SearchResults = () => {
    const params  = useParams();
    const searchTerm = params.searchTerm;
    const dispatch = useDispatch();
    const [localRecipes, setLocalRecipes] = useState([]);
    const [remoteApiRecipes, setRemoteApiRecipes] = useState([]);

    useEffect( () => {
        const fetchLocalRecipesBySearchTerm = async () => {
            const { payload }  = await dispatch(findLocalRecipesByNameThunk(searchTerm));
            setLocalRecipes(payload);
        }
        fetchLocalRecipesBySearchTerm();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        const fetchRemoteRecipesBySearchTerm = async () => {
            const { payload }  = await dispatch(findRemoteRecipesByNameThunk(searchTerm));
            setRemoteApiRecipes(payload);
        }
        fetchRemoteRecipesBySearchTerm();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="row">
                <p/>
            </div>
            <div className="row center align-items-center">
                <h1 className="text-center">Search Results</h1>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <p/>
            </div>

            <div className="row center align-items-center">
                <h3 className="text-center">Recipes Found Locally</h3>
                <div className="col-4">
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
                </div>
            </div>

            <div className="row center align-items-center">
                <h3 className="text-center">Recipes Found From Other Sources</h3>
                <div className="col-4">
                    {
                        <div className="wrapper">
                            {
                                remoteApiRecipes.map(recipe =>
                                    <RecipeCard
                                        key={recipe._id}
                                        recipe={recipe}
                                    />
                                )
                            }
                        </div>
                    }
                </div>
            </div>

        </>
    );
}

export default SearchResults;