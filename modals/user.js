const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  image: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
