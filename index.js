
module.exports = exports = (schema, options) => {
   const whitelistedAttributes = options.attributes
   schema.statics.whitelist = (obj) => {
      const isWhitelisted = key =>
         whitelistedAttributes.some(allowed =>
            allowed === key || key.indexOf(`${allowed}.`) === 0)

      return Object.keys(obj).reduce((newObj, property) => {
         if (isWhitelisted(property)) newObj[property] = obj[property]
         return newObj
      }, {})
   }
}
