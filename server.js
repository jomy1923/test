const express = require('express')
const app = express()
var path = require('path');
const PORT = 5000
const db = require('./confg/connection')
var usersRouter = require('./routes/user');
var hbs = require('express-handlebars')
var dotenv=require('dotenv').config()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', usersRouter);
app.use(express.static('public'))
app.engine('hbs',hbs({extname: '.hbs',defaultLayout:'layout',layoutDir:__dirname+'/views/layouts/'}));


db.connect((err)=>{
    if(err){
      console.log(err)
    }else{
      console.log('database connected')
    }
  })
  


app.listen(PORT,()=>{
    console.log('server running on ',PORT);
})



