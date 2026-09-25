import express from 'express';
import dummyRoutes from './routes/dummyRoutes.js';

const app = express();


app.use('/api/dummy',dummyRoutes);

export default app;