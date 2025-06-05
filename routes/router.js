const express = require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('home',{title:'Home'});
} );

router.get("/livros",(req,res)=>{
    res.render("livros",{title:"Livros"})
})

module.exports=router;