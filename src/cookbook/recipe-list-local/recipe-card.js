import React from "react";
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router";
const RecipeCard = (
    {
        recipe
    }

) => {
    const navigate = useNavigate();
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img className="p-3" variant="top" src={`/images/${(recipe.image? recipe.image: "cooking.png")}`} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                    Written by: {recipe.author}
                </Card.Text>
                <Card.Text>
                    Cuisine: {recipe.cuisine}
                </Card.Text>
                <Button variant="primary m-1" onClick={() => {navigate(`/recipe/${recipe._id}`)}}>View Recipe</Button>
                {
                    (recipe.local_source &&
                        <Button variant="primary m-1" onClick={() => {navigate(`/profile/${recipe.author}`)}}>View Author</Button>)
                }
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;