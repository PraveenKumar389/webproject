const mongoose = require("mongoose");

// connection creation and creation a new db
mongoose.connect("mongodb://localhost:27017/testnew",{useNewUrlParser:true , useUnifiedTopology:true})
.then(() => console.log("connection successfull...."))
.catch((err) => console.log(err));
