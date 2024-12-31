const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter")
const flightRouter = require("./routers/flightRouter")

const app = express();
const PORT = 3000;

app.use(express.json());


// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation")
.then(()=>{
  console.log("connected successful")
}).catch((Error)=>{
  console.log("not connected", Error)
})

app.use(userRouter)
app.use(flightRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
