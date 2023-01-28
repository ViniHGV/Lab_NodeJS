const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name:{type: String, require: true},
    done: {type: Boolean, default:false},
    ckeckList:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CheckList',
        require: true
    }
})

module.exports = mongoose.model('Checklist', taskSchema);