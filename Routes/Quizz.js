const express=require("express")
const router=express.Router() ; 
const Quizz=require("../Controller/Quizz")


router.get("/AllQuestions",Quizz.GetAllQuestion)
router.get("/GetQuestion",Quizz.GetQuestion)


module.exports=router