import { Dialect } from 'sequelize';

export default {
  development: {
    host: "127.0.0.1",
    username: "postgres",
    password: "postgres",
    database: "test_db",
    port: "5432",
    dialect: <Dialect>'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    host: "127.0.0.1",
    username: "postgres",
    password: "postgres",
    database: "test_db",
    port: "5432",
    dialect: <Dialect>'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  prod: {
    host: "127.0.0.1",
    username: "postgres",
    password: "postgres",
    database: "test_db",
    port: "5432",
    dialect: <Dialect>'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
