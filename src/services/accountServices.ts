import { prisma } from '../db/db';
import { ApiError } from '../helpers/ApiErrors';
import IBalance from '../interfaces/IBalance';

async function newAccount() {
  const result = await prisma.public_Accounts.create({
    data: {
      balance: 100
    }
  });
  return result;
}

async function getBalance(obj: IBalance) {
  const {id, accountId, tokenUser} = obj;

  if (id !== tokenUser.id && accountId !== tokenUser.accountId) {
    throw new ApiError ('Unauthorized', 401)
  }

  const result = await prisma.public_Users.findFirstOrThrow(
    {
      where: {
        AND: [
          { id },
          { accountId }
        ],
      },
      select: {
        username: true,
        public_Accounts: {
          select: {
            id: true,
            balance: true,
          },
        },
      },
    });

  return result;
}

export { newAccount, getBalance };