require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const session = require('express-session');
const cookieParser = require('cookie-parser')
const FileStore = require("session-file-store")(session);
const path = require('path'); 
const dbCheck = require('./db/dbCheck') // подключение скрипта проверки соединения с БД
const indexRouter = require('./routes/index');
const addRouter = require('./routes/addRouter');
const registrationRouter = require('./routes/registrationRouter');
const loginRouter = require('./routes/authRouter');
const logoutRouter = require('./routes/logOutRouter');
const categoryRouter = require('./routes/category');
const authRouter = require('./routes/chekAuthRouter');
const accountRouter = require('./routes/accountRouter');
const dealRouter = require('./routes/dealRouter');


// ! Инициализируем приложение
const app = express() // создали экземпляр сервера

const PORT = process.env.PORT || 3002 // создали константу с портом
dbCheck() // вызов функции проверки соединения с базоый данных

const sessionConfig = {
  store: new FileStore(),
  key: process.env.COOKIE_NAME,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: { maxAge: 1000* 60* 60 * 24},
};

// ! Подключаем миддлварки
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(cookieParser())
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use("/public", express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session(sessionConfig)
)


// ! -->Тут пишем роуты<--
app.use('/', indexRouter);
app.use('/add', addRouter)
app.use('/registration', registrationRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/category', categoryRouter);
app.use('/auth' , authRouter)
app.use('/profile', accountRouter);
app.use('/deal', dealRouter)


// ! Начинаем слушать порт для запуска сервера
app.listen(PORT, () => { // начинаем слушать сервер на указанном порте
  console.log(`Сервер запущен на порте ${PORT}`)
})


module.exports = app;
