import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import bookschema from './models/bookModel.js'

dotenv.config()

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())

app.get('/',(req, res) => {
     res.send("Hiii")
})

app.post('/books', async (req, res) => {

     if(!req.body.title || !req.body.author || !req.body.price){
        return res.json({message: "Please provide all the required fields"})
     }

     const book = await bookschema.create(req.body)
     const { title, author, price } = req.body
     const response = { title, author, price}     
     res.json(response)

})

app.get('/books', async (req, res) => {

    const books = await bookschema.find()
     res.json(books)
})

app.listen(port, () => {
    console.log(`server running at ${port}`)
})

connectDB()
