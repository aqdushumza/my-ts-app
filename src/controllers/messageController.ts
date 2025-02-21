import { Request, Response } from 'express';
import * as messageService from '@services/index';

const getMessages = async (_req: Request, res: Response) => {
    const messages = await messageService.getAllMessages();
    res.json(messages);
};

const createMessage = async (req: Request, res: Response) => {
    const message = await messageService.createMessage(req.body.text);
    res.status(201).json(message);
};
export  { getMessages , createMessage}