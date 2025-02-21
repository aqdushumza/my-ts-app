import * as messageDao from '@daos/index';

const getAllMessages = async () => messageDao.findAll();
const createMessage = async (text: string) => messageDao.create(text);

export  { getAllMessages, createMessage };