Regarding the MongoDB database:

1 - download MongoDB
2 - add directory to C: --> 'C:\data\db\'

3 - Open terminal in {mongo directory}\MongoDB\Server\3.0\bin
4 - >> mongod.exe

5 - in another treminal (same directory), >> mongo.exe
6 - >> show dbs
7 - create a new database: >> use contactlist
8 - Add the objects: >> db.contactlist.insert([{name: 'Tom', email: 'tom@testemail.com', number: '0208 4444 98 74'}, {name: 'Tracy', email: 'tracy@testemail.com', number: '0208 4569 52 14'}, {name: 'Johnny', email: 'johnny@testmail.com', number: '0208 5587 95 32'}])

9 - check that the objects are in place: >> contactlist.find().pretty()

result:


> db.contactlist.find().pretty()
{
        "_id" : ObjectId("5601b50d0e7ff409e2e89ff7"),
        "name" : "Tom",
        "email" : "tom@testemail.com",
        "number" : "0208 4444 98 74"
}
{
        "_id" : ObjectId("5601b5ea0e7ff409e2e89ff8"),
        "name" : "Tracy",
        "email" : "tracy@testemail.com",
        "number" : "0208 4569 52 14"
}
{
        "_id" : ObjectId("5601b5ea0e7ff409e2e89ff9"),
        "name" : "Johnny",
        "email" : "johnny@testmail.com",
        "number" : "0208 5587 95 32"
}
>