
import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Employer } from "../Models/employer.js"; 

dotenv.config();

const EmployerRoute = Router();
const secretKey = process.env.SECRET_KEY || 'yourSecretKey';

// Sign-up Route
EmployerRoute.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, username, password, role } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if employer already exists
        const existingEmployer = await Employer.findOne({ username });
        if (existingEmployer) {
            return res.status(403).json({ message: "Employer already exists!" });
        }

        // Create new employer
        const newEmployer = new Employer({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            role: role || "employer" // Defaults to "employer" if not specified
        });

        await newEmployer.save();
        res.status(201).json({ message: "Employer successfully registered!" });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Login Route
// Login Route
EmployerRoute.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        const employer = await Employer.findOne({ username });
        if (!employer) {
            return res.status(403).json({ message: "Employer does not exist!" });
        }

        if (!employer.password) {
            console.error("Error: Password not found for this employer in the database.");
            return res.status(500).json({ message: "Server error: Password not found." });
        }

        const isValidPassword = await bcrypt.compare(password, employer.password);
        if (!isValidPassword) {
            return res.status(403).json({ message: "Incorrect password!" });
        }

        // Generate token and set cookie
     
const token = jwt.sign({ username: employer.username, role: employer.role, userId: employer._id }, secretKey, { expiresIn: "1h" });

        console.log("Generated Token:", token); // Log the generated token
        res.cookie('AuthToken', token, { httpOnly: true });
        res.status(200).json({ token, message: "Login successful!" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export { EmployerRoute };












// // import { Employer } from "../Models/Employer.js";
// // import { Router} from "express";
// // import bcrypt from 'bcrypt';
// // import jwt from "jsonwebtoken";
// // // import { authenticate } from "../Middleware/auth.js";
// // import mongoose from "mongoose";
// // import dotenv  from "dotenv";

// // const EmployerRoute = Router();
// // const secretKey = process.env.SECRET_KEY || 'yourSecretKey';

// // EmployerRoute.post('/signup', async (req, res) => {
// //     try {
// //         const { firstName, lastName, userName, password, userRole } = req.body;
// //         const hashedPassword = await bcrypt.hash(password, 10);

// //         const existingEmployer = await Employer.findOne({ EmployerName: userName });
// //         if (existingEmployer) {
// //             return res.status(403).json({ message: "Employer already exists!" });
// //         }

// //         const newEmployer = new Employer({
// //             EfirstName: firstName,
// //             ElastName: lastName,
// //             EmployerName: userName,
// //             Epassword: hashedPassword,
// //             Role: userRole
// //         });

// //         await newEmployer.save();
// //         res.status(201).json({ message: "Employer successfully registered!" });
// //     } catch (error) {
// //         res.status(500).json({ error });
// //     }
// // });

// // EmployerRoute.post('/login', async (req, res) => {
// //     try {
// //         const { userName, password } = req.body;
// //         const employer = await Employer.findOne({ EmployerName: userName });

// //         if (!employer) {
// //             return res.status(403).json({ message: "Employer does not exist!" });
// //         }

// //         const isValidPassword = await bcrypt.compare(password, employer.Epassword);
// //         if (!isValidPassword) {
// //             return res.status(403).json({ message: "Incorrect password!" });
// //         }

// //         const token = jwt.sign({ userName: employer.EmployerName, userRole: employer.Role }, secretKey, { expiresIn: "1h" });
// //         res.cookie('AuthToken', token, { httpOnly: true });
// //         res.status(200).json({ token });
// //     } catch (error) {
// //         res.status(500).json({ error });
// //     }
// // });




// // const EmployerRoute = Router();
// // dotenv.config();
// // const secretKey='hello';
// // mongoose.connect('mongodb://localhost:27017/JOBLADDER3')


// // EmployerRoute.post('/Signup', async (req, res) => {
// //     try {
// //         const { firstName,
// //             lastName,
// //             userName,
// //             password,
// //             userRole } = req.body;
// //         const newP = await bcrypt.hash(password, 10);
       
// //         const existingUser= await Employer.findOne({EmployerName:userName})
// //         if (existingUser) {
// //             console.log("Employer already exsit!")
// //             res.status(403).json({ message: "Employer already exist!" });
// //         }
// //         else {
// //             const newUser = new Employer({
// //                 EfirstName:firstName,
// //                 ElastName:lastName,
// //                 EmployerName:userName,
// //                 Epassword: newP,
// //                 Role:userRole
// //             });
// //             await newUser.save();
// //             console.log("Employer successfully registered!")
// //             res.status(201).json({ message: "Employer Successfully registered!" });
// //             console.log(newUser);
// //         }
// //     }
// //     catch (error) {
// //         res.status(500).json(error);
// //         console.log(error);
// //     }
// // })

// // EmployerRoute.post('/Login', async (req,res)=>{
// //     // const data=req.body;
// //      const {
// //          userName,
// //          password
// //      }=req.body
 
// //      const result = await Employer.findOne({EmployerName:userName})
// //      console.log(result);
// //      if(!result){
// //          res.status(403).json({message:"Employer not exist"})
// //      }
// //      else{
// //          console.log(password);
    
// //          const invalid = await bcrypt.compare(password, result.Epassword);

// //          console.log(invalid);
// //          if(!invalid){
// //              res.status(403).json({message:"Epassword is incorect"})
// //          }
// //          else{
// //              const token= jwt.sign({userName:userName,userRole:result.userRole},secretKey,{expiresIn:"1h"})
// //              res.cookie('AuthToken',token,{
// //                  httpOnly:true
// //              });
// //              console.log(token);
// //              res.status(200).json({token});
// //              console.log("EmployerLogin successfull");
             
// //              //  res.status(200).json({message:"login successfully"});
// //          }
// //      }
// //  })





// // userRoute.get('/ViewCerti/:id',async(req,res)=>{

// //     const certiId= req.params.id;

// //     const result= await Certificates.findOne({certiId:certiId})

// //     try {
// //         if(result){
// //             res.status(200).json(result)
// //         }else{
// //             res.status(400).json("no cert id")
// //         } 
// //     } catch (error) {
// //         res.status(500).json(error)
// //     }


 
// // })



// // EmployerRoute.get('//Logout',(req,res)=>{
// //     res.clearCookie('AuthToken');
// //     res.status(200).json({message: "Employer Successfully logout"});
// // })
   
//  export { EmployerRoute };