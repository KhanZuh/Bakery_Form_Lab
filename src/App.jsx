import { useState } from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./CakeForm";
import './App.css';


function App() {
  const [cakes, setCakes] = useState([
    {
      cakeName: "Lemon Drizzle",
      ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
      rating: 5
    },
    {
      cakeName: "Tea Loaf",
      ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
      rating: 3
    },
    {
      cakeName: "Brownie",
      ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
      rating: 4
    },
    {
      cakeName: "Carrot Cake",
      ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
      rating: 5
    }
  ]);

   // Initialize state for filtered cakes, initially set to all cakes
   const [filteredCakes, setFilteredCakes] = useState(cakes);

   // Function to handle adding a new cake
   const handleNewCake = (newCake) => {
     // Create a new array with all existing cakes plus the new cake
     const updatedCakes = [...cakes, newCake];
     // Update the cakes state with the new array
     setCakes(updatedCakes);
     // Update the filtered cakes as well to include the new cake
     setFilteredCakes(updatedCakes);
   };

// Note to self: explaining the spread operator (...) usage above -->
// The spread operator ... is being used to "spread" the elements of the cakes array into a new array. Here's what it does:

// Imagine cakes is an array like this: ["chocolate", "vanilla", "strawberry"]
// When you use ...cakes, it's as if you're taking all the items out of the cakes array and listing them individually.
// So [...cakes] is equivalent to writing ["chocolate", "vanilla", "strawberry"]
// By adding newCake after the spread operator, you're essentially saying "take all the cakes from the original array, and then add this new cake at the end"
// If newCake was "lemon", the result would be ["chocolate", "vanilla", "strawberry", "lemon"]



const handleSearch = (searchTerm) => {
  if (searchTerm.trim() === '') {
    // If search term is empty, show all cakes
    setFilteredCakes(cakes);
  } else {
    const filtered = cakes.filter(cake => 
      cake.cakeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cake.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredCakes(filtered);
  }
};



  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <Search onSearch={handleSearch} />
        <RecipeList cakes={filteredCakes} />
        <CakeForm onNewCake={handleNewCake} />
      </main>
    </>
  );
}

export default App;