const express = require("express");
const router = express.Router();


// const middleware = (req,res, next) => {
//     console.log("running middleware Successfully")
//     next();
// }





router.get ('/' , (req, res ) =>{
    res.send ("home page testing router ")
});

router.get ('/about',(req, res ) =>{
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
        res.status(422).json({error: "please fill the field properly"})
    }


});

module.exports = router;