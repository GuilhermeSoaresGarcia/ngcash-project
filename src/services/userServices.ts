import { public_Users } from '@prisma/client';
import { prisma } from '../db/db';
import { newAccount } from '../services/accountServices';
import { userSchema } from '../validations/userCreation';
import Joi from 'joi';

async function newUser(obj: public_Users) {
  try {
    Joi.assert(obj, userSchema)   
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
  } catch (err: any) {
    return err.details.message;
  }
}

export { newUser };