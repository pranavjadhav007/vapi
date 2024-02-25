import mongoose from "mongoose";
import validator from "validator";

const vengeanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [1, "Name must be of at least 1 Characters."],
    maxLength: [30, "Name cannot exceed 30 Characters."],
  },
  collegeName: {
    type: String,
    required: true,
    minLength: [1, "College name must be of at least 1 Characters."],
    maxLength: [30, "College name cannot exceed 30 Characters."],
  },
  service: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  age: {
    type: String,
    required: true,
    minLength: [0, "Age must be greater than 0."],
    maxLength: [3, "Exceding Limit."],
  },
});

export const Vengeance = mongoose.model("Vengeance", vengeanceSchema);
