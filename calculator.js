//jhint esversion: 6
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res){
    const number1 = Number(req.body.num1)
    const number2 = Number(req.body.num2)
    const opra = (req.body.opr)
    var result=0
    if (opra == "+") {
        result = number1+number2
        res.write("Your Answer is " + result)
    }
    else if (opra == "-") {
        result = number1-number2
        res.write("Your Answer is " + result)
    }
    else if (opra == "*") {
        result = number1*number2
        res.write("Your Answer is " + result)
    }
    else if (opra == "/") {
        result = number1/number2
        res.write("Your Answer is " + result)
    }
    else if (opra == "%") {
        result = number1%number2
        res.write("Your Answer is " + result)
    }
    else{
        res.write("Error!")
    }
    res.send()

});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
})