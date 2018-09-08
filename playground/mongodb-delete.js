//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to Connect to MongoDB Server");
    }
    console.log("Connected to MongoDB server");

    ///////////////deleteMany
    // db.collection("Todos")
    //   .deleteMany({ text: "Walk the dog" })
    //   .then(result => {
    //     console.log(result);
    //   });
    ////////////////deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "Something to do" })
    //   .then(result => {
    //     console.log(result);
    //   });

    ///////////////////findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({completed: false})
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Users")
    //   .deleteMany({ name: "Lester" })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5b930b8d26a728372417cd31") })
      .then(result => {
        console.log(JSON.stringify(result, undefined, 2));
      });
    // //db.close();
  }
);
