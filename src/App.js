import './App.css';
import { useEffect, useState } from "react";
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "50d36c25";
  const MY_KEY = "39da11c90fdbc872ab559e8b1f7518c7";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);   
  const [wordSubmitted, setWordSubmitted] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    fetchData()
  }, [wordSubmitted])
    

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }
  const finalSearch =(e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }
  return (
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          </video>
          <h1>Find Your Recipe</h1>
        </div>
      
        <div className='container'>
          <form onSubmit={finalSearch}>
            <input className='search' placeholder='Type any ingredients...' onChange={myRecipeSearch} value={mySearch}>
            </input>
          </form>
          <button onClick={finalSearch}>Search</button>
          </div>

        <div className='recipies-container'>
          {myRecipes.map((element, index) => (
            <MyRecipesComponent key={index}
            label={element.recipe.label} 
            calories={element.recipe.calories} 
            image={element.recipe.image} 
            ingredients={element.recipe.ingredientLines}
            cuisine={element.recipe.cuisineType}
            />
          ))}
          </div>
      </div>
  );
}

export default App;
