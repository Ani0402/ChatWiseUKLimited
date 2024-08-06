import express from 'express';
import { registerController,postController,commentController,feedController } from '../controllers/userController.js';

const router=express.Router();

router.post('/register',registerController);
router.post('/post',postController);
router.post('/comment',commentController);
router.get('/feed',feedController);

export default router;