const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://food-ordering-backend.onrender.com'
    ]
    
    // Allow all Vercel preview and production URLs
    if (origin && (origin.includes('vercel.app') || allowedOrigins.includes(origin))) {
      callback(null, true)
    } else if (!origin) {
      // Allow requests with no origin (mobile apps, curl requests)
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Backend Running')
})

app.get('/api/menu/today', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Veg Thali',
      price: 80
    },
    {
      id: 2,
      name: 'Paneer Rice',
      price: 120
    },
    {
      id: 3,
      name: 'Dal Rice',
      price: 60
    }
  ])
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})
