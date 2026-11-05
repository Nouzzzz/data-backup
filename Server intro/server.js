// echo "node_modules/" >> .gitignore

import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const arr = [1, 2, 3, 4, 5]

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    //  res.send('Hey there')

    res.json({
        message: "Complete",
        success: true,
        list: arr,
   
    })
})

app.get('/about', (req, res) => {
    res.send('Hello about')
})

app.listen(port, () => {
    console.log('server running')
})
