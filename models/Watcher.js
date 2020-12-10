const mongoose = require('mongoose')

const watcherSchema = new mongoose.Schema({
  url: String,
  maxPrice: Number,
  pastPrices: Array,
  title: String,
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  watching: Boolean
})

const Watcher = mongoose.model('Watcher',watcherSchema)

module.exports = Watcher
