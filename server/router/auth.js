const express = require("express");

const router = express.Router();

const middleware = (req,res, next) => {
    console.log("running middleware Successfully")
    next();
}

router.get ('/' , (req, res ) =>{
    res.send ("home page testing router ")
});

router.get ('/about', middleware,(req, res ) =>{
    res.send ("about page testing")
    console.log("running about testing")
});

router.get ('/contact', (req, res ) =>{
    res.send ("contact page testing")
});

router.get ('/login' , (req, res ) =>{
    res.send ("signin page testing")
});

router.post ('/register' , (req, res ) =>{

    const {name,email,phone,work,password,confirmPassword} = req.body;
    if ( !name  || !email || !phone || !work || !password || !confirmPassword ) {
        res.json({error: "please fill the field properly"})
    }

    console.log(req.body)
    res.json({ message: req.body});


});

module.exports = router;