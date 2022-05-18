"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helper_1 = require("./helper");
const cors = require("cors");
const app = (0, express_1.default)(); // instance of expresss => application
app.use(cors());
const port = 4000;
const users = [
    { name: "Mary", password: "test123" },
    { name: "John", password: "Ilovekittens" },
];
app.get("/", (req, res) => {
    const response = "Hello World!";
    res.send(response);
});
app.get("/users", (req, res) => {
    const responseObject = (0, helper_1.unifiedResponse)(users);
    res.json(responseObject);
});
//TODO 1. instal bodyparser to accept post body
//TODO 2. create a POST endpoint with /login
//Todo 3. Send email + pw from the userform in the FE to this newly freated backend endpoint
//TODO 5. check passwords
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
const res = (0, helper_1.caclcTotalAge)(12, 18);
console.log(res);
