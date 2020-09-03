
exports.up = function(knex) {
    return knex.schema.createTable('cargos', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('salario_cargo').notNullable();
        table.string('discriminator_cargo').notNullable();
        table.foreign('discriminator_cargo').references('discriminator').inTable('funcionarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cargos');
};
