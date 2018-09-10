var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };

// let db = {
//   localhost: "mongodb://localhost:27017/todos",
//   mlab: "mongodb://lester12345:Lu1salu1sa@ds251362.mlab.com:51362/todolist"
// };

// mongoose
//   .connect(
//     db.localhost,
//     {
//       useMongoClient: true
//     }
//   )
//   .then(
//     () => {},
//     err => {
//       mongoose.connect(
//         db.mlab,
//         {
//           useMongoClient: true
//         }
//       );
//     }
//   );
// module.exports = { mongoose };

// const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
// let db = {
//   localhost: "mongodb://localhost:27017/TodoApp",
//   mlab: "mongodb://lester12345:Lu1salu1sa@ds251362.mlab.com:51362/todolist"
// };
// mongoose.connect(db.localhost || db.mlab);
