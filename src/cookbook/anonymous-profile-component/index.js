import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {anonymousProfileThunk}
    from "../services/auth-thunks";
import {Card, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import {getBookmarkThunk} from "../services/bookmark-thunks";
import {getRecipesByAuthorUsernameThunk} from "../services/recipe-thunks";
import RecipeCard from "../recipe-list-local/recipe-card";

function AnonymousProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const { latestRecipeList } = useSelector((state) => state.recipeData);
    const navigate = useNavigate();
    const params  = useParams();
    const [profile, setProfile] = useState({});
    const [authoredRecipes, setAuthoredRecipes] = useState([]);
    const [bookmarks, setBookmarks] = useState({});
    const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
    const dispatch = useDispatch();
    const username = params.username;

    useEffect( () => {
        const fetchProfileData = async () => {
            const { payload } = await dispatch(anonymousProfileThunk(username));
            if (!payload) {
                alert("Profile does not exist on this platform!")
                navigate("/")
            }
            setProfile(payload);
        }
        fetchProfileData();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        const fetchAuthoredRecipes = async () => {
            if (profile.isAuthor) {
                const { payload }  = await dispatch(getRecipesByAuthorUsernameThunk(username));
                setAuthoredRecipes(payload);
            }
        }
        fetchAuthoredRecipes();
        // eslint-disable-next-line
    }, [profile]);

    useEffect( () => {
        const fetchBookmarks = async () => {
            if (currentUser?.isPremium) {
                const { payload } = await dispatch(getBookmarkThunk(username));
                setBookmarks(payload)
                const bookmarkIds = (bookmarks?.bookmarks.map(bookmark => bookmark.recipeId));
                setBookmarkedRecipes(latestRecipeList.filter(recipe => bookmarkIds.includes(recipe._id)));
            }
        }
        fetchBookmarks();
        // eslint-disable-next-line
    }, [profile]);

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center">
                    <Card className="shadow px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">User Profile</h2>
                                <div className="mb-3">
                                    <Row className="mb-3 text-center fw-bold">
                                        Username: {profile.username}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        First Name: {profile.firstName}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Last Name: {profile.lastName}
                                    </Row>
                                </div>
                            </div>
                            <div className="row center align-items-center">
                                <Row className="mb-3 fw-bold text-center">
                                    Recipes Authored
                                </Row>
                                <div className="col-4">
                                    {
                                        profile.isAuthor && (
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
                                        )
                                    }
                                </div>
                            </div>
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
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}
export default AnonymousProfileScreen;
