import { get } from 'lodash'
import { formatToSelect } from './formatSelectLabels'

export const getData = obj => get(obj, 'data', [])

export const getResponseData = (data, label, value = 'id', ex = '', s = ' ') => {
  if (data.status !== 200) return []
  return formatToSelect(getData(data), label, value, ex, s)
}
