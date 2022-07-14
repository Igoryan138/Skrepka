require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
// const dbCheck = require('./db/dbCheck') // подключение скрипта проверки соединения с БД
const indexRouter = require('./routes/index');
const advertisementRouter = require('./routes/advertisementRouter');
const registrationRouter = require('./routes/registrationRouter');
const loginRouter = require('./routes/authRouter');
const logoutRouter = require('./routes/logOutRouter');
const session = require('express-session');
const FileStore = require("session-file-store")(session);
// const categoryRouter = require('./routes/category');


// ! Инициализируем приложение
const app = express() // создали экземпляр сервера

const PORT = process.env.PORT || 3002 // создали константу с портом
// dbCheck() // вызов функции проверки соединения с базоый данных

const sessionConfig = {
  store: new FileStore(),
  key: process.env.COOKIE_NAME,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: { expires: 24 * 60 * 60e3 },
};

// ! Подключаем миддлварки
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session(sessionConfig)
)

// ! -->Тут пишем роуты<--
app.use('/', indexRouter);
app.use('/advertisement', advertisementRouter)
app.use('/registration', registrationRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
// app.use('/category', categoryRouter);

// ! Начинаем слушать порт для запуска сервера
app.listen(PORT, () => { // начинаем слушать сервер на указанном порте
  console.log(`Сервер запущен на порте ${PORT}`)
})


module.exports = app;
