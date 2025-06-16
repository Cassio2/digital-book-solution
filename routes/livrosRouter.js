const router = require('express').Router();
const livroController=require("../controller/livroController")


router.get('/', livroController.listarLivros);

module.exports=router;
