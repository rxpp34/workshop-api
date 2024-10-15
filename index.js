const port=3000 ; 
const express=require("express") ; 
const app=express() ;
const cors = require('cors');
const db=require("./db.config")


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(express.json());

const Quizz_routes=require("./Routes/Quizz")
const Response_routes=require("./Routes/Response")


app.get("/" , (req,res) => {
    res.send('[⚡] SERVER LISTENING ON PORT')
})


app.use("/Quizz",Quizz_routes)
app.use("/Response",Response_routes)


app.listen(port , console.log("\x1b[34m","[⚡] SERVER LISTENING ON PORT "+port))