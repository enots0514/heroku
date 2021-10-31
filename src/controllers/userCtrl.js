const mongoose = require('mongoose');

const User = require('../models/userSchema');



 let register = () => {

 }

module.exports.usercheck = (req, res, next) => {

    User.find({id : req.body.id})
       .then( user => {
          
             if(user.length>0) {
                res.render('register', {whyfail:"아이디가 이미 존재합니다."});
                return;
             }
             else{
                 next();}
         });
};

module.exports.usersave = (req, res) => {

 if(req.body.pwd !== req.body.confirm) {
        res.render('register', {whyfail:"비번이 일치하지 않습니다."});
            return;
           } else  {
                
            let customer = new User({
                id : req.body.id,
                name : req.body.name,
                pwd : req.body.pwd
             });
     
             customer.save()
                       .then( result => 
                        res.render('index', {success:`${result.name}님 회원가입에 성공하셨습니다.`})
                        );
                    }    
};






