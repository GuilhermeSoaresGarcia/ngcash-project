import Joi from 'joi';

export const userSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .required(),

  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$'))
    .required(),
});