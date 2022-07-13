require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
// const dbCheck = require('./db/dbCheck') // подключение скрипта проверки соединения с БД
const indexRouter = require('./routes/index');
const advertisementRouter = require('./routes/advertisementRouter');


// ! Инициализируем приложение
const app = express() // создали экземпляр сервера
const PORT = process.env.PORT || 3002 // создали константу с портом
// dbCheck() // вызов функции проверки соединения с базоый данных

// ! Подключаем миддлварки
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ! -->Тут пишем роуты<--
app.use('/', indexRouter);
app.use('/advertisement', advertisementRouter)

// ! Начинаем слушать порт для запуска сервера
app.listen(PORT, () => { // начинаем слушать сервер на указанном порте
  console.log(`Сервер запущен на порте ${PORT}`)
})


module.exports = app;
