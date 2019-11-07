const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipe,
  add,
  update,
  remove,
}
/*
getRecipes(): 
should return a list of all recipes in the database.

getShoppingList(recipe_id): 
should return a list of all ingredients and quantities for a given recipe

getInstructions(recipe_id): 
should return a list of step by step instructions for preparing a recipe
*/
const getRecipes = () => {
  return db('recipe');
}

const getShoppingList = (id) => {
  return db('recipe_ingredient AS ri')
    .join('ingredient AS i', 'ri.ingredient_id', 'i.id')
    .select(
      'ri.recipe_id AS recipe_id, ' +
      'i.ingredient AS ingredient, ' +
      'ri.quantity'
    ).where({ 'recipe_id': id });
}

const getInstructions = (id) => {
  return db('recipe_step').where({ 'recipe_id': id }).orderBy('stepNumber');
}

const getRecipe = (id) => {
  return db('recipe').where({ id });
}

const add = (recipe) => {
  return db('recipe').insert(recipe);
}

const update = (changes, id) => {
  return db('recipe').where({ id }).update(changes).then(() => getRecipe(id));
}

const remove = (id) => {
  return db('recipe').where({ id }).del();
}