// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'dbwarbim',
      user: 'postgres',
      password: 'postgres',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://dbcoba_user:cBICik7GCQ4QGCx2Q3zPiSjzKqsroqqo@dpg-cktt0lgegfnc73c961n0-a/dbcoba',
      user: 'dbcoba_user',
      password: 'cBICik7GCQ4QGCx2Q3zPiSjzKqsroqqo',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
