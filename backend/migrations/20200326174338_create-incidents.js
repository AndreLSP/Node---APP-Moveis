exports.up = function(knex) {
    return knex.schema.createTable('incident', function(table){
        table.increments(),
        
        table.string('title').notNullable(),
        table.string('description').notNullable(),
        table.decimal('value').notNullable(),

        table.string('ongs_id'),
        table.foreign('ongs_id').references('id').inTable('ongs')

        
    });
}

exports.down = function(knex) {
    return knex.schema.dropTable('incident')
};