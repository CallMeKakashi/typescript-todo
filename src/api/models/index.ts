import {Sequelize}  from  "sequelize";
import config from "../../config"
import todomodel from "./todo_model"

const dbConfig = config.development;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {
	Sequelize: Sequelize,
	sequelize: sequelize,
	ToDo: todomodel(sequelize, Sequelize)
}


// import models

sequelize.sync({ alter: true });

export default  db;
