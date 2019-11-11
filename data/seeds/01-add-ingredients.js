exports.seed = function (knex) {
  return knex('ingredient').truncate()
    .then(function () {
      return knex('ingredient').insert([
        { ingredient: 'egg' },
        { ingredient: 'cooked ham' },
        { ingredient: 'cooked turkey meat' },
        { ingredient: 'green onions' },
        { ingredient: 'tomato' },
        { ingredient: 'sprig fresh parsley' },
        { ingredient: 'medium green bell pepper' },
        { ingredient: 'shredded cheddar cheese ounce' },
        { ingredient: 'cup of milk' },
        { ingredient: 'cup of cottage cheese' },
        { ingredient: 'salt' },
        { ingredient: 'ground black pepper' },
        { ingredient: 'butter tablespoon' },
        { ingredient: 'pinch chopped fresh parsley' },
      ]);
    });
};
