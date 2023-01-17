const bcrypt = require("bcryptjs");
const Joi = require("joi");
const genAuthToken = require("../config/genAuthToken");
const { User } = require("./../models");

exports.register = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(400).send("User already exists with this email address");
  }

  const salt = await bcrypt.getSalt(10);

  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  await user.save();

  res.status(201).json({
    token: await genAuthToken(user),
    name: user.name,
    email: user.email,
    id: user.id,
  });
};

exports.login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("Invalid Email or Password!");

  const isValid = await bcrypt.compare(req.body.password, user.password);

  if (!isValid) return res.status(400).send("Invalid Email or Password!");

  res.status(201).json({
    token: await genAuthToken(user),
    name: user.name,
    email: user.email,
    id: user.id,
  });
};
