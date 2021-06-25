const mongoose = require('mongoose')

const schema = mongoose.Schema

const categoryschema = new schema({
    categoryName:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

categoryschema.index({ categoryName: 1 }); 
module.exports = Category = mongoose.model('Category',categoryschema)