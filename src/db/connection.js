const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false').then(() => {
    console.log("connection Successful");
}).catch((e) => {
    console.log("No Connection" + e);
});