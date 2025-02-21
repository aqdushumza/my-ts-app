import express from 'express';
import messageController from '@controllers/messageController';
var router = express.Router();
router.get('/', messageController.getMessages);
router.post('/', messageController.createMessage);
export default router;
