const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegistrationModel = require('./models/registration');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation");

// POST route for registration
app.post("/registration", (req, res) => {
  const { firstName, lastName, phoneNo, gender, email, DOB, password } = req.body;
  
  RegistrationModel.findOne({ email })
    .then(user => {
      if (user) {
        res.json("The user already exists");
      } else {
        RegistrationModel.create({ firstName, lastName, phoneNo, gender, email, DOB, password })
          .then(result => res.json("Account created successfully"))
          .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});


app.post("/login", (req, res)=>{
  const {email, password} = req.body;
  RegistrationModel.findOne({email: email})
  .then(user=>{
    if(user){
      if(user.password === password){
        res.json("success")
      }else{
        res.json("The password is incorrect")
      }
    }else{
      res.json("the user does not exist")
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

