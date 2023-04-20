import React from "react";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
const RecipeCard = (
    {
        recipe
    }

) => {
    const navigate = useNavigate();
    return(

        <Card style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={`/images/${(recipe.image? recipe.image: "cooking.png")}`} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                    Written by: {recipe.author}, Cuisine: {recipe.cuisine}
                </Card.Text>
                <Button variant="primary" onClick={() => {navigate(`recipe/${recipe._id}`)}}>View Recipe</Button>
            </Card.Body>
        </Card>

        // <Link to={`recipe/${recipe._id}`}>
        // <Card style={{ width: '18rem'}}>
        //     <Card.Img style={{width: '16rem', height: '16rem'}} src={`/images/${(recipe.image? recipe.image: "cooking.png")}`} />
        //     <Card.Body>
        //         <Card.Title>{recipe.title}</Card.Title>
        //     </Card.Body>
        // </Card>
        // </Link>
    );
};

export default RecipeCard;