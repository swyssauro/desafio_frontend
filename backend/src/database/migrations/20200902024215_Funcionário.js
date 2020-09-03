
exports.up = function (knex) {
    return knex.schema.createTable('funcionarios', function (table) {
        table.string('discriminator').primary();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('data_nascimento').notNullable();
        table.decimal('salario_atual').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('funcionarios');
};
