var express = require("express");

var app = express();
app.use(express.json());

app.use(express.static("public"));
var mysql = require('mysql');
const cors = require('cors');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"test"

});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.set("view engine", "ejs");

app.use(cors({
  origin: '*'
}));

app.listen(3000);
app.get("/", function(request, response)  {
  var result =''
  con.query("SELECT * FROM bruh", function (err, result, fields) {
    if (err) throw err;
    response.json(result);
});


});

app.post("/test", function(request, response)  {
  console.log('test api')
  console.log(request.body.text);
  con.query("INSERT INTO bruh (Okand11) VALUES ("+"'"+request.body.text+"'"+")", function (err, result, fields) {
    if (err) throw err;
    response.json(result);
  });
});

app.get("/test", function(request, response)  {
  console.log(request.body.text);
  con.query("INSERT INTO bruh (Okand11) VALUES ("+"'"+request.body.text+"'"+")", function (err, result, fields) {
    if (err) throw err;
    response.json(result);
  });
});

app.post("/delete", function(request, response)  {
  console.log(request.body.text)
  con.query("DELETE FROM bruh WHERE Okand11="+"'"+request.body.text+"'", function (err, result, fields) {
    if (err) throw err;
  response.json(result);

});

});