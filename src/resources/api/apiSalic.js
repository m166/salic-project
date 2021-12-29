import api from './base'

const baseApi = api('http://api.salic.cultura.gov.br/v1')

const Api = {
  request(path, options) {
    return baseApi.request(path, options)
  },
  getHeaders() {
    const headers = {
      'Content-Type': 'application/json'
    }
    return headers
  },
  getFileHeaders() {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return headers
  },
  getLoginHeaders() {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return headers
  }
}

export default Api
