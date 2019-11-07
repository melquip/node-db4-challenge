const db = require('../data/db-config');

const getRecipes = () => {
  return db('recipe');
}

const getShoppingList = (id) => {
  return db('recipe_ingredient AS ri')
    .join('ingredient AS i', 'ri.ingredient_id', 'i.id')
    .select(
      'ri.recipe_id AS recipe_id', 
      'ri.ingredient_id AS ingredient_id', 
      'i.ingredient AS ingredient', 
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

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipe,
  add,
  update,
  remove,
}