require('dotenv').config()

const mongoose       = require('mongoose');
const db             = mongoose.connection;

mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGO_CONNECTION+'/'+process.env.DB_NAME);

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});