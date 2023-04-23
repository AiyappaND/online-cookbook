import React from "react";
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router";
const RecipeCard = (
    {
        recipe,
        searchTerm = ""
    }

) => {
    const navigate = useNavigate();
    return(
        <Card className="mb-2" style={{ width: '18rem' }}>
            {
                (recipe.local_source &&
                    <Card.Img className="p-3" variant="top" src={`/images/${(recipe.image? recipe.image: "cooking.png")}`} />
                )
            }
            {
                (!recipe.local_source &&
                    <Card.Img className="p-3" variant="top" src={recipe.image? recipe.image: "/images/cooking.png"} />
                )
            }
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                {
                    (recipe.local_source &&
                        <Card.Text>
                            Written by: {recipe.author}
                        </Card.Text>
                    )
                }

                {
                    (recipe.local_source &&
                        <Card.Text>
                            Cuisine: {recipe.cuisine}
                        </Card.Text>
                    )
                }
                {
                    (recipe.local_source &&
                        <Button variant="primary m-1" onClick={() => {navigate(`/recipe/${recipe._id}`)}}>View Recipe</Button>)
                }
                {
                    (!recipe.local_source &&
                        <Button variant="primary m-1" onClick={() => {navigate(`/remoteRecipe/${searchTerm}/${recipe.id}`)}}>View Recipe</Button>)
                }
                {
                    (recipe.local_source &&
                        <Button variant="primary m-1" onClick={() => {navigate(`/profile/${recipe.author}`)}}>View Author</Button>)
                }
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;