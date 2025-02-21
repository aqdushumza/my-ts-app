import express from 'express';
import { sequelize } from '@database/index';
import messageRoute from './routes/messageRoute';
console.log("---------------->>>>>>>");


const app = express();
app.use(express.json());
app.use('/api/messages', messageRoute());

const PORT = process.env.PORT || 5001;
sequelize.sync().then(() => {
    console.log('Database connected');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default app;