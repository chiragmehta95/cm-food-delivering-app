import api from './api'

const getTodayMenu = async () => {
  const response = await api.get(
    '/api/menu/today'
  )

  return response.data
}

export default getTodayMenu