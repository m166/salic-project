import _filter from 'lodash/filter'
import _get from 'lodash/get'
import _cloneDeep from 'lodash/cloneDeep'
import Api from 'resources/api/apiSalic'

export const validateRequestAndReturnData = (res) => {
  const error = _get(res, 'status', null) !== 200
  if (!error) {
    return _get(res, 'data', [])
  }
  const errorMessage = _get(res, 'data.message', 'Houve um erro')
  console.error(errorMessage)
  return []
}

export const catchError = (err) => {
  console.error('requisition catch error: ', err)
  const errorMessage = _get(err, 'data.message', 'Houve um erro')
  console.error(errorMessage)
}

export const buildRequestParamsObj = (data = {}, headers, method = 'POST') => {
  const defaultHeaders = Api.getHeaders()
  return {
    data,
    method,
    headers: headers || defaultHeaders
  }
}

export const doMassRequest = (selectedRowsIndex, allRows, request, requestCallback) => {
  const arrOfElements = _filter(allRows, item => selectedRowsIndex.includes(item.id))
  request(arrOfElements, requestCallback)
}

export const getStatus = (data) => {
  const errors = _get(data, 'erros', [])
  const finished = _get(data, 'terminado', '')
  if (errors && errors.length) {
    return 'fail'
  }
  if (finished) {
    return 'success'
  }
  return 'sending'
}

export const omitKeys = (data, keys) => {
  const newData = _cloneDeep(data)
  keys.forEach(el => delete newData[el])
  return newData
}
