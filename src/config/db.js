const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const mongoDB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@login.dokpo.mongodb.net/sphinx?retryWrites=true&w=majority`;
mongoose.connect(  
    mongoDB,
    {useNewUrlParser:true, useUnifiedTopology:true}
);

const db = mongoose.connection;



// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   // app.listen(port, ()=> {
//   //     console.log(`웹 서버가 ${port}에서 실행`)
//   // });
//   console.log("몽고디비 connected");
// });

module.exports = db;
