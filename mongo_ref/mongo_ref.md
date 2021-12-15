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
Array ($, $[], $[identifier]) - 
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



CRUD 
deleteOne({})
deleteMany({})




INDEX
-----
mongoimport

db.contacts.explain("executionStats").find({"dob.age" : {$gt : 60}})

db.contacts.createIndex({fieldName : 1/-1})

db.contacts.explain("executionStats").find({"dob.age" : {$gt : 60}})

db.contacts.getIndexes()

load()



------------
SECURITY
--------
> net stop mongodb
> mongod --auth (C:/ProgramFiles/mongodb/Server/5.0/bin)
> mongosh
> use admin
> db.createUser({user : "tom", pwd : "jerry", roles : ["userAdminAnyDatabase"]})
> db.auth("tom", "jerry")
> use shop
shop> db.createUser({user : "sk", pwd : "sk", roles : ["readWrite"]})
shop> db.logout()
exit from shell
> mongosh -u sk -p sk --authenticationDatabase shop
shop> db.products.insertOne({title : "A Book"})


> db.logout()
> db.auth("tom", "jerry")
shop> db.updateUser("sk", {roles : [{role : "readWrite", db : "blog"}]})



authors
    name , age, posts[]

startTransaction()
posts
     : title, body, creator

Comments :
    text
    postId
commitTransaction() / abortTransaction()


mongosh "mongodb+srv://cluster0.e9xsq.mongodb.net/myFirstDatabase" --username citius


TRANSACTIONS
------------

const session = db.getMongo().startSession()
const collPost = session.getDatabase("blog").posts
const collOrders = session.getDatabase("shop").orders
session.startTransaction()
collPost.deleteOne();
collUsers.deleteOne();
session.commitTransaction()
