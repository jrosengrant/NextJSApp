import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model.User || mongoose.model('User', userSchema);

module.exports = userModel;
