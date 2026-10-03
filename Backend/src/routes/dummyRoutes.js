import express from 'express';
import { getMe, health } from '../controllers/dummyController.js';

const dummyRoutes = express.Router();

dummyRoutes.get('/getMe', getMe)

dummyRoutes.get('/health', health);

export default dummyRoutes;