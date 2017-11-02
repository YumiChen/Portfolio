var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");


router.get("/",function(req,res){
  res.sendfile('index.html', {root: './public'});
});

module.exports = router;