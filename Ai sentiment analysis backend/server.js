import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.get('/analysis', (req, res) => {
    res.json({ message: 'Hello' })
})

app.post('/analysis', async (req, res) => {
    const { text } = req.body

    const response = await fetch(`https://api.api-ninjas.com/v1/sentiment?text=${encodeURIComponent(text)}`,
        {
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        }
    )

    const data = await response.json()

    res.json(data)
})

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})
