//Основной роутер нашего приложения(объединяет все другие роуты в которых созданы маршруты по которым отрабатывают те или иные методы)

//Получаем ротер из экспресса
const Router = require('express')
//Создаем объект роутера
const router = new Router()

//Импортируем под-роутеры
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter')

//Указываем из каких под-роутеров состоит наш роутер)
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router