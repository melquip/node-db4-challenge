exports.seed = function (knex) {
  return knex('recipe_ingredient').truncate()
    .then(function () {
      return knex('recipe_ingredient').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 12 },
        { recipe_id: 1, ingredient_id: 2, quantity: 3 },
        { recipe_id: 1, ingredient_id: 3, quantity: 3 },
        { recipe_id: 1, ingredient_id: 4, quantity: 3 },
        { recipe_id: 1, ingredient_id: 5, quantity: 1 },
        { recipe_id: 1, ingredient_id: 6, quantity: 1 },
        { recipe_id: 1, ingredient_id: 7, quantity: 0.5 },
        { recipe_id: 1, ingredient_id: 8, quantity: 8 },
        { recipe_id: 2, ingredient_id: 1, quantity: 5 },
        { recipe_id: 2, ingredient_id: 9, quantity: 0.5 },
        { recipe_id: 2, ingredient_id: 10, quantity: 0.25 },
        { recipe_id: 2, ingredient_id: 11, quantity: 0 },
        { recipe_id: 2, ingredient_id: 12, quantity: 0 },
        { recipe_id: 2, ingredient_id: 13, quantity: 1 },
        { recipe_id: 2, ingredient_id: 14, quantity: 1 },
      ]);
    });
};
