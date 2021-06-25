const userRouter = require('./user')
const productRouter = require('./product')


function initializeRoutes(app){
    app.use("/api", userRouter);
    app.use("/api", productRouter);
}

module.exports={initializeRoutes}