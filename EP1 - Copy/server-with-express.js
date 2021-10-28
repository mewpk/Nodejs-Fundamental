const express = require('express')
const app = express()

app.get('/',(request, response)=>{
    response.send('Hello world').status(200)
})

const PORT = process.env.PORT || 3030
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})