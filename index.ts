import express, { Express, Request, Response } from "express";
import { caclcTotalAge, unifiedResponse } from "./helper";
import { User } from "./types";
const cors = require("cors");
const app: Express = express(); // instance of expresss => application
app.use(cors());
const port: number = 4000;

const users: User[] = [
   { name: "Mary", password: "test123" },
   { name: "John", password: "Ilovekittens" },
];
app.get("/", (req: Request, res: Response) => {
   const response: string = "Hello World!";
   res.send(response);
});
app.get("/users", (req: Request, res: Response) => {
   const responseObject = unifiedResponse(users);
   res.json(responseObject);
});

//TODO 1. instal bodyparser to accept post body
//TODO 2. create a POST endpoint with /login
//Todo 3. Send email + pw from the userform in the FE to this newly freated backend endpoint
//TODO 5. check passwords

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});

const res = caclcTotalAge(12, 18);
console.log(res);
