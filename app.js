const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const db = require('./src/config/db');

const PORT = process.env.PORT || 3000;

const home = require('./src/routes/home')


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(__dirname + '/src/public'));

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'pug');


app.use('/', home);


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
 
  console.log("몽고디비 connected");
  
});


app.listen(PORT, () => {
    console.log(`웹 서버가 ${PORT}에서 실행되었습니다.`);
});