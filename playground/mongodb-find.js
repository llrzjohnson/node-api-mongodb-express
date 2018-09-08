//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to Connect to MongoDB Server");
    }
    console.log("Connected to MongoDB server");
    ////////////////////////////////////////////////////
    // db.collection("Todos")
    //   .find({ _id: new ObjectID("5b9317a195b63ab16151906e") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch record", err);
    //     }
    //   );
    //////////////////////////////////////////
    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`"Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log("Unable to fetch record", err);
    //     }
    //   );
    ////////////////////////////////////////////

    db.collection("Users")
      .find({ name: "Lester" })
      .toArray()
      .then(
        docs => {
          console.log("Users");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch record", err);
        }
      );

    //db.close();
  }
);
