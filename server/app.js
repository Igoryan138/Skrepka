require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const path = require('path'); 
const dbCheck = require('./db/dbCheck') // подключение скрипта проверки соединения с БД
const indexRouter = require('./routes/index');
const advertisementRouter = require('./routes/advertisementRouter');
const registrationRouter = require('./routes/registrationRouter');
const categoryRouter = require('./routes/category');


// ! Инициализируем приложение
const app = express() // создали экземпляр сервера
const session = require('express-session');
const PORT = process.env.PORT || 3002 // создали константу с портом
dbCheck() // вызов функции проверки соединения с базоый данных

// ! Подключаем миддлварки
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret:process.env.SECRET,
    saveUninitialized:true
  })
)

// ! -->Тут пишем роуты<--
app.use('/', indexRouter);
app.use('/add', advertisementRouter)
app.use('/registration', registrationRouter)
app.use('/category', categoryRouter);

// ! Начинаем слушать порт для запуска сервера
app.listen(PORT, () => { // начинаем слушать сервер на указанном порте
  console.log(`Сервер запущен на порте ${PORT}`)
})


module.exports = app;
