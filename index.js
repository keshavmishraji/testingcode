console.log("hello world");

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "ep",
    password: "<password>",
    database: "test",
});


var fs = require("fs");
 console.log("\n *STARTING* \n");
// Get content from file
 var contents = fs.readFileSync("student.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
 console.log(jsonContent);

// Get Value from JSON
 console.log("User Name:", jsonContent.id);
 console.log("Email:", jsonContent.first_Name);
 console.log("Password:", jsonContent.last_Name);

 connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO Student (ID, LastName, FirstName) VALUES ('jsonContent.id','jsonContent.first_Name','jsonContent.last_Name')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

