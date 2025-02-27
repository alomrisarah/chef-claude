import { getRecipeFromMistral } from "./ai.js"

// Example ingredient list
const ingredients = ["chicken", "onions", "tomatoes", "garlic"]

// Fetch recipe from Mistral (Hugging Face)
getRecipeFromMistral(ingredients)
 .then((recipe) => console.log("Recipe from Mistral:\n", recipe))
 .catch((err) => console.error(err))
