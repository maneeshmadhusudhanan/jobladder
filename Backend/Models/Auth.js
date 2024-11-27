
import mongoose from "mongoose";

// Define the User schema
const AuthSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
   trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "employer", "admin"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Compile the model
const Auth = mongoose.model("Auth", AuthSchema);

export { Auth };


// import mongoose from "mongoose";

// // Define the User schema
// const AuthSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//     trim: true, // Removes leading/trailing whitespaces
//   },
//   lastName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   username: {
//     type: String,
//     required: true,
//     unique: true, // Ensures unique usernames
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     match: /.+\@.+\..+/
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     required: true,
//     enum: ["user", "employer", "admin"], // Ensures only these roles are allowed
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now, // Automatically sets the creation date
//   },
// });

// // Compile the model
// const Auth = mongoose.model("Auth", AuthSchema);

// export { Auth };
