require("dotenv").config();
const express = require("express");
import AuthenticationController from "./authentication/authentication.controller";
import PostController from "./post/post.controller";
import ReportController from "./report/report.controller";
import UserController from "./user/user.controller";
import App from "./app";
import validateEnv from "./utils/validateEnv";

// app.get('/', (req: any, res: any) => {
//   res.send('Hello World!');
// });

validateEnv();

const app = new App([
  new PostController(),
  new AuthenticationController(),
  new UserController(),
  new ReportController(),
]);

app.listen();
