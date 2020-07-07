const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const stripeRoutes = require('./routes/stripe');


const app = express();
app.use(cors());
app.use(cookieParser());




    
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.use(fileUpload({
  useTempFiles: true
})); 

app.use('/api/v1', express.static('public'));


app.use('/api/v1/stripe',  stripeRoutes);











module.exports = app;