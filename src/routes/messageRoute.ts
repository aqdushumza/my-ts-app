import express from 'express';
import * as MessageController from '@controllers/index';

function messageRoute(){
    console.log("kdndfbdjfbjdbf");
    const router = express.Router();
    console.log(router)
    router.get('/', MessageController.getMessages);
    router.post('/', MessageController.createMessage);
    return router;
}


export default messageRoute;