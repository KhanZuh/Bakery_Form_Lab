import { useState } from 'react';

const CakeForm = ({ onNewCake }) => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCake = {
            cakeName: name,
            ingredients: ingredients.split(',').map(item => item.trim()),
            rating: parseInt(rating)
        };
        onNewCake(newCake);
        setName("");
        setIngredients("");
        setRating(1);
    };

    return (
        <form onSubmit={handleSubmit} className="add-recipe-form">
            <h2>Add New Recipe</h2>
            <input 
                type="text" 
                placeholder="Cake Name"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
            />
            <textarea 
                placeholder="Ingredients (comma separated)"
                value={ingredients} 
                onChange={(e) => setIngredients(e.target.value)}
                required
            ></textarea>
            <input 
                type="number" 
                placeholder="Rating (1-5)"
                min={1} 
                max={5} 
                value={rating} 
                onChange={(e) => setRating(e.target.value)}
            />
            <input type="submit" value="Add Cake" />
        </form>
    )
}

export default CakeForm;