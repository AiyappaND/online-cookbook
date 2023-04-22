import {useParams} from "react-router-dom";
import {findLocalRecipesByNameThunk, findRemoteRecipesByIdThunk} from "../services/recipe-thunks";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Card, Container, Form, Row} from "react-bootstrap";
import RecipeCard from "../recipe-list-local/recipe-card";

function ViewRemoteRecipe() {
    const params  = useParams();
    const recipeId = params.rid;
    const searchTerm = params.searchTerm;
    const dispatch = useDispatch();
    const [recipeToView, setRecipeToView] = useState({});
    const [localRecipes, setLocalRecipes] = useState([]);

    useEffect( () => {
        const fetchRecipeData = async () => {
            const { payload } = await dispatch(findRemoteRecipesByIdThunk(recipeId));
            setRecipeToView(payload);
        }
        fetchRecipeData();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        const fetchLocalRecipesBySearchTerm = async () => {
            const { payload }  = await dispatch(findLocalRecipesByNameThunk(searchTerm));
            setLocalRecipes(payload);
        }
        fetchLocalRecipesBySearchTerm();
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
                                        Title: {recipeToView.title}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Source: {recipeToView.sourceName}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Time required: {recipeToView.readyInMinutes}
                                    </Row>
                                    <Row className="mb-3 text-center">
                                        Servings: {recipeToView.servings}
                                    </Row>
                                    <div>
                                        <Row className="fw-bold mb-1">Ingredients</Row>
                                        {
                                            recipeToView?.extendedIngredients?.map(
                                                ingredient => (
                                                    <Row className="mb-2">
                                                        {ingredient.name} : {ingredient.amount} {ingredient.unit}
                                                    </Row>)
                                            )
                                        }
                                    </div>
                                    {
                                        (recipeToView?.instructions && (
                                            <>
                                                <Row className="mb-3 text-center fw-bold">
                                                    Instructions
                                                </Row>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="process">
                                                        <Form.Control as="textarea" rows={10} value={(recipeToView.instructions? recipeToView.instructions: recipeToView.summary)} readOnly={true}/>
                                                    </Form.Group>
                                                </Form>
                                            </>
                                        ) )
                                    }
                                    {
                                        (!recipeToView?.instructions && recipeToView?.summary) && (
                                            <>
                                                <Row className="mb-3 text-center fw-bold">
                                                    Summary
                                                </Row>
                                                <p className="mb-3">
                                                    {recipeToView.summary}
                                                </p>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="mb-0  text-center">
                                    View full recipe from source{" "}
                                    <a href={recipeToView.sourceUrl} className="text-primary fw-bold">
                                        View
                                    </a>
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <div className="row center align-items-center m-3">
                <h3 className="text-center">Similar Recipes From Our Database</h3>
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
        </div>
    );
}
export default ViewRemoteRecipe
