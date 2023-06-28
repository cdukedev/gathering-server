/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("foodbanks", (table) => {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("type").notNullable();
    table.string("zone").notNullable();
    table.string("phone").notNullable();
    table.integer("lat").notNullable();
    table.integer("lng").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("foodbank");
};
