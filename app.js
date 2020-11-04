const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const morgan =require('morgan');
// const cors = require('cors');

// import Routes
const ProductRoutes= require('./routes/ProductRoutes');


//use method
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(cors());

//Routing
app.use('/products',ProductRoutes);  


module.exports= app;