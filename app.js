const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const todos = [{ todo: " wake up", isCompleted: false },
 { todo: "Eat Breakfast", isCompleted: false }];



 app.get("/todos",(req,res)=>{
     res.json(todos);
 })

 app.post("/create/todo",(req,res)=>{
     const newtodo={todo:req.body.todo,isCompleted:req.body.isCompleted};
     todos.push(newtodo);
     res.status(201);
     res.json(newtodo);
 })

 app.put("/update/todo/:todo",(req,res)=>{
     const todoo=req.params.todo;
     const found = todos.find((element) => {
        return element.todo ===todoo;
      });
    
      if (found) {
        
        res.status(200);
        element.todo=`${element.todo}uddate`;
        res.json(element.todo);
      } else {
        // set the response status code to 404 (Not Found)
        res.status(404);
        res.json("User not found");
      }
    });

    

 



 app.listen(port,()=>
 {
    console.log(`Example app listening at http://localhost:${port}`);
 })