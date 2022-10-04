//https://vast-jade-bear-fez.cyclic.app
var express = require("express"); 

var app = express();

var path = require("path"); 

var HTTP_PORT = process.env.PORT || 8080;  

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('image'));

app.get("/test1", function(req, res){
    res.sendFile(path.join(__dirname, "/pages/test1.html"));
});

app.get("/", function(req, res){
    let resText = "<h2>Declaration</h2>";
    resText += "<p>I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has <br>been copied manualy or electronicaly from any other source.</p>"; 
    resText += "Name: <mark>Tatiana Kashcheeva</mark><br>"
    resText += "Student Number: <mark>148366206</mark><br>"
    resText += "<br><a href = '/test1'> Go to Test1 </a> <br>";
    res.send(resText);
});

//style = "color:red"

app.get('*',function(req,res)
{
    res.status(404).send("You are lost, take another road <br><img width=400px hight=400px src='/road.jpg'>");
})


app.listen(HTTP_PORT, onHttpStart);