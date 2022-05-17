const express = require("express");
const cors = require("cors");
const app = express(); // instance of expresss => application
app.use(cors());
const port = 4000;
const users = [
   { name: "Mary", password: "test123" },
   { name: "John", password: "Ilovekittens" },
];
app.get("/", (req, res) => {
   res.send("Hello World!");
});
app.get("/users", (req, res) => {
   res.json(users);
});

//TODO 1. instal bodyparser to accept post body
//TODO 2. create a POST endpoint with /login
//Todo 3. Send email + pw from the userform in the FE to this newly freated backend endpoint
//TODO 5. check passwords

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
