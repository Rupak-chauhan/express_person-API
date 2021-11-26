const express = require('express');
const { Mongoose } = require('mongoose');
const person = require('../models/person');
const router = express.Router();
const Person = require('../models/person');

router.get('/', async (req, res)=>{
    try{
        const persons = await Person.find();
        res.json(persons);
    }
    catch(err){
        res.send("error" + err);
    }
});
router.get('/:id', async (req, res)=>{
    try{
        const person = await Person.findById(req.params.id);
        res.json(person);
    }
    catch(err){
        res.send("error" + err);
    }
});
router.get('/:id', async (req, res)=>{
    try{
        const person = await Person.findById(req.params.id);
        res.json(person);
    }
    catch(err){
        res.send("error" + err);
    }
});

router.post('/addperson', async (req, res) =>{
    const person = new Person({
        name: req.body.name,
        tech: req.body.tech,
        subscribed: req.body.subscribed
    })

    try{
        const p1 = await person.save()
        res.json(p1);
    }catch(err){
        res.send("error");
    }
});
router.patch('/:id', async (req, res)=>{
    try{
        const person = await Person.findById(req.params.id);
        person.subscribed = req.body.subscribed;
        const a1 = await person.save()
        res.json(a1);
    }
    catch(err){
        res.send("error" + err);
    }
});
router.delete('/:id', async (req, res)=>{
    try{
        const person = await Person.findById(req.params.id);
        await person.remove();
        res.send("Romoved successfully")
    }
    catch(err){
        res.send("error" + err);
    }
});

module.exports = router;