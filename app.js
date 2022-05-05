const express = require("express");
const app = express();


const dotenv = require("dotenv");
dotenv.config( { path: './config.env'} );



require("./database/connection")
const PORT = process.env.PORT;




// app.use((req,res, next) => {
//     console.log("running middleware Successfully")
//     next();
// })


const middleware = (req,res, next) => {
    console.log("running middleware Successfully")
    next();
}






app.get ('/' , (req, res ) =>{
    res.send ("home page testing")
});


// app.get ('/about' , (req, res ) =>{
//     res.send ("about page testing")
//     console.log("running about testing")
// });


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