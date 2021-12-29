import axios from 'axios'
import qs from 'qs'

const getConfig = () => ({
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'pt-BR'
  },
  paramsSerializer(params) {
    return qs.stringify(params, {
      arrayFormat: 'repeat'
    })
  }
})

const axiosCreate = (baseURL, config) => axios.create({
  // mode: 'cors',
  baseURL,
  ...config
})

export {
  getConfig,
  axiosCreate
}
