const mongoose = require('mongoose')

const schema = mongoose.schema

const categoryschema = new schema({
    categoryName:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

module.exports = Category = mongoose.model('Category',categoryschema)