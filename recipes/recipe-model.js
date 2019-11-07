const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
}

const find = () => {
  return db('recipe');
}

const findById = (id) => {
  return db('recipe').where({ id });
}

const add = (scheme) => {
  return db('recipe').insert(scheme);
}

const update = (changes, id) => {
  return db('recipe').where({ id }).update(changes).then(() => findById(id));
}

const remove = (id) => {
  return db('recipe').where({ id }).del();
}