// // controllers/userController.js

// // Example of a function to get all users
// const getAllUsers = (req, res) => {
//     // Assuming you have a User model
//     User.find()
//       .then((users) => res.status(200).json(users))
//       .catch((err) => res.status(500).json({ message: "Error fetching users", error: err }));
//   };
  
//   // Another example of user-specific functionality
//   const getUserById = (req, res) => {
//     const userId = req.params.id;
//     User.findById(userId)
//       .then((user) => {
//         if (user) {
//           res.status(200).json(user);
//         } else {
//           res.status(404).json({ message: "User not found" });
//         }
//       })
//       .catch((err) => res.status(500).json({ message: "Error fetching user", error: err }));
//   };
  
//   // Export all functions
//   module.exports = {
//     getAllUsers,
//     getUserById,
//   };
  