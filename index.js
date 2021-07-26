require('dotenv').config()
const express = require('express')
const cors = require('cors') 
const app = express()
const mongoose = require('mongoose')
const {initializeRoutes} = require('./routes/routesInitializer')

const bodyParser = require('body-parser')

const removeBPFromFullfillingOrders=(fn)=>{
    return function(req, res, next) {
        if (req.path === '/api/purchase/webhook' && req.method === 'POST') {
            //here will go without adding bodyparser middleware
            next();
        } else {
            //here wiil add the middleware by passing (req, res, next) to the bodyparser middelware
            fn(req, res, next);
        }
    }
}



app.use(cors())

app.use('/uploads',express.static('./uploads'));
app.use(removeBPFromFullfillingOrders(bodyParser.urlencoded({extended: false})));
app.use(removeBPFromFullfillingOrders(bodyParser.json()));

app.get('/',(req,res)=>{
    res.send('hi you')
})

initializeRoutes(app)
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.mongodbConnectionStr,
{ useNewUrlParser: true ,useUnifiedTopology: true}
)
.then(()=>{
    console.log("MongoDB successfully connected")  
})

app.listen(process.env.port)