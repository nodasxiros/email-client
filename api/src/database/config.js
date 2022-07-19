require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.POSTGRES_DB_HOST || '127.0.0.1',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DB || 'email_client_db',
  },
  test: {
    dialect: 'postgres',
    host: process.env.POSTGRES_DB_HOST || '127.0.0.1',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DB || 'email_client_db',
  },
  production: {
    dialect: 'postgres',
    host: process.env.POSTGRES_DB_HOST || '127.0.0.1',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DB || 'email_client_db',
  },
}