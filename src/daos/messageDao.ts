import { Message } from '@models/index';

const create = async (text: string) => await Message.create({ text });
async function findAll(): Promise<Message[]> {
  return  await Message.findAll();

}
export  { findAll, create };
