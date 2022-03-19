require("dotenv").config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

 // Database setup
mongoose.connect(process.env.MONGO_URL,() => {
	console.log('Mongo conectado')
}) 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/file', express.static(path.resolve(__dirname, '..','temp','uploads')))

app.use(require('./routes.js'))

app.listen(process.env.PORT || 3000)