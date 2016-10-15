#### Sample Usage

Setup the plugin

````
const mongoose = require('mongoose')
const whitelist = require('mongoose-whitelist')

const UserSchema = new mongoose.Schema({
   name: {
      first: { type: String },
      last: { type: String }
   },
   email: { type: String },
   encrypted_password: { type: String }
})

UserSchema.plugin(whitelist, {
   attributes: ['name', 'email']
})

mongoose.model('user', UserSchema)
````

Applying the plugin

````
const User = mongoose.model('user')
const user = new User()

const payload = {
   'name.first': 'John',
   'name.last': 'McGee',
   email: 'john@test.co',
   encrypted_password: 'terrible-password'
}

// Only set whitelisted properties
// (encrypted_password will not be set)
user.set(User.whitelist(payload))
````

#### License

MIT. Copyright (c) 2016 Mother Co.
