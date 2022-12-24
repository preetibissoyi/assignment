const express = require('express')
const mongoose = require('mongoose')
const route = require('./router/routers')
const app = express()

app.use(express.json())

mongoose.set('strictQuery', true)

mongoose.connect('mongodb+srv://nnsahu2022:Sahurk012@mycluster.ne522qz.mongodb.net/customerProject', { useNewUrlParser: true })
    .then(() => { console.log('MongoDB is connected') })
    .catch((error) => { console.log(error) })

app.use('/', route)

app.listen(3000, function () {
    console.log('Express app running on port ' + 3000)
})
