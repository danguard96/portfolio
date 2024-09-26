const path = require('path')

const mapping = ['components']

module.exports = (config) => {

  const alias = config.resolve.alias

  mapping.forEach((element) => {
    let name
    let resourcePath
    if (Array.isArray(element)) {
      name = element[0]
      resourcePath = element?.[1]
    } else {
      name = element
    }
    resourcePath = resourcePath ?? name
    alias[`@${name}`] = path.resolve(__dirname, `src/${resourcePath}`)
  })

  return config
}
