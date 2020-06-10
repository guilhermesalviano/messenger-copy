import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('login').notNullable();
        table.string('senha').notNullable();
        table.dateTime('criado_em').notNullable();
        table.dateTime('atualizado_em');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}