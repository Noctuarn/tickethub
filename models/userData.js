import mongoose from 'mongoose';

const userDataSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  tel: { type: String, required: true },
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }],
  money: { type: Number, required: true },
});

const UserData = mongoose.model('UserData', userDataSchema);

export default UserData;