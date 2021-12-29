import { getIn, setIn } from 'formik'
import { forEach } from './list'

const get = (obj, path, defaultValue = null) => getIn(obj, path, defaultValue)

const pickBy = (object, condition) => {
  const newObject = {}

  forEach(object, (value, key) => {
    if (value !== condition) {
      newObject[key] = value
    }
  })

  return newObject
}

export {
  get,
  setIn,
  pickBy
}
