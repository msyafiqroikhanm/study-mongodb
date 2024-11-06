db.customers.insertOne({
    _id:"syafiq",
    name:"Syafiq Roikhan Maulana"
})

db.products.insertMany([
    {
        _id:1,
        name:"Indomie Ayam Bawang",
        price:new NumberLong("2000")
    },
    {  _id:2,
        name:"Indomie Ayam Soto",
        price:new NumberLong("2000")
    }
])

db.products.insertOne({  
    _id:2,
    name:"Indomie Ayam Soto",
    price:new NumberLong("2000")
})

db.orders.insertOne({
    _id:new ObjectId(),
    total: new NumberLong("8000"),
    items:[
        {
            product_id:1,
            price:new NumberLong("2000"),
            quantity:new NumberInt("2")
        },
        {
            product_id:2,
            price:new NumberLong("2000"),
            quantity:new NumberInt("2")
        }
    ]
})

db.customers.find({_id:"syafiq"})

db.products.find({price:2000})

db.products.find({_id:1})

db.orders.find({"items.product_id":1})

db.products.insertMany([
    {
        _id:3,
        name:"Popmie Rasa Bakso",
        price:new NumberLong("2500")
    },
    {  _id:4,
        name:"Samsung Galaxy S9+",
        price:new NumberLong("10000000")
    },
    {  _id:5,
        name:"Acer Predator XXI",
        price:new NumberLong("25000000")
    }
])

db.customers.find({_id:{$eq:"syafiq"}})

db.products.find({price:{$gt:1000}})

db.products.find({
    category :{$in:['handphone','laptop']},
    price:{$gt:5000000}
})

db.products.insertMany([
    {  _id:6,
        name:"Thinkpad X1 Carbon Gen 8",
        price:new NumberLong("6000000"),
        category:"laptop"
    },
    {  _id:7,
        name:"Asus Zenfone 9",
        price:new NumberLong("8000000"),
        category:'handphone'
    }
])

db.products.find({
    $and:[
        {category:{$in:['handphone','laptop']}},
        {price:{$gt:6000000}}
    ]
})

db.products.find({
    category :{$not:{$in:['handphone','laptop']}}
})

db.products.find({
    price:{
        $gte:1000000,
        $lte:10000000
    },
    category:{
        $ne:"food"
    }
})

db.products.find({
    category:{
        $exists:false
    }
})

db.products.find({
    category:{
        $type:"string"
    }
})


db.products.find({
    price:{
        $type:["int","long"]
    }
})

db.customers.insertOne({
    _id:"roikhan",
    name:"roikhan"
})

db.customers.find({
    $expr:{
        $eq:['$_id','$name']
    }
})

db.products.find({
    $jsonSchema:{
        required:['name','category']
    }
})

db.products.find({
    $jsonSchema:{
        required:['name'],
        properties:{
            name:{
                type:'string'
            },
            price:{
                type:'number'
            }
        }
    }
})

db.products.find({
    price:{
        $mod:[5,0]
    }
})

db.products.find({
    price:{
        $mod:[1000000,0]
    }
})

db.products.find({
    name:{
        $regex:/mie/,
        $options:"i"
    }
})

db.products.find({
    name:{
        $regex:/^Indo/
    }
})

db.customers.find({
    $where:function(){
        return this._id==this.name
    }
})

db.products.insertMany([
    {
        _id:8,
        name:"Logitech Wireless Mouse",
        price:new NumberLong("175000"),
        category:'laptop',
        tags:["logitech",'mouse','accessories']
    },
    {
        _id:9,
        name:"Cooler Pad Gaming",
        price:new NumberLong("200000"),
        category:'laptop',
        tags:["cooler",'mouse','accessories','fan']
    },
    {
        _id:10,
        name:"Samsung Curved Monitor",
        price:new NumberLong("1750000"),
        category:'computer',
        tags:["samsung",'monitor','accessories']
    }
])

db.products.find({
    tags:{
        $all:['samsung','fan']
    }
})

db.products.find({
    tags:{
        $elemMatch:{
            $in:['samsung','logitech']
        }
    }
})

db.products.find({
    tags:{
        $size:4
    }
})

db.products.find({},{name:1,category:1})

db.products.find({},{name:1,price:1})

db.products.find({},{name:1})

db.products.find({},{tags:0})

db.products.find({},{
    name:1,
    tags:{
        $elemMatch:{
            $in:['samsung','logitech','accessories']
        }
    }
})

db.products.find(
    {
        tags:{
            $exists:true
        }
    },
    {
        name:1,
        "tags.$":1
    }
)

db.products.find(
    {tags:{
        $exists:true
    }},
    {
        name:1,
        tags:{
            $slice:2
        }
    }
)

