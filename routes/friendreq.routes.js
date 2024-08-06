import express from 'express';
import { friendRequestController } from '../controllers/friendreqController.js';

const router=express.Router();

router.post('/friend-request',friendRequestController);

export default router;