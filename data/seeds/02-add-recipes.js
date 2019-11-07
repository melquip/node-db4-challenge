exports.seed = function (knex) {
  return knex('recipe').truncate()
    .then(function () {
      return knex('recipe').insert([
        { recipe: "Three Egg Omelet" },
        { recipe: "Soft Scrambled Eggs" },
      ]);
    });
};
