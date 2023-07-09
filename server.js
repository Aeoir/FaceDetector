const express = require('express');
const bodyParser = require('body-parser'); 
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
//const image = require('./controllers/image');


// const database={
//   users:[
//   {
//     id:'123', name:'aryan', emai:'aryan', password:'aryan'
//   }



//   ]
// }


const db = knex({
  
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'dbms'
  }
});

console.log(db.select('*').from('users')) ;
const app = express();

app.use(cors())
app.use(express.json()); 

//signin post, register post, /profile/user get, image put
app.get('/', (req, res)=> { res.send(db.users) })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
//app.put('/image', (req, res) => { image.handleImage(req, res, db)})
//app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})