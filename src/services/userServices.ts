import { public_Users } from '@prisma/client';
import { prisma } from '../db/db';
import { ApiError } from '../helpers/api-errors'; // This class is just an extension
// of the default class Error but adds a second parameter in the constructor (in wich I can pass the status code)
import { newAccount } from '../services/accountServices';

async function newUser(obj: public_Users) {
  const { username, password } = obj;  

  // Username validation
  if (username.length < 3) {
    throw new ApiError(
      'Username must be at least 3 characters long', 400
    )
  };

  // Password validation
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
  if (!regex.test(password)) {
    throw new ApiError(
      'Password must have a minimun of eight characters, at least one uppercase letter, one lowercase letter and one number', 400
    );
  }

  // Checks for unique username
  const existingUser = await prisma.public_Users.findFirst({ where: { username } });
  if (existingUser !== null) {
    throw new ApiError(
      'User already exists', 409
    );
  }

  const result = await prisma.public_Users.create({
    data: {
      username,
      password,
      accountId: (await newAccount()).id,
    }
  });
  return result;
}

export { newUser };