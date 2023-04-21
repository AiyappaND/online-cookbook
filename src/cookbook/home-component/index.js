import React, {useEffect, useState} from "react";
import RecipeListLocal from "../recipe-list-local";
import {Row} from "react-bootstrap";
import RecipeCard from "../recipe-list-local/recipe-card";
import {getRecipesByAuthorUsernameThunk} from "../services/recipe-thunks";
import {getBookmarkThunk} from "../services/bookmark-thunks";
import {useDispatch, useSelector} from "react-redux";

function Home() {
    const { currentUser } = useSelector((state) => state.user);
    const { latestRecipeList } = useSelector((state) => state.recipeData);
    const [authoredRecipes, setAuthoredRecipes] = useState([]);
    const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
    const dispatch = useDispatch();

    useEffect( () => {
        const fetchBookmarks = async () => {
            if (currentUser?.isPremium) {
                const { payload } = await dispatch(getBookmarkThunk(currentUser.username));
                const bookmarkIds = (payload?.bookmarks?.map(bookmark => bookmark.recipeId));
                const newBookmarkedRecipes = latestRecipeList.filter(recipe => bookmarkIds?.includes(recipe._id));
                setBookmarkedRecipes([...newBookmarkedRecipes]);
            }
        }
        fetchBookmarks();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        const fetchAuthoredRecipes = async () => {
            if (currentUser?.isAuthor) {
                const { payload }  = await dispatch(getRecipesByAuthorUsernameThunk(currentUser.username));
                setAuthoredRecipes(payload);
            }
        }
        fetchAuthoredRecipes();
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
            {
                currentUser?.isAuthor && (
                    <div className="row center align-items-center">
                        <Row className="mb-3 fw-bold text-center">
                            Recipes Authored
                        </Row>
                        <div className="col-4">
                            <div className="wrapper">
                                {
                                    authoredRecipes.map(recipe =>
                                        <RecipeCard
                                            key={recipe._id}
                                            recipe={recipe}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }

            {
                currentUser?.isPremium && (
                    <div className="row center align-items-center">
                        <Row className="mb-3 fw-bold text-center">
                            Recipes Bookmarked
                        </Row>
                        <div className="col-4">
                            {
                                <div className="wrapper">
                                    {
                                        bookmarkedRecipes.map(recipe =>
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
                )
            }

        </>
    );
}
export default Home
