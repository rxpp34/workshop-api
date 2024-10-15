const express=require("express")
const router=express.Router() ; 
const Response=require("../Controller/Response")


router.get("/AllResponse",Response.GetAllResponse)
router.get("/GetReponseByQuestion",Response.GetResponseByQuestion)


module.exports=router