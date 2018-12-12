const database = require("../database-connection");

module.exports = {
  list() {
    return database("cart").select();
  },
  read(id) {
    return database("cart")
      .select()
      .where("id", id)
      .first();
  },
  create(cartItem) {
    return database("cart")
      .insert(cartItem)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, cartItem) {
    return database("cart")
      .where("id", id)
      .update(cartItem, "*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("cart")
      .where("id", id)
      .del();
  }
};
