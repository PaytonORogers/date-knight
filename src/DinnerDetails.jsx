import { useEffect } from 'react'

export function DinnerDetails(recipe, setDetailsPage) {
  var summary = recipe.summary;
  setDetailsPage(
    <>
      <button className="return-button" onClick={() => { setDetailsPage(null) }}>Return</button>
      <h1 className="recipe-title">{recipe.title}</h1>
      <p className="recipe-description" dangerouslySetInnerHTML={{ __html: summary }}/>
      <p className="ingredients-title">Ingredients</p>
      <ul className="ingredients-list">
        {recipe.extendedIngredients[0] == undefined ? null : recipe.extendedIngredients.map(item => (<li><input type="checkbox" id="ingredient" name="ingredient"/>{item.original}</li>))}
      </ul>
      <p className="steps-title">Steps</p>
      <ol className="recipe-steps">
        {recipe.analyzedInstructions[0] == undefined ? <p className="no-recipe-steps">Recipe steps not provided... sad... :(</p> : recipe.analyzedInstructions[0].steps.map(item => (<li><p>{item.step}</p></li>))}
      </ol>
    </>
  )


  return
}

