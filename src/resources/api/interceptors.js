export const onResponseError = (error) => {
  return Promise.reject(error.response || error)
}

export const validateRequest = async (config) => {
  if (config.data && config.data.constructor.name === 'Object') {
    const result = Object.keys(config.data).reduce((acc, cur) => {
      if (
        config.data[cur] !== null &&
        config.data[cur] !== undefined
      ) {
        acc[cur] = config.data[cur]
      }
      return acc
    }, {})

    config.data = result
  }
  return config
}
