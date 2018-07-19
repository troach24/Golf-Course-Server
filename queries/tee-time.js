const database = require("../database-connection");

module.exports = {
  list() {
    return database("tee-time").select();
  },
  read(id) {
    return database("tee-time")
      .select()
      .where("id", id)
      .first();
  },
  create(teeTime) {
    return database("tee-time")
      .insert(teeTime)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, teeTime) {
    return database("tee-time")
      .where("id", id)
      .update(teeTime, "*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("tee-time")
      .where("id", id)
      .del();
  }
};
