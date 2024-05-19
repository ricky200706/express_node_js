

const express=require("express")

const app=express()
const config=require("config")
const port=config.get("server.port")

app.get("/",(req,res)=>{
    console.log(req)
    console.log(res)
    console.log("someone visit")
    res.send("hello world")
})

//rooter
const userRouter=require("./router/user")
const goodsRouter=require("./router/goods")

app.use(userRouter)
app.use(goodsRouter)

app.use((req, res, next) => {

    if(req.path !== '/' && !req.path.includes('.')){
        res.set({
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': req.headers.origin || '*',
            'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
            'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
            'Content-Type': 'application/json; charset=utf-8'
        })
    }
    req.method === 'OPTIONS' ? res.status(200).end() : next()
})


// parse frontend data
app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.listen(port,()=>{
    console.log(`the server has already started: http://localhost:${port}/`)
})