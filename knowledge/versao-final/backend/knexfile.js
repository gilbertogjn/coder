const { db } = require('./.env')

module.exports = {
    client: 'postgresql',
    connection: {
        database: 'knowledge_final',
        user: 'postgres',
        password: '123456' // sua senha 
    }
}