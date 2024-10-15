
const db=require("../db.config")

const GetAllQuestion = ((req,res) => {
    const query="Select * FROM Question"
    db.all(query, [], (err,rows) => {
        if (err) throw err ; 
        res.send(rows)
    })
})


const GetQuestion=((req,res) => {
    const query="SELECT * FROM Question WHERE UID=?"
    db.all(query,[req.body.QuestionUID] ,(err,rows) => {
        if (err) throw err ; 
        res.send(rows)
    })
})


module.exports={GetAllQuestion,GetQuestion}