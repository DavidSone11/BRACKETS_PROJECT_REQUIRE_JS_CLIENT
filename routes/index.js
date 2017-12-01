var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post("/api/v1/user",function(req,res,next){

    console.log("DSADASD"+req);


})



module.exports = router;
