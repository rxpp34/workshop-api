const { query } = require("express");
const db=require("../db.config")

const GetAllResponse=((req,res) => {
    db.all("SELECT * FROM Reponse",(err,rows) => {
        if (err) throw err ;
        res.send(rows)
    })
    
})


const GetResponseByQuestion=((req,res) => {
    const query="SELECT * FROM Reponse WHERE UID=?"
    db.all(query,[req.body.ReponseUID],(err,rows) => {
        if (err) throw err ;
        res.send(rows)
    })
    
})

module.exports={GetAllResponse,GetResponseByQuestion}