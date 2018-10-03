const express = require("express");
const app = express()

const https = require('https');

app.get("/",function (req,res) {
    res.sendFile(__dirname + "/index.html")
})

app.listen((process.env.PORT || 3000),function(){
  console.log("EECS 4314 listening on port 3000!")

})

app.use(express.static('file'))



/**********keep awake********************/
setInterval(function() {
    https.get("https://eecs-4314.herokuapp.com/");
}, 300000); // every 5 minutes (300000)
