const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);

  res.json({
    status: "success",
    message: "User added successfully",
    data: user
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});




// HOW TO RUN THIS PROGRAM:

// REQUIRED SETUP (Run these once if not already done):
// npm init -y
// npm install express
// npm install

// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js
// Open New Terminal and go to file using cd filename 
// TEST USING TERMINAL (curl):
// curl -X POST -H "Content-Type: application/json" -d '{"name":"Vaibhav","email":"vaibhav@gmail.com"}' http://localhost:3000/users

// VIEW ALL USERS:
// http://localhost:3000/users
