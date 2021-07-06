import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
})

const API = {
  getList(list) {
    return instance.get(list).then(res => res.data)
  },
}

export default API
