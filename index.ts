import express, { request, response } from "express";
const app = express();

const posts = [];

app.get("/posts", (request, response) => {
  response.send("Hello world");
});

app.listen(3000, () => {
  console.log("server is working in port 3000 🎉✨");
});
