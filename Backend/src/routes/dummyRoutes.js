import express from 'express';
import { getMe, healthCheck } from '../controllers/dummyController.js';

const dummyRoutes = express.Router();

dummyRoutes.get('/getMe', getMe);

dummyRoutes.get('/healthCheck', healthCheck);

export default dummyRoutes;