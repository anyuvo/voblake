require('dotenv').config()
const express = require("express")
const {Sequelize} = require("sequelize");
const router = require('./routes/index')

//Импортируем объект-конструктор из файла db.js
const sequelize = require('./db')

//Из экспресса создаем сервер
const app = express()
//Из файла .env берем порт
const PORT = process.env.PORT || 5000
//импортируем модели
const models = require('./models/models')
const cors = require('cors')
//Добавляем cors, чтобы можно было отправлять запросы из браузера
app.use(cors())
//Чтобы приложение могло парсить json-формат
app.use(express.json())
//Адрес по которому роутер должен обрабатываться в нашем случае '/api'
app.use('/api', router)



//Функция, которая подключается к базе данных и запускает сервер
const start = async () => {
    try {
        await sequelize.authenticate() //Устанавливает подключение к базе данных
        await sequelize.sync() //Сверяет состояние базы данных со схемой данных
        app.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`)
        })
    } catch (e) {

    }
}

start()