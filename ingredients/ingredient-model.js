const db = require('../data/db-config');

const getIngredient = (id) => {
  return db('ingredient').where({ id });
}

const getRecipesByIngredientId = (id) => {
  return db('recipe_ingredient AS ri')
    .join('recipe AS r', 'ri.recipe_id', 'r.id')
    .select('ri.recipe_id', 'r.recipe', 'ri.ingredient_id', 'ri.quantity')
    .where({ 'ri.ingredient_id': id });
}

module.exports = {
  getIngredient,
  getRecipesByIngredientId,
}