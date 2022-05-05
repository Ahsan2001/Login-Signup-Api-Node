const express = require("express");
const app = express();
//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// security intailizing 
const dotenv = require("dotenv");
dotenv.config( { path: './config.env'} );



// get database from mongoDB Server 
require("./database/connection")
const PORT = process.env.PORT;




const middleware = (req,res, next) => {
    console.log("running middleware Successfully")
    next();
}







app.get ('/about' , middleware, (req, res ) =>{
    res.send ("about page testing")
    console.log("running about testing")
});

app.get ('/contact', (req, res ) =>{
    res.send ("contact page testing")
});


app.get ('/signin' , (req, res ) =>{
    res.send ("signin page testing")
});

app.get ('/signup' , (req, res ) =>{
    res.send ("signup page testing")
});


app.listen(PORT, () =>
    console.log(`server running on http://localhost:${PORT}`)
);