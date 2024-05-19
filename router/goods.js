const express=require("express")
const router=express.Router()

router.get("/goods",(req,res)=>{

    const id=5
    const newUser={
        id,
            name:"123",
            age:18,
        gender:"man",
        address:"wuhan"

    }

    res.send(newUser)
})


module.exports = router