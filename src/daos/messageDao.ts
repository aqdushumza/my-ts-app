import { Message } from '@models/message';

const findAll = async () => await Message.findAll();
const create = async (text: string) => await Message.create({ text });

export default { findAll, create };