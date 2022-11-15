import { public_Users } from '@prisma/client';
import { prisma } from '../db/db';
import IUser from '../interfaces/IUser';

async function newUser(obj: Omit<public_Users, 'id' | 'accountId'>) {
  const result = await prisma.public_Users.create({
    data: obj
  });
  return result;
}

export { newUser };