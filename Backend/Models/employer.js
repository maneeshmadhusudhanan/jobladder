

import mongoose from "mongoose";

const employerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, unique: true },
    password: String,
    role: { type: String, default: "employer" }
});

const Employer = mongoose.model('Employer', employerSchema);
export { Employer };



