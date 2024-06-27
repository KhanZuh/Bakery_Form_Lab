const RecipeList = ({ cakes }) => {
  return (
    <>
      <section className="recipe-list">
        {cakes.map((cake, index) => (
          <div key={index} className="recipe-card">
            <h3>{cake.cakeName}</h3>
            <ul>
              {cake.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <p>Rating: {cake.rating} / 5</p>
          </div>
        ))}
      </section>
      <div className="average-rating">
        Average cake rating: {(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length).toFixed(2)}
      </div>
    </>
  )
}

export default RecipeList;