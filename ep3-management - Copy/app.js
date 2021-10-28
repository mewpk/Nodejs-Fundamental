const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.urlencoded({extended :true}))
app.use(express.json)
app.use(cors())

const userRouter = require("./src/modules/user/user.route")

app.use('/user',userRouter)


app.get('/',(res,req)=>{
    res.send("user management Is running ...")
})

const PORT = process.env.PORT || 3030
app.listen(PORT,() =>{
    console.log(`user management is running in PROT [${PORT}]`)
})

