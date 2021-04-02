const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const fs = require('fs');

var jp = require('jsonpath')


var object = () =>{

  let srcDir = 'C:/Users/Justin/Documents/University/Semester 2/Computer Science Challenges/Main Code/WebAutomationResearch/main-app/json/objects/bartsimpson.json';
  let destDir = 'C:/Users/Justin/Documents/University/Semester 2/Computer Science Challenges/Main Code/WebAutomationResearch/main-app/json/objects/test.json';
  let secondDir = 'C:/Users/Justin/Documents/University/Semester 2/Computer Science Challenges/Main Code/WebAutomationResearch/main-app/json/objects/typed.json'
  
  var data = require(secondDir)

  // fs.copyFile(srcDir, destDir, (err) => {
  //   if (err) throw err;
  //   console.log('source.txt was copied to destination.txt');
  // });

  var nodes = jp.nodes(data, '$..userId');

  // console.log(data)
  // console.log(nodes)
  return
}

var jsonPath = path.join(__dirname, '..', 'json', 'objects');

app.get('/CreateForm', function(req, res,next) {
  object()
  next()
});

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// app.use(express.static('public'))
app.use(express.static("C:/Users/Justin/Documents/University/Semester 2/Computer Science Challenges/Main Code/WebAutomationResearch/main-app/json/objects"))

// app.get("/CreateForm", (req, res) => {
//     object()
// })

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});






app.listen(port, () => {
  console.log("server started on port 3000");
});