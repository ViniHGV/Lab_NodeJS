const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name:{type: String, require: true}
})

module.exports = mongoose.model('Checklist', taskSchema);