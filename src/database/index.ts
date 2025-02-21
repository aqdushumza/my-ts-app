import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Message } from '@models/message';
dotenv.config()
export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'realmenarzo20',
    database: process.env.DB_NAME || 'testdb',
    port: Number(process.env.PORT) || 3306,
    models: [Message]  // Corrected path resolution
});

sequelize.authenticate()
    .then(() => console.log('Database authenticated successfully'))
    .catch((err) => console.error('Database authentication failed:', err));
