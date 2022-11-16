import { public_Users } from '@prisma/client';
import { prisma } from '../db/db';
import { newAccount } from '../services/accountServices';

async function newUser(obj: public_Users) {
  const { username, password } = obj;
  const { id } = await newAccount();
  const result = await prisma.public_Users.create({
    data: {
      username,
      password,
      accountId: id,
    }
  });
  return result;
}

export { newUser };