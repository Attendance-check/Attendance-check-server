app.use(express.static('public'))

var express = require('express')

var app = express()

app.listen(3000main, function() {
    console.log("start! express server on port 3000")
})

app.get('/', function(req,res) {
    res.send("<h2>hi friend!</h2>")
})


app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/public/main.html")
})
