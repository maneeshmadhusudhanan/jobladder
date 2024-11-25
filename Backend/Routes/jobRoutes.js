import { Router } from "express";
import { Job } from "../Models/Job.js";
import { authenticate, authorizeAdminOrEmployer } from "../Middleware/authenticate.js";

const JobRoute = Router();


JobRoute.post("/add", authenticate, authorizeAdminOrEmployer, async (req, res) => {
    console.log("User from token:", req.user);

    const { title, description, location, salary } = req.body;

    
    if (!title || !description || !location || !salary) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
     
        const employerId = req.user.userId; 
        console.log("Employer ID:", employerId); 

        const newJob = new Job({
            title,
            description,
            location,
            salary: Number(salary), 
            employerId: employerId 
        });

        await newJob.save();
        res.status(201).json({ message: "Job added successfully", job: newJob });
    } catch (error) {
        console.error("Error adding job:", error);
        res.status(500).json({ message: "Error adding job", error });
    }
});

// View All Jobs
JobRoute.get("/view", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs", error });
    }
});

// Edit Job
JobRoute.put("/edit/:id", authenticate, authorizeAdminOrEmployer, async (req, res) => {
    try {
        const job = await Job.findOneAndUpdate(
            { _id: req.params.id, employerId: req.user.userId },
            req.body,
            { new: true }
        );
        if (!job) return res.status(403).json({ message: "Unauthorized or job not found" });
        res.status(200).json({ message: "Job updated successfully", job });
    } catch (error) {
        res.status(500).json({ message: "Error updating job", error });
    }
});

// Delete Job
JobRoute.delete("/delete/:id", authenticate, authorizeAdminOrEmployer, async (req, res) => {
    try {
        const job = await Job.findOneAndDelete({ _id: req.params.id, employerId: req.user.userId });
        if (!job) return res.status(403).json({ message: "Unauthorized or job not found" });
        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting job", error });
    }
});
export { JobRoute };







// import { Router } from "express";
// import { Job } from "../Models/Job.js";
// import { authenticate, authorizeAdminOrEmployer } from "../Middleware/auth.js";

// const JobRoute = Router();

// // Add a Job - Only for admin and employer
// JobRoute.post('/AddJob', authenticate, authorizeAdminOrEmployer, async (req, res) => {
//     try {
//         const { title, description, location, salary } = req.body;
//         const employerId = req.user.userId;  // Assuming userId is in token payload

//         const newJob = new Job({
//             title,
//             description,
//             location,
//             salary,
//             employerId
//         });

//         await newJob.save();
//         res.status(201).json({ message: "Job added successfully", job: newJob });
//     } catch (error) {
//         res.status(500).json({ message: "Error adding job", error });
//     }
// });

// // View All Jobs
// JobRoute.get('/view', authenticate, async (req, res) => {
//     try {
//         const jobs = await Job.find();
//         res.status(200).json(jobs);
//     } catch (error) {
//         res.status(500).json({ message: "Error retrieving jobs", error });
//     }
// });

// // Edit a Job - Only for admin and employer who created the job
// JobRoute.put('/edit/:id', authenticate, authorizeAdminOrEmployer, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updates = req.body;

//         const job = await Job.findOneAndUpdate(
//             { _id: id, employerId: req.user.userId }, // Ensure only the creator can edit
//             updates,
//             { new: true }
//         );

//         if (!job) {
//             return res.status(403).json({ message: "Job not found or unauthorized" });
//         }

//         res.status(200).json({ message: "Job updated successfully", job });
//     } catch (error) {
//         res.status(500).json({ message: "Error updating job", error });
//     }
// });

// // Delete a Job - Only for admin and employer who created the job
// JobRoute.delete('/delete/:id', authenticate, authorizeAdminOrEmployer, async (req, res) => {
//     try {
//         const { id } = req.params;

//         const job = await Job.findOneAndDelete({ _id: id, employerId: req.user.userId });
//         if (!job) {
//             return res.status(403).json({ message: "Job not found or unauthorized" });
//         }

//         res.status(200).json({ message: "Job deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting job", error });
//     }
// });

// export { JobRoute };
