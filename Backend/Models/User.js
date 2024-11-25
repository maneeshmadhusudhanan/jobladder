
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user" },
    savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }]
});

const User = mongoose.model("User", userSchema);
export { User };




// import mongoose from "mongoose";



// const userSchema = new mongoose.Schema({

//     UfirstName: String,
//     UlastName: String,
    // UserName: { type: String, unique: true },
//     Upassword: String,
//     Role: String
// })
// const User = mongoose.model('USERDATA', userSchema);

// // const userSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   email: { type: String, unique: true, required: true },
// //   password: { type: String, required: true },
// //   appliedJobs: [{ type: String }], // Array of applied job IDs or descriptions
// // });

// // module.exports = mongoose.model("User", userSchema);
// export { User }