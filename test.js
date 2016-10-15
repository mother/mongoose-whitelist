const chai = require('chai')
const whitelist = require('./index')

const expect = chai.expect
const schema = { statics: {} }

whitelist(schema, {
   attributes: ['name', 'email']
})

const result = schema.statics.whitelist({
   'name.first': 'John',
   'name.last': 'McGee',
   encrypted_password: 'test-password',
   email: 'john@test.co'
})

describe('mongoose-whitelist', () => {
   it('Should pick the whitelisted properties', () => {
      expect(result).to.have.property('name.first')
      expect(result).to.have.property('name.last')
      expect(result).to.have.property('email')
      expect(result).to.not.have.property('encrypted_password')
   })
})
