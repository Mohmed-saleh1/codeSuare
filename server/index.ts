import express, { RequestHandler, request, response } from "express";
import {db} from './DAOs'
const app = express();

app.use(express.json()) ;

const Logger : RequestHandler = (req,res,next)=>{
  console.log(req.method,'-body ',req.body);
  next();
}
app.use(Logger);

app.get("/posts", (request, response)) => {
  response.send({posts:db.listPosts}));
});

app.post('/posts',(req,res)=>{
  const post = req.body;
  db.createPost(post);
  res.sendStatus(200);
})

app.listen(3000, () => {
  console.log("server is working in port 3000 🎉✨");
});
