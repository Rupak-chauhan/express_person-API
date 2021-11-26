const express = require('express');
const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    tech:{
        type: String,
        required: true
    },
    subscribed:{
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Person', personSchema);