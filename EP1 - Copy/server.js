const HTTP = require('http')
const PORT = process.env.PORT || 3030

const app = HTTP.createServer((request,response) =>{
    response.statusCode = 200
    response.setHeader('Content-Type','text/plain')
    response.end('Hello World')
})

app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`)
})