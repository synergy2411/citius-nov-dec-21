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