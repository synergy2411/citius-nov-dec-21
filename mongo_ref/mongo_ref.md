> show dbs

> db.dropDatabase()

> use userdata


db.books.insertMany([{
    _id : "b1",
    bookName :"Book 1",
    authorName : "Author 1"
},{
    _id :"b2",
    bookName : "Books",
    authorName : "Author 2"
}])



city ->> Citizens





16MB
db.user.insertOne({
    name : "",
    age : 32,
    address : {_id : "add1"}
})


16MB
db.address.insert({
    _id : "add1",
     // 2MB
        city : ""
        street : {
            location : ""
        }
})

db.createCollection("posts", {
    validator : {
        $jsonSchema : {

        }
    }
});






;
posts -> ;


db.posts.validate()


db.runCommand({
  collMod: "posts",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "body", "published", "creator", "comments"],
      properties: {
        comments: {
          bsonType: "array",
          properties: {
            author: {
              bsonType: "objectId",
              description: "",
            },
            text :{
                bsonType : "string",

              description: "",
            },
          },
        },
      },
    },
  },
});


db.posts.aggregate([
    $lookup :{
        from "authors",
        localfield : "comments.authors",
        foreignField :"_id",
        as : "Author_Comment"
    }
])
db.authors.aggregate([
    $lookup :{
        from "posts",
        localfield : "_id",
        foreignField :"comments.authors",
        as : "Author_Comment"
    }
])


db.users.insertMany([
    {

    },{

    },{

    }
], {ordered : false})

<!-- Transactions -->

> mongoimport users.json -d usersDB -c users --jsonArray --drop


db.users.find({
    $and: [{
        "hobbies.title": {
            $in: ["Sports", "Yoga"]
        }
    }, {
        age: {
            $exists: true
        }
    }]
})

db.users.find({
    $or: [{
        name: "Pankaj"
    }, {
        age: {
            $gte: 30
        }
    }]
})


-------------
Insert Operation : Ordered, writeConcern, Atomicity, mongoimport
Read Operation : operators, cursor - find()
Schema Validation

------------
update Operation
Array
Index
Security
Fault Tolerance
Transaction




db.users.updateOne({
    hobbies: {
        $elemMatch: {
            title: "Sports",
            frequency: {
                $gte: 3,
            },
        },
    },
}, {
    $set: {
        "hobbies.$.highFrequency": true
    }
});


db.users.updateOne({
    age: {
        $gte: 30
    }
}, {
    $inc: {
        "hobbies.$[].frequency": -1
    }
});

db.users.updateMany({
    age: {
        $gte: 30,
    },
}, {
    $set: {
        "hobbies.$[el].goodFrequency": true,
    },
}, {
    arrayFilters: [{
        "el.frequency": {
            $gte: 3,
        },
    }, ],
});




db.users.updateMany({
    name: "Pankaj"
}, {
    $push: {
        hobbies: {
            title: "Travelling",
            frequency: 6,
        },
    },
});



