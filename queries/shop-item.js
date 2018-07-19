const database = require("../database-connection");

module.exports = {
  list() {
    return database("shop-item").select();
  },
  read(id) {
    return database("shop-item")
      .select()
      .where("id", id)
      .first();
  },
  create(shopItem) {
    return database("shop-item")
      .insert(shopItem)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, shopItem) {
    return database("shop-item")
      .where("id", id)
      .update(shopItem, "*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("shop-item")
      .where("id", id)
      .del();
  }
};
