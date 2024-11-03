const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000
mongoose.connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation")

// app.get("/", (req, res) => {
//   res.send("helloo world");
// });

app.post("/Registration", (req, res)=>{
  const {firstName, phoneNo, gender, email, DOB, password}=req.body
})

app.listen(PORT, () => {
  console.log(`server is running, listening to port ${PORT}`);
});
