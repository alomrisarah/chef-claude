import { HfInference } from "@huggingface/inference"

// System prompt for AI response
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page.
`

const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN


if (!HF_ACCESS_TOKEN) {
 throw new Error("❌ Hugging Face API Key (VITE_HF_ACCESS_TOKEN) is missing! Check your .env file.")
}

// Create Hugging Face inference instance
const hf = new HfInference(HF_ACCESS_TOKEN)

// Function to fetch recipe from Hugging Face API (Mixtral model)
export async function getRecipeFromMistral(ingredientsArr) {
 const ingredientsString = ingredientsArr.join(", ")

 try {
  const response = await hf.chatCompletion({
   model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
   messages: [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
   ],
   max_tokens: 1024,
  })

  return response.choices[0].message.content // Return the recipe text
 } catch (err) {
  console.error("❌ Error fetching recipe from Mistral:", err.message)
  return "Sorry, I couldn't fetch a recipe at the moment."
 }
}
