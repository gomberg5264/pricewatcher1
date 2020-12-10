const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  phone: Number,
  passwordHash: String,
  priceWatchers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Watcher'
  }]
})

const User = mongoose.model('User',userSchema)

module.exports = User
