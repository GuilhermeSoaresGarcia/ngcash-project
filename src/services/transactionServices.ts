import { prisma } from '../db/db';
import { ApiError } from '../helpers/ApiErrors';

async function cashOut(obj: any) {
  const { accountId, username, value } = obj;
  
  // Throw error in case that user insert zero or a negative value
  if (value <= 0) { 
    throw new ApiError('Value must be greater than 0', 403)
  }

  const originAccount = await prisma.public_Accounts.findFirst({
    where: {
      id: accountId
    }
  })

  // Throw error if the origin account have insufficient funds
  if (originAccount && originAccount.balance < value) {
    throw new ApiError('Insufficient Funds', 403)
  }

  const destinationUsername = await prisma.public_Users.findFirst({
    where: {
      username
    }
  })

  // Throw error if the destination username isn't found
  if (destinationUsername === null) {
    throw new ApiError(`Username ${username} could not be found`, 404);
  }

  // Throw error if the origin account is the same as the destination
  if (destinationUsername?.accountId === accountId) {
    throw new ApiError(`Origin and destination account cannot be the same`, 401);
  }

  await prisma.public_Accounts.update(
    {
      data: {
        balance: {
          increment: -value
        }
      },
      where: {
        id: accountId
      }
    })

  const result = await prisma.public_Accounts.update(
    {
      data: {
        balance: {
          increment: value
        }
      },
      where: {
        id: destinationUsername.accountId
      },
      include: {
        public_Users: {
          select: {
            username: true
          }
        }
      }
    }
  )

  return result;
}

export { cashOut };