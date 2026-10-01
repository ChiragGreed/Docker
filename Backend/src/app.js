import express from 'express';
import dummyRoutes from './routes/dummyRoutes.js';

const app = express();


app.use('/api',dummyRoutes);

export default app;