const isObject = collection => Object.prototype.toString.call(collection) === '[object Object]'

const forEach = (collection, callback, scope) => {
  if (isObject(collection)) {
    for (const property in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, property)) {
        callback.call(scope, collection[property], property, collection)
      }
    }
  } else {
    const size = collection.length

    for (let i = 0; i < size; i += 1) {
      callback.call(scope, collection[i], i, collection)
    }
  }
}

export {
  forEach,
  isObject
}
