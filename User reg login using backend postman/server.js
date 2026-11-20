import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/auth', userRoutes)

app.listen(port, () => {
    console.log(`server running at ${port}`)
})

connectDB()