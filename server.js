import express from 'express';
import { connect, Schema, model } from 'mongoose';

const app = express();
const port = 3000;

// Підключення до MongoDB
connect('mongodb://localhost:27017/TicketHub', { useNewUrlParser: true, useUnifiedTopology: true });

// Оголошення схем та моделей для кожної колекції

// Схема та модель для користувачів
const userSchema = new Schema({
    id: Number,
    name: String,
    surname: String,
    tel: String,
    tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
    money: Number
});

const UserModel = model('User', userSchema);

// Схема та модель для квитків
const ticketSchema = new Schema({
    id: Number,
    departure: String,
    destination: String,
    date: Date,
    departureTime: String,
    arrivalTime: String,
    price: Number,
    carrier: String
});

const TicketModel = model('Ticket', ticketSchema);

// Схема та модель для користувачів
const userDataSchema = new Schema({
    id: Number,
    name: String,
    surname: String,
    tel: String,
    tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
    money: Number
});

const UserDataModel = model('UserData', userDataSchema);

// Маршрути для отримання даних

// Маршрут для отримання всіх користувачів
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find().populate('tickets');
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Маршрут для отримання всіх квитків
app.get('/tickets', async (req, res) => {
    try {
        const tickets = await TicketModel.find();
        res.json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Маршрут для отримання всіх даних користувачів
app.get('/userData', async (req, res) => {
    try {
        const userData = await UserDataModel.find().populate('tickets');
        res.json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});