// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const test2 = require('./test2')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/', test2)

// router.use('/abc/', test)//Я:так можна задати префікс для всіх ендпоїнтів. А в src/route/test.js прописати '/create', і тоді цей
//ендоїнт відкриється за посиланням http://localhost:3000/abc/create

// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
