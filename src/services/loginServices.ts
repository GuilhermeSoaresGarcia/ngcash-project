import { public_Users } from '@prisma/client';
import { prisma } from '../db/db';
import { ApiError } from '../helpers/ApiErrors';
import Bcrypt from '../helpers/Bcrypt'
import generateToken from '../helpers/tokenGeneration'

async function login(obj: Partial<public_Users>) {
  const { username, password } = obj;
  const userData = await prisma.public_Users.findFirst({
    where: { username }
  })

  if (userData === null) {
    throw new ApiError(
      'Invalid username', 401
    )
  }

  const validPass = await Bcrypt.decript(password as string, userData.password);

  if (!validPass) {
    throw new ApiError(
      'Invalid password', 401
    )
  }

  const { id, accountId } = userData;

  const result = generateToken({ id, accountId })

  return {token: result};
}

export { login };