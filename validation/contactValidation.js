const Joi = require("joi");

const contactValidationSchema = Joi.object({
  contactId: Joi.string().required(),
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).required(),
  address: Joi.string().max(255).optional(),
});

module.exports = {
  validateContact: (data) => contactValidationSchema.validate(data, { abortEarly: false }),
};
