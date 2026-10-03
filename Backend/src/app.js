import express from 'express';
import morgan from 'morgan';
import dummyRoutes from './routes/dummyRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api', dummyRoutes);

export default app; 