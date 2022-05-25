import express, { Express, Request, Response } from "express";
import { caclcTotalAge, unifiedResponse } from "./helper";
import { User } from "./types";
import bodyParser from "body-parser";
const cors = require("cors");
const app: Express = express(); // instance of expresss => application
const port: number = 4000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

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
app.post("/login", (req: Request, res: Response) => {
   console.log(req.body);
   const responseObject = unifiedResponse({ login: "login" });
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
