const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const todos = [{ todo: "wake up", isCompleted: false },
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
        console.log(todoo);
         todos.find((element,index) => {
             console.log(element.todo);
             console.log(element.todo === todoo)
             if(element.todo === todoo){
            
             todos[index].todo=req.body.todo;
             }
          });
           res.json(todos)    
     
    });

    

 



 app.listen(port,()=>
 {
    console.log(`Example app listening at http://localhost:${port}`);
 })