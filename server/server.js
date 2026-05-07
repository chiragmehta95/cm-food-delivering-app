const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Food Ordering API Running')
})

app.get('/api/menu/today', (req, res) => {
  res.json([
    { id: 1, name: 'Veg Thali', price: 80 },
    { id: 2, name: 'Paneer Rice', price: 120 }
  ])
})

app.post('/api/orders/create', (req, res) => {
  res.json({
    success: true,
    message: 'Order placed successfully'
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})