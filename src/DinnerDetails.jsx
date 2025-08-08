import { useEffect, useState } from 'react'

export function DinnerDetails(recipe, setDetailsPage) {
  var summary = recipe.summary;
  //  {recipe.extendedIngredients.map((item, index)) => (
  //   <label key={index} style={{textDecoration: item.isChecked ? 'line-through : 'none'. }}>
  //  <input type="checkbox" checked={item.isChecked} onChange={() => toggleIngredient(index)}/>
  //  {item.name}
  //  <label>
  //  ))}

  setDetailsPage(
    <>
      <button className="return-button" onClick={() => { setDetailsPage(null) }}>Return</button>
      <h1 className="recipe-title">{recipe.title}</h1>
      <p className="recipe-description" dangerouslySetInnerHTML={{ __html: summary }} />
      <p className="ingredients-title">Ingredients</p>
      <ul className="ingredients-list">
        {recipe.extendedIngredients[0] == undefined ? null : recipe.extendedIngredients.map(item => {
          item.isChecked = "notUnderlined";
          console.log(item.isChecked)
          return (<li> <input
            className={item.isChecked}
            type="checkbox"
            id="ingredient"
            name="ingredient"
            onChange={() => {
              item.isChecked = item.isChecked == "underlined" ? "notUnderlined" : "underlined"
              console.log(item.isChecked)
            }} />{item.original}</li>)
        })}
      </ul>
      <p className="steps-title">Steps</p>
      <ol className="recipe-steps">
        {recipe.analyzedInstructions[0] == undefined ? <p className="no-recipe-steps">Recipe steps not provided... sad... :(</p> : recipe.analyzedInstructions[0].steps.map(item => (<li><p>{item.step}</p></li>))}
      </ol>
    </>
  )


  return
}

