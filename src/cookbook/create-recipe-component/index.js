import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {createRecipeThunk} from "../services/recipe-thunks";

import {Button, Card, Container, Form, ListGroupItem, Row} from "react-bootstrap";
import {useNavigate} from "react-router";

function CreateRecipe() {

    const { currentUser } = useSelector((state) => state.user);
    const [currentRecipe, setCurrentRecipe] = useState({author: currentUser?.username});
    const [ingredients, setIngredients] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;

        if (currentRecipe.title === "" || currentRecipe.title === undefined) {
            setErrors({...errors, title: "Title is required"});
            isValid = false;
        }

        if (currentRecipe.cuisine === "" || currentRecipe.cuisine === undefined) {
            setErrors({...errors, cuisine: "Cuisine is required"});
            isValid = false;
        }

        if (currentRecipe.prep_time === "" || currentRecipe.prep_time === undefined) {
            setErrors({...errors, prep_time: "Prep time is required"});
            isValid = false;
        }

        if (currentRecipe.cook_time === "" || currentRecipe.cook_time === undefined) {
            setErrors({...errors, cook_time: "Cook time is required"});
            isValid = false;
        }

        if (currentRecipe.process === "" || currentRecipe.process === undefined) {
            setErrors({...errors, process: "Cooking process is required"});
            isValid = false;
        }

        if (ingredients.length === 0) {
            isValid = false;
            alert("Add at least one ingredient");
        }
        return isValid;
    }

    const handleIngredientAdd = () => {
        if (currentIngredient && currentIngredient.name && currentIngredient.quantity) {
            let newIngredients = [...ingredients]
            newIngredients.push(currentIngredient)
            setIngredients(newIngredients)
            setCurrentIngredient({name:"", quantity:""})
        }
        else {
            alert("Add a new ingredient");
        }
    }

    const handleIngredientRemove = () => {
        if (ingredients.length > 0) {
            let newIngredients = [...ingredients]
            newIngredients.pop()
            setIngredients(newIngredients)
        }
    }

    const handleCreateRecipe = async (event) => {
        try {
            event.preventDefault();
            const isValid = validateForm();
            if (isValid){
                let changedRecipe = {
                    ...currentRecipe,
                    ingredients: [...ingredients],
                };
                setCurrentRecipe(changedRecipe);
                let createdRecipe = await dispatch(createRecipeThunk(changedRecipe)).unwrap();
                navigate(`/recipe/${createdRecipe._id}`);
            }
        } catch (e) {
            alert(e.message);
        }
    };

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center">
                    <Card className="shadow px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-center text-uppercase ">Create Recipe</h2>
                                <div className="mb-3">
                                    <Form onSubmit={handleCreateRecipe}>
                                        <Form.Group className="mb-3" controlId="username">
                                            <Form.Label className="text-center">
                                                Author Name
                                            </Form.Label>
                                            <Form.Control type="plaintext" value={currentUser.username} readOnly={true}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="title">
                                            <Form.Label className="text-center">
                                                Recipe Title
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Enter Recipe Title"
                                                          onChange={(event) => {
                                                              const changedRecipe = {
                                                                  ...currentRecipe,
                                                                  title: event.target.value,
                                                              };
                                                              setCurrentRecipe(changedRecipe);
                                                          }} isInvalid={!!errors.title}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.title}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="cuisine">
                                            <Form.Label className="text-center">
                                                Recipe Cuisine
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Enter Cuisine"
                                                          onChange={(event) => {
                                                              const changedRecipe = {
                                                                  ...currentRecipe,
                                                                  cuisine: event.target.value,
                                                              };
                                                              setCurrentRecipe(changedRecipe);
                                                          }} isInvalid={!!errors.cuisine}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.cuisine}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="prepTime">
                                            <Form.Label className="text-center">
                                                Prep Time (minutes)
                                            </Form.Label>
                                            <Form.Control type="number"
                                                          onChange={(event) => {
                                                              const changedRecipe = {
                                                                  ...currentRecipe,
                                                                  prep_time: event.target.value,
                                                              };
                                                              setCurrentRecipe(changedRecipe);
                                                          }} isInvalid={!!errors.prep_time}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.prep_time}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="cookTime">
                                            <Form.Label className="text-center">
                                                Cook Time (minutes)
                                            </Form.Label>
                                            <Form.Control type="number"
                                                          onChange={(event) => {
                                                              const changedRecipe = {
                                                                  ...currentRecipe,
                                                                  cook_time: event.target.value,
                                                              };
                                                              setCurrentRecipe(changedRecipe);
                                                          }} isInvalid={!!errors.cook_time}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.cook_time}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <div>
                                            <h6 className="fw-bold mb-3 text-uppercase">Ingredients</h6>
                                            {
                                                ingredients.map(
                                                    ingredient => (
                                                    <ListGroupItem>
                                                        {ingredient.name} : {ingredient.quantity}
                                                    </ListGroupItem>)
                                                )
                                            }
                                            <Form.Group controlId="ingredientName">
                                                <Form.Control type="text" placeholder="Ingredient Name"
                                                              value={currentIngredient?.name}
                                                              onChange={(event) => {
                                                                  const newIngredient = {
                                                                      ...currentIngredient,
                                                                      name: event.target.value,
                                                                  };
                                                                  setCurrentIngredient(newIngredient);
                                                              }}
                                                />
                                                <Form.Control type="text" placeholder="Ingredient Quantity"
                                                              value={currentIngredient?.quantity}
                                                              onChange={(event) => {
                                                                  const newIngredient = {
                                                                      ...currentIngredient,
                                                                      quantity: event.target.value,
                                                                  };
                                                                  setCurrentIngredient(newIngredient);
                                                              }}
                                                />
                                            </Form.Group>

                                            <div className="row-cols-2">
                                                <Button variant="primary mr-1" onClick={handleIngredientAdd}>
                                                    Add Ingredient
                                                </Button>
                                                <Button variant="danger mr-1" onClick={handleIngredientRemove}>
                                                    Remove Ingredient
                                                </Button>
                                            </div>


                                        </div>

                                        <Form.Group className="mb-3" controlId="process">
                                            <Form.Label className="text-center">
                                                Process
                                            </Form.Label>
                                            <Form.Control as="textarea" rows={10}
                                                          onChange={(event) => {
                                                              const changedRecipe = {
                                                                  ...currentRecipe,
                                                                  process: event.target.value,
                                                              };
                                                              setCurrentRecipe(changedRecipe);
                                                          }} isInvalid={!!errors.process}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.process}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                Create Recipe
                                            </Button>
                                        </div>
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
export default CreateRecipe
