//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to Connect to MongoDB Server");
    }
    console.log("Connected to MongoDB server");

    ////////FindOneAndUpdate
    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5b932f4395b63ab161519474") },
    //     {
    //       $set: {
    //         completed: false
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndUpdate(
        { _id: new ObjectID("5b93017422d5f42e40e9d1dc") },
        {
          $set: { name: "Updated Sam" },
          $inc: { age: 2 }
        },
        { returnOriginal: false }
      )
      .then(result => {
        console.log(result);
      });

    // //db.close();
  }
);
