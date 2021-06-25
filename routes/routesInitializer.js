const userRouter = require('./user')
const productRouter = require('./product')
const categoryRouter = require('./category')


function initializeRoutes(app){
    app.use("/api", userRouter);
    app.use("/api", productRouter);
    app.use("/api", categoryRouter);

}

module.exports={initializeRoutes}