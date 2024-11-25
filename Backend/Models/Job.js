import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer', required: true }
}, { timestamps: true });

export const Job = mongoose.model("Job", JobSchema);






// import mongoose from "mongoose";

// const jobSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     location: String,
//     salary: Number,
//     employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'EMPLOYERDATA', required: true },
//     createdDate: { type: Date, default: Date.now },
//     updatedDate: { type: Date, default: Date.now }
// });

// const Job = mongoose.model('Job', jobSchema);

// export { Job };








// import mongoose from "mongoose";

// const AddJobsSchema = new mongoose.Schema({
//     AddJobId:{type: String, require:true},
//     AddJobName:{type: String, require:true},
//     JobLocation:String,
//     JobDescription:String,
//     JobSkill:String,
//     jobAddDate:{type:Date,default:Date.now},
//     JobpostedBy:{type:String,ref:'Employer'}

// })
// const AddJobs = mongoose.model('ADDJOBSDATA', AddJobsSchema);

// export{AddJobs}