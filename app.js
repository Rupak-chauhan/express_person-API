const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/personxy';
const placeRoutes = require('./routes/person');
const app = express();

mongoose.connect('mongodb+srv://username:password@cluster0.9nbtc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    app.listen(8000, ()=>{
        console.log("server connected");
    });
    console.log("Databaseconnected")
})
.catch(err=>{
    console.log(err)
})

app.use(express.json());

app.use('/person', placeRoutes);
