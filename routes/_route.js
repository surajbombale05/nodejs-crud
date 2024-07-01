const express = require('express');
const service = require('../services/_services');
const router = express.Router();

router.get('/getAll' , (req , res)=>{
    service.getAll().then(data =>{
        res.status(200).json(data);
    });
});

router.get('/getbyname/:name',(req , res)=>{
    service.getByName(req.params.name).then(data=>{
        res.status(200).json(data);
    });
});

router.get('/getbyid/:id',(req , res)=>{
    service.getById(req.params.id).then(data=>{
        res.status(200).json(data);
    });
});

router.post('/save' , (req , res)=>{
    service.save(req.body).then(data =>{
        res.status(201).json(data);
    });
});

router.put('/update/:id' , (req , res)=>{
    service.update(req.params.id , req.body).then(result =>{
        res.json(result);
    });
});

router.delete('/delete/:id' ,(req , res)=>{
    service.delete(req.params.id).then(data=>{
        res.json(data);
    });
});

module.exports = router ;