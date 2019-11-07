const db = require('../data/db-config');

module.exports = {
  getIngredient,
  getRecipesByIngredientId,
}

const getIngredient = (id) => {
  return db('ingredient').where({ id });
}

const getRecipesByIngredientId = (id) => {
  return db('recipe_ingredient AS ri')
    .join('recipe AS r', 'ri.recipe_id', 'r.id')
    .select('ri.*')
    .where({ 'ri.ingredient_id': id });
}