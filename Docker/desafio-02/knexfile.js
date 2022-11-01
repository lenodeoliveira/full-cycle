module.exports = {
    client: 'mysql',
    connection: {
      host : 'db',
      port : 3306,
      user : 'full_cycle',
      password : '12345',
      database : 'full_cycle'
    },
    pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
    }
}