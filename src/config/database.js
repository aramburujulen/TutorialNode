import { Sequelize } from "sequelize";

//npm install sequelize

const db = new Sequelize("tutorialnode", "root", "666666", {
    host: "localhost",
    dialect: "mysql"
});

export default db;