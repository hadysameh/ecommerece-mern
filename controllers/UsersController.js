const jwt = require('jsonwebtoken');
const User = require('./../models/User')


class UserController{

    static login(req,res){
        User.checkIfEmailExists(req.body.email,(isEmailExists,user)=>{
            if(isEmailExists){
                user.comparePassword(req.body.password,(err,isMatch)=>{
                    
                    if(isMatch)
                    {
                        let token =jwt.sign({email:req.body.email},process.env.jwtSecret)
                        res.status(200).send({
                            user,
                            token
                        });
                    }
                    else{
                        res.status(400).json({msg:'wrong password'});
                    }
                })
            }
            else{
                res.status(400).json({msg:'email was not found please register first'});
            }
        })
        
    }

    static register(req,res){
        // console.log(req.body)
        

            User.checkIfEmailExists(req.body.email,(isEmailExists,user)=>{
            if(isEmailExists){
                res.status(400).json({msg:'this email is already registered please login'});
                // res.json({status:'this email is already registered please login'});

            }
            else{
                
                    if(req.body.password==req.body.repassword){
                        // console.log('tring to register')
                        // const newUser = new User({
                        //     firstName:req.body.firstName,
                        //     lastName:req.body.lastName,
                        //     email:req.body.email,
                        //     password:req.body.password
                        // })
                        const newUser = new User({
                            ...req.body
                        })
                        // console.log(newUser)
                        let token =jwt.sign({email:req.body.email},process.env.jwtSecret)
                        // console.log('token created')
                        // console.log(token)
                        newUser.save()
                        .then(user=>{
                            // console.log('tring to save new user')
                            res.json({
                                user,
                                token
                            })
                        })
                        .catch(err=>{
                            res.send(err)
                        }) 
                            
                        
                    }
                    else{
                        res.json({
                            status:'please re-enter the correct password'
                        })
                    }
                
                
                
            }
        })
        
    }

    static logout(req,res){
        res.status(200).send({
            user:null,
            token:null
        });
    }

    static isAuth(req,res){

    }
}

module.exports=UserController