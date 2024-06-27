// component takes prop called 'cakes' --> array of cake objects
const RecipeList = ({ cakes }) => {
    return (
      <>
        {/* First section: List of cakes */}
        <section>
          {/* map method to iterate over each cake in the cakes array */}
          {cakes.map((cake, index) => {
            return(
                // key={index}: key prop helps React identify which items in a list have changed, been added, or been removed --> index is a variable representing the position of this element in an array (or list).
              <div key={index}> 
                {/* Display cake name */}
                <h3>{cake.cakeName}</h3>
                {/* unordered list for ingredients */}
                <ul>
                  {/* Map over each ingredient in the cake's ingredients array */}
                  {cake.ingredients.map((ingredient, index) => {
                    return(
                      // Each ingredient is a list item
                      <li key={index}>{ingredient}</li>
                    )
                  })}
                </ul>
                <p>Rating: {cake.rating}</p>
              </div>
            )
          })}
        </section>
  
        {/* Second section: Average cake rating */}
        <section>
          <h4>Average cake rating: </h4>
          {/* Calculate and display the average rating */}
          <p>
            {/* 
              Use reduce to sum up all ratings, then divide by the number of cakes
              reduce((accumulator, currentValue) => operation, initialValue)
            */}
            {(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length)}
          </p>
        </section>
      </>
    )
  }
  
  export default RecipeList;