import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://food-ordering-backend.onrender.com'
})

export default api