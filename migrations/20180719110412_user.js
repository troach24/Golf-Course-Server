"use strict";

exports.up = function(knex) {
  return knex.schema.createTable("user", table => {
    table.increments();
    table.string("username");
    table
      .integer("tee_time_id")
      .nullable()
      .references("id")
      .inTable("tee-time")
      .onDelete("CASCADE")
      .index();
    table
      .integer("cart_id")
      .nullable()
      .references("id")
      .inTable("cart")
      .onDelete("CASCADE")
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
