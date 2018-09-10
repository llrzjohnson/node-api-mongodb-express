const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
let db = {
  localhost: "mongodb://localhost:27017/TodoApp",
  mlab: "mongodb://llrzjohnson:lu1salu1sa@ds251362.mlab.com:51362/todolist"
};
mongoose.connect(db.localhost || db.mlab);

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp"
// );

module.exports = { mongoose };
