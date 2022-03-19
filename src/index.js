require("dotenv").config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
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

app.listen(3000, (req,res) => {
	console.log('Servidor rodando')
})