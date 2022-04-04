import { useState } from 'react';

function MyRecipesComponent({label, image, calories, ingredients, cuisine}) { 
    const [details, setDetails] = useState(true);
    const handleClick = () => {
        setDetails(!details);
    }
    
    return(
    <div className="list">
        <h2>{label}</h2>
        <ul>{cuisine.map((cuisine, index) => (
            <li key={index}>cuisine: {cuisine}</li>

        ))}</ul>
        <p>{calories.toFixed()} Kcal</p> 
        <img src={image} className="image" alt="food"/>
        <button onClick={()=> handleClick()} className="ingredientsBtn">Ingredients</button>
        {details? ("") : (
            <div id='ingredientsDetails'>
                <div className="ingredientsDetails">
                <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                ))}
        </ul>
                    </div>
                </div>
        )}
        
    </div>)
}
export default MyRecipesComponent;