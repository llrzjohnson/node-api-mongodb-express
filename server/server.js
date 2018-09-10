const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();

//SETUP PORT FOR HEROKU and LOCAL PORT

const port = process.env.PORT || 3000;

//SETUP PORT FOR HEROKU and LOCAL PORT

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({
        todos
      });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

////

//GET /todos/id23452
app.get("/todos/:id", (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
    console.log("Nakita error");
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.delete("/todos/:id", (req, res) => {
  //get the Id
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    // validate ID return  404
    return res.status(404).send();
    console.log("Invalid ID");
  }

  // remove to bi id return 200 if OK - return 400 if fail
  Todo.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.status(200).send({
        todo
      });
    })
    .catch(e => {
      res.status(400).send();
    });
});

///////// Server Connection
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

module.exports = { app };
