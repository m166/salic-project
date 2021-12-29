import Api from './api/apiSalic'
import { buildRequestParamsObj } from 'common/utils/requests'

const baseUrl = '/projetos'

const getParams = (data) => {
  let params = '?'
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      params += params.length > 1 ? `&${key}=${data[key]}` : `${key}=${data[key]}`
    }
  })
  return params
}

const Projects = {
  getProjects(data) {
    return Api.request(`${baseUrl}/${getParams(data)}`, buildRequestParamsObj(data, Api.getHeaders(), 'GET'))
  }
}

export default Projects
