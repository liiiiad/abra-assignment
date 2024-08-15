const mongoose = require('mongoose')

const connectionUrl = process.env.MONGODB_URL

mongoose.connect(connectionUrl).then(() => {
    console.log('connected to DB');
}).catch((error) => {
    console.log('failed to connect to DB:' + error );
})