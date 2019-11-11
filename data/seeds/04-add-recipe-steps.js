exports.seed = function (knex) {
  return knex('recipe_step').truncate()
    .then(function () {
      return knex('recipe_step').insert([
        {
          recipe_id: 1, stepNumber: 1,
          step: "Spray or lightly grease a large skillet and heat over medium heat",
        },
        {
          recipe_id: 1, stepNumber: 2,
          step: "Crack 3 eggs into a glass measuring cup and beat with a fork or whisk until scrambled. Pour eggs into heated skillet, swirling the pan to coat the bottom. Cover and let cook until eggs are firm, about 2 minutes",
        },
        {
          recipe_id: 1, stepNumber: 3,
          step: "Top with 1/4 each of the chopped ham, turkey, green onions, tomato, parsley, green bell pepper, and Cheddar cheese. Fold egg in half over fillings, and serve warm. Repeat with remaining ingredients for 4 omelets",
        },
        {
          recipe_id: 2, stepNumber: 1,
          step: "Lightly beat eggs together using a fork in a large bowl. Add milk, cottage cheese, salt, and pepper; beat for approximately 1 minute",
        },
        {
          recipe_id: 2, stepNumber: 2,
          step: "Heat a large saute pan over medium heat. Melt butter in the hot pan, making sure not to let it burn. Give eggs 1 last mix and pour into the pan. Reduce heat to low and cook, stirring frequently and slowly, about 10 minutes",
        },
        {
          recipe_id: 2, stepNumber: 3,
          step: "Remove from heat, allowing eggs to continue to cook slightly after heat is gone. Garnish with parsley and serve",
        },
      ]);
    });
};
