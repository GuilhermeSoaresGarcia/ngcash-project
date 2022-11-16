import { prisma } from '../db/db';

async function newAccount() {
  const result = await prisma.public_Accounts.create({
    data: {
      balance: 100
    }
  });
  return result;
}

export { newAccount };