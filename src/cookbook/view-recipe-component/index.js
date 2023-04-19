import {useParams} from "react-router-dom";
import {findOneRecipeThunk} from "../services/recipe-thunks";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Container, Form, Row} from "react-bootstrap";

function ViewRecipe() {
    const params  = useParams();
    const { currentUser } = useSelector((state) => state.user);
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
                                            currentUser && currentUser.isPremium && (
                                                <div className="d-grid">
                                                    <Button variant="primary">
                                                        Bookmark Recipe
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
