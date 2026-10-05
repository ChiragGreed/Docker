import express from 'express';
import morgan from 'morgan';
import dummyRoutes from './routes/dummyRoutes.js';
import cors from 'cors';
import path from 'path';

const app = express();

const index = path.join(import.meta.dirname, '../', '/public');

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static(index));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api', dummyRoutes);

app.use('*name', (req, res) => {
    res.sendFile(index + '/index.html');
});

export default app; 