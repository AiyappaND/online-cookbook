import {useParams} from "react-router-dom";
import {findOneRecipeThunk} from "../services/recipe-thunks";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {createOrUpdateBookmarkThunk, getBookmarkThunk} from "../services/bookmark-thunks";

function ViewRecipe() {
    const params  = useParams();
    const { currentUser } = useSelector((state) => state.user);
    const [bookmarkList, setBookmarkList] = useState({});
    const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
    const recipeId = params.rid;
    const dispatch = useDispatch();
    const [recipeToView, setRecipeToView] = useState({});

    useEffect( () => {
        const fetchRecipeData = async () => {
            const { payload } = await dispatch(findOneRecipeThunk(recipeId));
            setRecipeToView(payload);
        }
        fetchRecipeData();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        const fetchBookmarks = async () => {
            if (currentUser?.isPremium) {
                const { payload } = await dispatch(getBookmarkThunk(currentUser?.username));
                setBookmarkList(payload)
                const bookmarkIds = (bookmarkList?.bookmarks?.map(bookmark => bookmark.recipeId));
                setBookmarkedRecipes(bookmarkIds)
            }
        }
        fetchBookmarks();
        // eslint-disable-next-line
    }, [recipeToView]);

    const addToBookmarks = async () => {
        const newBookMarkedList = [...bookmarkedRecipes, recipeToView._id];
        setBookmarkedRecipes(newBookMarkedList);
        const newBookmarkData = [...bookmarkList.bookmarks, {recipeId: recipeId, isLocal: true}];
        const bookMarkDataToUpdate = {...bookmarkList, bookmarks: newBookmarkData}
        const { payload } = await dispatch(createOrUpdateBookmarkThunk(bookMarkDataToUpdate));
        setBookmarkList(payload);
    }

    const removeFromBookmarks = async () => {
        const newBookMarkedList = bookmarkedRecipes.filter(bookmark => bookmark !== recipeId)
        setBookmarkedRecipes(newBookMarkedList);
        const newBookmarkData = bookmarkList.bookmarks.filter(bookmark => bookmark.recipeId !== recipeId)
        const bookMarkDataToUpdate = {...bookmarkList, bookmarks: newBookmarkData}
        const { payload } = await dispatch(createOrUpdateBookmarkThunk(bookMarkDataToUpdate));
        setBookmarkList(payload);
    }



    return(
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center">
                    <Card className="shadow px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">View Recipe</h2>
                                <div className="mb-3">
                                    <Row className="mb-3 text-center">
                                        Author: {recipeToView.author}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Title: {recipeToView.title}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Cuisine: {recipeToView.cuisine}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Prep Time: {recipeToView.prep_time}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Cook Time: {recipeToView.cook_time}
                                    </Row>
                                    <div>
                                        <Row className="fw-bold mb-1">Ingredients</Row>
                                        {
                                            recipeToView?.ingredients?.map(
                                                ingredient => (
                                                    <Row className="mb-2">
                                                        {ingredient.name} : {ingredient.quantity}
                                                    </Row>)
                                            )
                                        }
                                    </div>

                                    <Row className="mb-3 text-center fw-bold">
                                        Process
                                    </Row>

                                    <Form>
                                        <Form.Group className="mb-3" controlId="process">
                                            <Form.Control as="textarea" rows={10} value={recipeToView.process} readOnly={true}/>
                                        </Form.Group>
                                        {
                                            currentUser && !bookmarkedRecipes?.includes(recipeToView._id) && (
                                                <div className="d-grid">
                                                    <Button variant="primary" onClick={addToBookmarks}>
                                                        Bookmark Recipe
                                                    </Button>
                                                </div>
                                            )
                                        }
                                        {
                                            currentUser && bookmarkedRecipes?.includes(recipeToView._id) && (
                                                <div className="d-grid">
                                                    <Button variant="primary" onClick={removeFromBookmarks}>
                                                        Remove from bookmarks
                                                    </Button>
                                                </div>
                                            )
                                        }
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}
export default ViewRecipe
