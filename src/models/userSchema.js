const mongoose = require("mongoose");


// 스키마 생성
const userSchema = new mongoose.Schema({
  id: {type:String, required:true, unique:true},
  pwd:String,
  name:String,
  confirm:String
});




module.exports = mongoose.model('users', userSchema);