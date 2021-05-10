const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const todos = [{ todo: "wake up", isCompleted: false },
{ todo: "Eat Breakfast", isCompleted: true }];


app.get("/todos", (req, res) => {
    res.json(todos);
})

app.post("/create/todo", (req, res) => {
    const newtodo = { todo: req.body.todo, isCompleted: req.body.isCompleted };
    todos.push(newtodo);
    res.status(201);
    res.json(newtodo);
})

app.put("/update/todo/:todo", (req, res) => {
    const todoo = req.params.todo;

    todos.find((element, index) => {

        if (element.todo === todoo) {
            todos[index].todo = req.body.todo;
        }
    });
    res.json(todos)

});

/*;
console.log(todos)*/
app.delete("/delete/todo/:todo", (req, res) => {
    const todoD = req.params.todo;
    console.log(todoD);
    todos.find((elem, index) => {
        if (elem.todo === todoD) {
            res.status(201);

            todos.splice(index, 1)
        }
    });
    res.json(todos)
});

app.put("/complete/todo/:todo", (req, res) => {
    const getTodo = req.params.todo;
    todos.find((element, index) => {

        if (element.todo === getTodo) {
            res.status(201);
            todos[index].isCompleted = true;
        }

    })
    res.json(todos);
})


app.get("/completed/todos", (req, res) => {
    const arr = []
    todos.forEach((element, index) => {
        res.status(202)
        if (element.isCompleted === true) {
            arr.push(todos[index])
        }
    })
    res.json(arr)
})







app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})