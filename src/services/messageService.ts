import messageDao from '@daos/messageDao';

const getAllMessages = async () => messageDao.findAll();
const createMessage = async (text: string) => messageDao.create(text);

export default { getAllMessages, createMessage };