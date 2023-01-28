const mongoose = require('mongoose')

const checkListSchema = mongoose.Schema({
    name:{type: String, require: true}
})

module.exports = mongoose.model('Checklist', checkListSchema);