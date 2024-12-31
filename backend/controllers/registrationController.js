// const RegistrationModel = require("../models/registration");

// const registerUser = (req, res) => {
//   const { firstName, lastName, phoneNo, gender, email, DOB, password } = req.body;

//   RegistrationModel.findOne({ email })
//     .then((user) => {
//       if (user) {
//         res.json("The user already exists");
//       } else {
//         RegistrationModel.create({
//           firstName,
//           lastName,
//           phoneNo,
//           gender,
//           email,
//           DOB,
//           password,
//           role: "user",
//         })
//           .then(() => res.json("Account created successfully"))
//           .catch((err) => res.json(err));
//       }
//     })
//     .catch((err) => res.json(err));
// };

// const getAllUsers = (req, res) => {
//   RegistrationModel.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(500).json({ message: "Failed to fetch users", error: err }));
// };

// module.exports = { registerUser, getAllUsers };
