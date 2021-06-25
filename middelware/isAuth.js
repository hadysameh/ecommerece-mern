const jwt = require('jsonwebtoken')
const UserModel = require('./../models/User')
const isAuth = (req,res,next)=>{
    let token
    if(req.headers.authorization){
        token = req.headers.authorization.replace('Bearer ','')
        jwt.verify(token, process.env.jwtSecret, function(err, decoded) {
        
        UserModel.checkIfEmailExists(decoded.email,(isEmailExist,user)=>{
            if(isEmailExist){
                req.user=user            
                next()
            }else{
                res.json({
                    // isUser:isEmailExist
                    status:'unauthorized'
                })
            }
        })
      });
    }
    else{
        res.status(403).json({
            status:'unauthorized'
        });
    }
}

module.exports=isAuth