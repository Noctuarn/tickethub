import mongoose from 'mongoose';

const userLoginSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserLogin = mongoose.model('UserLogin', userLoginSchema);

export default UserLogin;