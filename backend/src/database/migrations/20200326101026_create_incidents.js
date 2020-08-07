
exports.up = function(knex)
{
    return knex.schema.createTable('incidents', function(table) //criar tabela
    {
        table.increments(); //campo autoincremental - chave primaria
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); //referes a valores float

        table.string('ong_id').notNullable(); //chave estrangeira da tabela ongs
        table.foreign('ong_id').references('id').inTable('ongs') //referencia ao id da tabela ongs

    });
  
};

exports.down = function(knex) 
{
    return knex.schema.dropTable('incidents');
  
};
