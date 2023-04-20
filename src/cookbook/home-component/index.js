import React, {useEffect} from "react";
import RecipeListLocal from "../recipe-list-local";
import {useDispatch} from "react-redux";
import {getLatestRecipesThunk} from "../services/recipe-thunks";

function Home() {
    const dispatch = useDispatch();

    useEffect( () => {
        const fetchLatestRecipes = async () => {
            await dispatch(getLatestRecipesThunk()).unwrap();
        }
        fetchLatestRecipes();
        // eslint-disable-next-line
    }, []);

    return(
        <>
            <div className="row">
                <p/>
            </div>
            <div className="row center align-items-center">
                <h1 className="text-center">Welcome! Come join our community of recipes!</h1>
                <div className="col-2"></div>
                <div className="col">
                    <div className="input-group">
                        <input type="search" className="form-control rounded" placeholder="What recipe are you looking for?" aria-label="Search"
                                   aria-describedby="search-addon"/>
                        <button type="button" className="btn btn-outline-danger">search</button>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <p/>
            </div>

            <div className="row center align-items-center">
                <h1>
                    Latest Recipes
                </h1>
            </div>
            <div className="row center align-items-center">
                <div className="col-4">
                    <RecipeListLocal></RecipeListLocal>
                </div>
            </div>
        </>
    );
}
export default Home
