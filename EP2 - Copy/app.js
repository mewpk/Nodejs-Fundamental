const express = require('express')
const cors = require('cors')

const productsRoute = require('./src/modules/products/products.route')

const app = express()

app.use(express.urlencoded({extended :true}))
app.use(express.json())
app.use(cors())

app.use('/product',productsRoute)

app.get('/',(request, response)=>{
    response.send('Hello world').status(200)
})

const PORT = process.env.PORT || 3030
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})