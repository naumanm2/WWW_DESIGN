import axios from 'axios'
const baseUrl = '/api/pins'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const createPin = (pin) => {
  const request = axios.post(baseUrl, pin)
  return request.then(response => response.data)
}

export default { getAll, createPin }
