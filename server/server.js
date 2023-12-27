import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import UserData from '../models/userData.js';
import UserLogin from '../models/userLogin.js';
import Ticket from '../models/tickets.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Підключення до MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/tickethub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

// Парсер для обробки JSON
app.use(bodyParser.json());

// Маршрутизація для отримання даних
app.get('/user-data', async (req, res) => {
  try {
    const usersData = await UserData.find();
    res.json(usersData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/user-login', async (req, res) => {
  try {
    const usersLogin = await UserLogin.find();
    res.json(usersLogin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/tickets', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    console.log('Tickets:', JSON.stringify(tickets, null, 2));
    res.json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).json({ error: error.message });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});