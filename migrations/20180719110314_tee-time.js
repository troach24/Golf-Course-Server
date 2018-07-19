"use strict";

exports.up = function(knex) {
  return knex.schema.createTable("tee-time", table => {
    table.increments();
    table.integer("date");
    table.integer("time");
    table.boolean("booked").defaultTo(false);
    table.integer("golfers").defaultTo(4);
    table.decimal("price");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tee-time");
};
