const express = require("express");
const router = express.Router();

require("../database/connection")
const User = require("../module/userSchema")

// const middleware = (req,res, next) => {
//     console.log("running middleware Successfully")
//     next();
// }


router.get ('/' , (req, res ) =>{
    res.send ("home page testing router ")
    console.log(User)
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

    User.findOne({email : email})
    .then((userExits)=>{
        if(userExits) {
            return res.status(422).json({error: "User Already Exits"})
        }

        const user =  new User({ name, email, phone, work, password, confirmPassword })
        user.save().then(()=>{
            res.status(201).json({ message: "User Successfully Registered" })
        })
        .catch((err)=> {
            res.status(500).json({ error: "Not Registered" })
        })


    })
    res.json({message: req.body})
    console.log(req.body);

});

module.exports = router;