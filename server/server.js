const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(cors({
  origin: [
    'https://cm-food-delivering-app.onrender.com',
    'https://cm-food-delivering-1j4pgs5db-chiragmehta95s-projects.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173'
  ]
}))

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
