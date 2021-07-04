const userRouter = require('./user')
const productRouter = require('./product')
const categoryRouter = require('./category')
const purchaseRouter = require('./purchase')
const cartRouter = require('./cart')


function initializeRoutes(app){
    app.use("/api", userRouter);
    app.use("/api", productRouter);
    app.use("/api", categoryRouter);
    app.use("/api", purchaseRouter);
    app.use("/api", cartRouter);
}

module.exports={initializeRoutes}