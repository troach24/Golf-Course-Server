"use strict";

exports.up = function(knex) {
  return knex.schema.createTable("menu-item", table => {
    table.increments();
    table
      .string("name")
      .notNullable()
      .defaultTo("");
    table.float("price");
    table
      .string("category")
      .notNullable()
      .defaultTo("");
    table
      .string("description")
      .notNullable()
      .defaultTo("");
    table.text("imageUrl");
    table.integer("quantity");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("menu-item");
};
