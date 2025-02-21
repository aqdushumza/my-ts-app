import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config();
export var sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    models: [__dirname + '/../models'],
});
sequelize.authenticate()
    .then(function () { return console.log('Database authenticated successfully'); })
    .catch(function (err) { return console.error('Database authentication failed:', err); });
