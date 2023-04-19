import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
const RecipeCard = (
    {
        recipe= {
            "image": "pizza.jpg",
            "title": "Margherita Pizza",
            "url" :"/"
        }
    }

) => {
    return(
        <Link to={`${recipe.url}`}>
        <Card style={{ width: '18rem'}}>
            <Card.Img style={{width: '18rem', height: '18rem'}} variant="top" src={`/images/${recipe.image}`} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
            </Card.Body>
        </Card>
        </Link>
    );
};

export default RecipeCard;