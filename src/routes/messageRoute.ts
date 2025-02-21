import express from 'express';
import messageController from '@controllers/messageController';
function messageRoute(){
    console.log("kdndfbdjfbjdbf");
    const router = express.Router();
    console.log(router)
    router.get('/', messageController.getMessages);
    router.post('/', messageController.createMessage);
    return router;
}


export default messageRoute;