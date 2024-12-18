const express = require('express')
const app = express()

app.use("/hello", function(req, res) {
    res.send('Hello hello hello')
})
app.use("/test", function(req, res) {
    res.send('Hello from the server and and hii how are you what are u doing!')
})

app.listen(3000, () => {
    console.log("server is successfully on the port 7777...")
})