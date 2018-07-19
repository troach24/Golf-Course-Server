const database = require("../database-connection");

module.exports = {
  list() {
    return database("menu-item").select();
  },
  read(id) {
    return database("menu-item")
      .select()
      .where("id", id)
      .first();
  },
  create(menuItem) {
    return database("menu-item")
      .insert(menuItem)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, menuItem) {
    return database("menu-item")
      .where("id", id)
      .update(menuItem, "*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("menu-item")
      .where("id", id)
      .del();
  }
};
