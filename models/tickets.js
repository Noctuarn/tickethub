import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  departure: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  deperatureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  price: { type: Number, required: true },
  carrier: { type: String, required: true },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;