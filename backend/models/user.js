const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  department: { type: String, required: true },
  jobTitle: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
