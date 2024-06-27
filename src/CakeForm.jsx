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
        // Reset form
        setName("");
        setIngredients("");
        setRating(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
            />
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea 
                cols="30" 
                rows="1" 
                id="ingredients" 
                value={ingredients} 
                onChange={(e) => setIngredients(e.target.value)}
                required
            ></textarea>
            <label htmlFor="rating">Rating:</label>
            <input 
                type="number" 
                id="rating" 
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