export const getRecipes = async () => {
  const res = await fetch('https://irvb-recetas.herokuapp.com/api/recipe')
  const json = await res.json()
  return json
}