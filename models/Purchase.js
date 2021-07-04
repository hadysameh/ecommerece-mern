const mongoose = require('mongoose')

const schema = mongoose.Schema

const purchaseschema = new schema({
    product:{
        type: schema.Types.Mixed,
        required:true
    },
    user:{
        type:  schema.Types.Mixed,
        required:true
    }
},
{
    timestamps:true
})
purchaseschema.index({"product._id":-1})
module.exports = Purchase = mongoose.model('Purchase',purchaseschema)