const Joi  = require('joi');

const rescue = require('express-rescue');

const UserModel = require('../models/user.js');

const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({

});

module.exports = [ ]