db.products.find().count()

db.products.find().limit(4)

db.products.find().skip(2)

db.products.find().skip(2).limit(4)

db.products.find().sort({category:1,name:-1}).limit(5)

// update
db.products.updateOne(
    {_id:1},
    {$set:{
        category:"food"
    }}
)
db.products.updateOne(
    {_id:2},
    {$set:{
        category:"food"
    }}
)
db.products.updateOne(
    {_id:4},
    {$set:{
        category:"handphone"
    }}
)
db.products.updateOne(
    {_id:5},
    {$set:{
        category:"laptop"
    }}
)

db.products.updateMany(
    {
        $and:[
            {
                category:{
                    $eq:"food"
                }
            },
            {
                tags:{
                    $exists:false
                }
            }
        ]
    },
    {
        $set:{
            tags:['food']
        }
    }
)

db.products.insertOne({
    _id:11,
    name:'salah',
    wrong:"salah lagi"
})

db.products.replaceOne(
    {_id:11},
    {
        name:"Adidas Sepatu Lari Pria",
        price:new NumberLong("1100000"),
        category:"shoes",
        tags:['adidas','shoes','running']
    }
)

//field update operator
db.products.updateMany({},
    {
        $set:{
            stock:0
        }
    }
)

db.products.updateMany({},
    {
        $inc:{
            stock:2
        }
    }
)

db.products.updateMany({},
    {
        $rename:{
            full_name:"name"
        }
    }
)

db.customers.updateMany({},
    {
        $set:{
            wrong:"ups salah"
        }
    }
)

db.customers.updateMany({},{
    $unset:{
        wrong:''
    }
})

db.products.updateMany({},
    {
        $currentDate:{
            lastModifiedDate:{
                $type:'date'
            }
        }
    }
)

// array update operator
db.products.updateMany({},
    {
        $set:{
            ratings:[90,80,70]
        }
    }
)

db.products.updateMany({
    ratings:90
},
    {
        $set:{
            "ratings.$":100
        }
    }
)

db.products.updateMany({
    ratings:100
},{
    $set:{
        "ratings.$[]":100
    }
})

db.products.updateMany(
    {},
    {
        $set:{
            'ratings.$[element]':100
        }
    },
    {
        arrayFilters:[
            {
                element:{
                    $gte:80
                }
            }
        ]
    }
)

db.products.updateMany({},
    {
        $set:{
            'ratings.0':50,
            'ratings.1':60,
        }
    }
)

db.products.updateMany({
    _id:1
},{
    $addToSet:{
        tags:'popular'
    }
})

db.products.updateOne({_id:1},
    {
        $pop:{
            ratings:1
        }
    }
)

db.products.updateOne({_id:2},
    {
        $pop:{
            ratings:-1
        }
    }
)

db.products.updateMany({},
    {
        $pull:{
            ratings:{
                $gte:80
            }
        }
    }
)

db.products.updateMany({},
    {
        $push:{
            ratings:100
        }
    }
)

db.products.updateMany({},
    {
        $push:{
            ratings:0
        }
    }
)

db.products.updateMany({},
    {
        $pullAll:{
            ratings:[100,0]
        }
    }
)

db.products.updateMany({},
    {
        $push:{
            ratings:{
                $each:[100,200,300,70]
            }
        }
    }
)

db.products.updateMany({},
    {
        $pop:{
            ratings:1
        }
    }
)

db.products.updateMany({},
    {
        $addToSet:{
            tags:{
                $each:['trending','popular']
            }
        }
    }
)

db.products.updateMany({},
    {
        $push:{
            tags:{
                $each:['hot'],
                $position:1
            }
        }
    }
)

db.products.updateMany({},
    {
        $push:{
            ratings:{
                $each:[100,200,300,400,500],
                $sort:-1
            }
        }
    }
)

db.products.updateMany({},
    {
        $push:{
            ratings:{
                $each:[100,200,300,400,500],
                $slice:-10
            }
        }
    }
)

// delete
db.customers.insertOne({
    _id:"spammer",
    full_name:"spammer"
})

db.customers.deleteOne({_id:'spammer'})

db.customers.insertMany([
    {
        _id:'spammer1',
        full_name:'spammer1'
    },
    {
        _id:'spammer2',
        full_name:'spammer2'
    },
    {
        _id:'spammer3',
        full_name:'spammer3'
    }
])

db.customers.deleteMany({
    _id:{
        $regex:"spammer"
    }
})

