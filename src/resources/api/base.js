import _defaultsDeep from 'lodash/defaultsDeep'
import {
  validateRequest,
  onResponseError
} from './interceptors'
import { getConfig, axiosCreate } from './apiConfig'

const api = (baseURL, config) => {
  const axiosApi = axiosCreate(baseURL, config)

  axiosApi.request = (path, options) => {
    const mergedOptions = _defaultsDeep(options, getConfig())
    return axiosApi(path, mergedOptions)
      .then(resp => resp)
      .catch((error) => {
        throw error
      })
  }

  axiosApi.interceptors.request.use(validateRequest)
  axiosApi.interceptors.response.use(null, onResponseError)

  return axiosApi
}

export default api
