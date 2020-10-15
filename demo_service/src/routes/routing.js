const express = require('express');
const routing = express.Router();

const array=[]
routing.post('/addDetails',(req,res,next)=>{
    let data=req.body
    array.push(data)
    console.log(detailsArr)
    res.json("Success")

})

routing.get("/getDetails",(req,res,next)=>{
    console.log(array)
    res.status(200).json(array)
})



module.exports = routing;