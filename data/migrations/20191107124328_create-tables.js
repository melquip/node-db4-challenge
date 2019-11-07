exports.up = function (knex) {
  return knex.schema
    .createTable('recipe', recipe => {
      recipe.increments();
      recipe.string('recipe', 255).unique().notNullable();
    })
    .createTable('ingredient', ingredient => {
      ingredient.increments();
      ingredient
        .string('ingredient', 128)
        .unique()
        .notNullable();
    })
    .createTable('recipe_ingredient', recipe_ingredient => {
      recipe_ingredient.increments();
      recipe_ingredient
        .integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipe');
      recipe_ingredient
        .integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredient');
      recipe_ingredient.float('quantity').notNullable();
    })
    .createTable('recipe_step', recipe_step => {
      recipe_step.increments();
      recipe_step.text('step').notNullable();
      recipe_step.integer('stepNumber').notNullable();
      recipe_step.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipe');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipe_step')
    .dropTableIfExists('recipe_ingredient')
    .dropTableIfExists('ingredient')
    .dropTableIfExists('recipe');
};