const express = require('express');

const Ingredients = require('./ingredient-model');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Ingredients.getIngredient(id).then(ingredient => {
    if (ingredient) {
      res.status(200).json(ingredient);
    } else {
      res.status(404).json({ message: 'Could not find ingredient with given id.' });
    }
  }).catch(next);
});

router.get('/:id/recipes', (req, res, next) => {
  const { id } = req.params;
  Ingredients.getRecipesByIngredientId(id).then(recipes => {
    if (recipes.length) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: 'Could not find recipes with given ingredient.' });
    }
  }).catch(next);
});

router.use((error, req, res, next) => {
  res.status(500).json(error.message);
});

module.exports = router;