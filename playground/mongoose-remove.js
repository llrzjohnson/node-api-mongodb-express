const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
//   .then(user => {
//     if (!user) {
//       return console.log("User not found");
//     }
//     console.log(JSON.stringify(user, undefined, 2));
//   })
//   .catch(e => console.log(e));

Todo.findByIdAndRemove("5b95c75d031129424cd6f820").then(
  todos => {
    console.log(todos);
  },
  e => {
    console.log(e);
  }
);
