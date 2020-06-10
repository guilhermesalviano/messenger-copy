import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('messages', table => {
        table.string('_id').notNullable();
        table.string('text').notNullable();
        table.string('createdAt').notNullable();
        table.integer('from_user_id').notNullable();
        table.integer('to_user_id').notNullable();
        table.string('image');
        table.string('video');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTableIfExists('messages');
}