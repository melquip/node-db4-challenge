const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Recipes.getRecipes().then(recipes => {
    res.status(200).json(recipes);
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Recipes.getRecipe(id).then(recipe => {
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' });
    }
  }).catch(next);
});

router.get('/:id/shoppingList', (req, res, next) => {
  const { id } = req.params;
  Recipes.getShoppingList(id).then(ingredients => {
    if (ingredients.length) {
      res.status(200).json(ingredients);
    } else {
      res.status(404).json({ message: 'Could not find ingredients for given recipe' });
    }
  }).catch(next);
});

router.get('/:id/instructions', (req, res, next) => {
  const { id } = req.params;
  Recipes.getInstructions(id).then(steps => {
    if (steps.length) {
      res.status(200).json(steps);
    } else {
      res.status(404).json({ message: 'Could not find instruction for given recipe' });
    }
  }).catch(next);
});

router.post('/', (req, res, next) => {
  const recipeData = req.body;
  Recipes.add(recipeData).then(recipe => {
    res.status(201).json(recipe);
  }).catch(next);
});

router.post('/:id/steps', (req, res, next) => {
  const stepData = req.body;
  const { id } = req.params;

  Recipes.findById(id)
    .then(recipe => {
      if (recipe) {
        Recipes.addStep(stepData, id)
          .then(step => {
            res.status(201).json(step);
          })
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;

  Recipes.findById(id)
    .then(recipe => {
      if (recipe) {
        Recipes.update(changes, id)
          .then(updatedScheme => {
            res.json(updatedScheme);
          });
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id' });
      }
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Recipes.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id' });
      }
    })
    .catch(next);
});

router.use((error, req, res, next) => {
  res.status(500).json(error.message);
})

module.exports = router;