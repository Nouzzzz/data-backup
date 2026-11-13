import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import employeeRouters from './routers/employeeRouters.js'

dotenv.config()

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())

app.use('/employees', employeeRouters)

app.listen(port, () => {
    console.log(`server running at ${port}`)
})

connectDB()