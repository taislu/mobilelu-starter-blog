---
title: "MongoDB Command Examples"
date: "2020-02-12"
description: To begin using MongoDB, connect a mongo shell to the running instance. From a new terminal, issue the command mongo.
category: MongoDB
---

[MongoDB Installation on Mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

You can run MongoDB as a macOS service using brew, or you can run MongoDB manually as a background process. It is **recommended to run MongoDB as a macOS service**, as doing so sets the correct system ulimit values automatically (see [ulimit settings](https://docs.mongodb.com/manual/reference/ulimit/#ulimit-settings) for more information).

To run MongoDB manually as a **background process**, issue the following:
```bash
mongod --config /usr/local/etc/mongod.conf --fork
```

Run mongoDB in the **foreground**
```bash
mongod --config /usr/local/etc/mongod.conf

cat /usr/local/etc/mongod.conf
systemLog:
  destination: file
  path: /usr/local/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /usr/local/var/mongodb
net:
  bindIp: 127.0.0.1
```
Alternatively, to **run MongoDB as a macOS service**, issue the following (the process uses the /usr/local/etc/mongod.conf file, created during the install):
```bash
brew services start mongodb-community@4.2

Tais-MBP:birdboard tailu$ brew services start mongodb-community@4.2
==> Tapping homebrew/services
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-services'...
remote: Enumerating objects: 27, done.
remote: Counting objects: 100% (27/27), done.
remote: Compressing objects: 100% (19/19), done.
remote: Total 27 (delta 0), reused 16 (delta 0), pack-reused 0
Unpacking objects: 100% (27/27), done.
Tapped (65 files, 69.2KB).
==> Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-community)
```
To **verify that MongoDB is running**, search for **mongod** in your running processes:
```bash
ps aux | grep -v grep | grep mongod

Tais-MBP:birdboard tailu$ ps aux | grep -v grep | grep mongod
tailu            59126   0.0  0.2  5592684  41400   ??  S     5:37AM   0:01.05 /usr/local/opt/mongodb-community/bin/mongod --config /usr/local/etc/mongod.conf
```
When a MongoDB Server instance is started on a machine, it has to start listening on a port. By default, port number **27017** is used to mongod and mongos instances.

To begin using MongoDB, connect a mongo shell to the running instance. From a new terminal, issue the command: 
```bash
mongo
```
#### Localhost Binding by Default
By default, MongoDB launches with bindIp set to 127.0.0.1, which binds to the localhost network interface. This means that **the mongod can only accept connections from clients that are running on the same machine**. Remote clients will not be able to connect to the mongod, and the mongod will not be able to initialize a replica set unless this value is set to a valid network interface.

For information on **CRUD** (Create,Read,Update,Delete) operations, see:   
•	[Insert Documents](https://docs.mongodb.com/manual/tutorial/insert-documents/)    
•	[Query Documents](https://docs.mongodb.com/manual/tutorial/query-documents/)    
•	[Update Documents](https://docs.mongodb.com/manual/tutorial/update-documents/)   
•	[Delete Documents](https://docs.mongodb.com/manual/tutorial/remove-documents/)    

#### mongo command examples
```
mongo
```

show current db : 
```bash
db
```

show all databases : 
```
show dbs

> show dbs
admin             0.000GB
config            0.000GB
db_edureka        0.000GB
db_media          0.000GB
db_shopping_cart  0.000GB
local             0.000GB
userdata          0.000GB
```
show all collections in db : 
```
use <dbname>
show collections
```
show all data in collection : 
```
db.<collectionName>.find().pretty()
```
show first record in collection : 
```
db.<collectionName>.findOne()
```
search records in collection : 
```
db.movies.find( {“rate”:4.5} ).pretty()
```
search records in collection with selected fields : (projection)
```
db.movies.find( {“rate”:4.5}, {name:1, rate:1} ).pretty()
```
search records in collection with selected fields without internal id :
```
db.movies.find( {“rate”:4.5}, {_id:0, name:1, rate:1} ).pretty()
```
search records in collection without certain fields :
```
db.movies.find( {“rate”:4.5}, {_id:0, imageUrl:0} ).pretty()
```
show top two records in collection : 
```
db.<collectionName>.find().limit(2).pretty()
```
skip top two records in collection : 
```
db.<collectionName>.find().skip(2).pretty()
```
sort records in collection decending : 
```
db.<collectionName>.find().sort({“rate”:-1).pretty()
```
count records in collection : 
```
db.movies.count()
```
```
db.<collectionName>.insert({“name”:”aakash”, “rollNo”:1})

db.<collectionName>.find().pretty()

db.<collectionName>.createIndex()

db.<collectionName>.insertMany()
```
create new db : 
```
use <dbname>, 
db.<collectionName>.insert()

```
Remove & Update
```
var item = db.collection.findOne({'condition':'some condition'})
db.collection.remove({_id: item._id});

db.collectionname.remove({"_id": ObjectId("5473293d43ecdre56352457f3a")})

db.mycollection.remove()

db.mycollection.update(
  {“city”: “Helsinki”},
  {
    $set:{
      “population”: 123456
    }
  },
  { upsert: true }
)
```
