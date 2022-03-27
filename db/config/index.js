console.log('MYSQL_HOST:' + process.env.MYSQL_HOST)

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/db.sqlite',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './db/test.sqlite',
    },
    migrations: {
      directory: './db/migrations',
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      user: 'root',
      password: 'Ser*Kamer*Poyraz1',
      database: 'nfturk',
    },
  },
  devProd: {
    client: 'mysql',
    connection: {
      host: '18.194.155.77',
      user: 'root',
      password: 'Ser*Kamer*Poyraz1',
      database: 'nfturk',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    }
  },
};