db.customers.bulkWrite([
    {
        insertOne:{
            document:{
                _id:"maulana",
                full_name:"Maulanaaaa"
            }
        },   
    },
    {
        insertOne:{
            document:{
                _id:"muhammad",
                full_name:"muhammad"
            }
        }
    },
    {
        updateMany:{
            filter:{
                _id:{
                    $in:['maulana','syafiq','roikhan']
                }
            },
            
            update:{
                $set:{
                    full_name:"Syafiq Roikhan Maulana"
                }
            }
            
        }
    }
])

//indexes
db.products.createIndex({
    category:1
})

db.products.dropIndex("category_1")

db.products.find({
    category:food
})

db.products.find({
    category:"food"
}).explain()
db.products.find({
    category:"food"
}).sort().explain()

db.products.find({
    tags:"samsung"
}).explain()

db.products.createIndex({
    stock:1,
    tags:1
})

db.products.find({
    stock:10,
    tags:"popular"
})

db.products.find({
    stock:10,
    tags:"popular"
}).explain()

db.products.find({
    name:"samsung",
    tags:"popular"
}).explain()

db.products.find({
    stock:10
}).explain()

db.products.find({
    tags:"popular"
}).explain()

db.products.find({
    category:"food",
    stock:12
}).explain()

db.products.find({
    category:"food",
    tags:"popular"
}).explain()

// TEXT INDEX
db.products.createIndex({
    name:"text",
    category:'text',
    tags:"text"
},{
    weight:{
        name:10,
        category:5,
        tags:1
    }
})

db.products.find({
    $text:{
        $search:"indomie"
    }
})

db.products.find({
    $text:{
        $search:"indomie laptop"
    }
})

db.products.find({
    $text:{
        $search:'"indomie ayam"'
    }
})

db.products.find({
    $text:{
        $search:'indomie -ayam'
    }
}).explain()

db.products.find({
    $text:{
        $search:"indomie laptop"
    }
},{
    $searchScore:{
        $meta:'textScore'
    }
})

// wildcard index
db.customers.createIndex({
    "customFields.$**":1
})

db.customers.insertMany([
    {
        _id:"syean",
        full_name:'Syean',
        customFields:{
            hobby:"memancing",
            univesity:"universitas indonesia"
        }
    },
    {
        _id:"khaedar",
        full_name:'khaedar',
        customFields:{
            ipk:3.2,
            univesity:"universitas malaysia"
        }
    },
    {
        _id:"nur",
        full_name:'nur',
        customFields:{
            motherName:"Umi soricha",
            passion:"entrepenur"
        }
    }
])

db.customers.find({
    "customFields.passion":"entrepenur"
})

db.customers.find({
    "customFields.passion":"entrepenur"
}).explain()

db.customers.find({
    "customFields.ipk":3.2
})

db.customers.find({
    "customFields.ipk":3.2
}).explain()

db.customers.find({
    "customFields.hobby":"memancing"
})
db.customers.find({
    "customFields.hobby":"memancing"
}).explain()

// index property
db.createCollection('sessions')

db.sessions.createIndex({
    createdAt:1
},{
    expireAfterSeconds:10
}) // keren bisa langsung ilang otomatis

db.sessions.insertOne({
    _id:1,
    session:1,
    createdAt:new Date()
})
db.customers.createIndex({
    email:1
},{
    unique:true,
    sparse:true // kalo datanya ga ada, gausah diindex
})

db.customers.updateOne({_id:"syafiq"},{$set:{email:"msyafiq.roikhanm@gmail.com"}})

db.customers.updateOne({_id:"syean"},{$set:{email:"msyafiq.roikhanm@gmail.com"}})

db.customers.find({
    full_name:"Syafiq Roikhan Maulana"
})

db.customers.find({
    full_name:"syafiq roikhan maulana"
})

db.customers.createIndex({
    full_name:1
},{
    collation:{
        locale:"en",
        strength:2
    }
})

db.customers.find({full_name:"syafiq roikhan maulana"}).collation({
    locale:"en",
    strength:2
})

db.products.createIndex({price:1},{
    partialFilterExpression:{
        stock:{
            $gt:0
        }
    }
})

db.products.find({price:2500})

db.products.find({price:2500,stock:{
    $gt:0
}})

// authentication
use admin

db.createUser({
    user:'mongo',
    pwd:'secretpassword',
    roles:[
        'userAdminAnyDatabase',
        'readWriteAnyDatabase'
    ]
})

db.createUser({
    user:'admin',
    pwd:'secretpassword',
    roles:[
        'userAdminAnyDatabase',
        'readWriteAnyDatabase'
    ]
})

//user
db.createUser({
    user:'readnest',
    pwd:'readnest',
    roles:[{
        role:'read',
        db:'nest'
    }]
})
db.createUser({
    user:'readWritenest',
    pwd:'readWritenest',
    roles:[{
        role:'readWrite',
        db:'nest'
    }]
})