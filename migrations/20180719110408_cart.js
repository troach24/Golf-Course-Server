"use strict";

exports.up = function(knex) {
  return knex.schema.createTable("cart", table => {
    table.increments();
    table
      .integer("tee_time_id")
      .nullable()
      .references("id")
      .inTable("tee-time")
      .onDelete("CASCADE")
      .index();
    table
      .integer("menu_item_id")
      .nullable()
      .references("id")
      .inTable("menu-item")
      .onDelete("CASCADE")
      .index();
    table
      .integer("shop_item_id")
      .nullable()
      .references("id")
      .inTable("shop-item")
      .onDelete("CASCADE")
      .index();
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
    table
      .string("imageUrl")
      .notNullable()
      .defaultTo("");
    table.integer("quantity");
    table.boolean("active");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cart");
};
