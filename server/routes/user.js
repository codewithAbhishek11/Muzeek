const express = require('express');
const router = express.Router();
const db = require("../db")
const util = require("../util");
const cryptoJS = require("crypto-js");
const { userInfo } = require('os');


router.post('/signup', (request,response)=>{
    const {fName, lastName,email,password} = request.body;
    const encryptedPAssword = cryptoJS.MD5(password);
    const query = `insert into user (fName, lastName,email,password) 
                    values ('${fName}','${lastName}','${email}','${encryptedPAssword}')`

    db.query(query,(error,result)=>{
        response.send(util.createResult(error,result))
    })
})

router.post('/signin',(request,response)=>{
    const {email,password} = request.body;
    const encryptedPAssword = cryptoJS.MD5(password)
    const query = `select * from user where email='${email}' and password='${encryptedPAssword}'`
    db.query(query,(error,result)=>{
        if(error){
            response.send(util.createError(error))
        }else{
            if(result.length===0){
                response.send("user with the email and password does not exists")
            }
            else{
                response.send(util.createResult(error,result));
            }
        }
        
    })   
})


router.get('/profile/:id',(request,response)=>{
    const {id} = request.params;
  
    const query = `select * from user where id=${id}`
    db.query(query,(error,result)=>{
        if(error){
            response.send(util.createError(error))
        }else{
            if(result.length===0){
                response.send("user with the provided ID does not exists")
            }
            else{
                response.send(util.createResult(error,result));
            }
        }
        
    })   
})

router.delete('/profile/:id',(request,response)=>{
    const {id} = request.params;
  
    const query = `delete from user where id=${id}`
    db.query(query,(error,result)=>{
        if(error){
            response.send(util.createError(error))
        }else{
            if(result.length===0){
                response.send("user with the provided ID does not exists")
            }
            else{
                response.send(util.createResult(error,result));
            }
        }
        
    })   
})

module.exports = router;