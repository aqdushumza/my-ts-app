import express from 'express';
// import { sequelize } from '@database/index';
import messageRoutes from './routes/messageRoute';
var app = express();
app.use(express.json());
app.use('/api/messages', messageRoutes);
var PORT = process.env.PORT || 5000;
// sequelize.sync().then(() => {
//     console.log('Database connected');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });
export default app;
