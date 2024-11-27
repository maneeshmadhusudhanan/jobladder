
import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Auth } from "../Models/Auth.js";

dotenv.config();
const AdminRoute = Router();
const secretKey = process.env.SECRET_KEY || 'yourSecretKey';

// Middleware to parse JSON
// AdminRoute.use(express.json());

AdminRoute.post("/jobladderlogin", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await Auth.findOne({ username });
        if (!user) {
            return res.status(403).json({ message: "User  does not exist!" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(403).json({ message: "Incorrect password!" });
        }

        const token = jwt.sign(
            { username: user.username, userRole: user.role },
            secretKey,
            { expiresIn: "1h" }
        );

        res.cookie("AuthToken", token, { httpOnly: true });
        res.status(200).json({ token, message: "Login successful!" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error during login." });
    }
});

AdminRoute.post('/jobladderSignup', async (req, res) => {
    try {
        const { firstName, lastName, username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Check if the user already exists
        const existingUser  = await Auth.findOne({ username });
        if (existingUser ) {
            return res.status(403).json({ message: "User  already exists!" });
        }

        const newUser  = new Auth({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            role
        });
        await newUser .save();
        res.status(201).json({ message: "User  successfully registered!" });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Signup error", error });
    }
});

export { AdminRoute };


// import { Router } from "express";
// import bcrypt from 'bcrypt';
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import { Auth } from "../Models/Auth.js"

// dotenv.config();
// const AdminRoute = Router();
// const secretKey = process.env.SECRET_KEY || 'yourSecretKey';


// AdminRoute.post("/jobladderlogin", async (req, res) => {
//     try {
//         const { userName, password } = req.body;
    
//         const user = await Auth.findOne({ username: userName });
//         if (!user) {
//           return res.status(403).json({ message: "User does not exist!" });
//         }
    
//         const isValidPassword = await bcrypt.compare(password, user.password);
//         if (!isValidPassword) {
//           return res.status(403).json({ message: "Incorrect password!" });
//         }
    
//         const token = jwt.sign(
//           { userName: user.username, userRole: user.role },
//           secretKey,
//           { expiresIn: "1h" }
//         );
    
//         res.cookie("AuthToken", token, { httpOnly: true });
//         res.status(200).json({ token, message: "Login successful!" });
//       } catch (error) {
//         console.error("Login error:", error);
//         res.status(500).json({ message: "Internal server error during login." });
//       }
//     });
    

// AdminRoute.post('/jobladderSignup', async (req, res) => {
//     try {
//         const { firstName, lastName, username, password, role } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
        
//         // Check if the user already exists
//         const existingUser = await Auth.findOne({ username });
//         if (existingUser) {
//             console.log("User already exists!");
//             res.status(403).json({ message: "User already exists!" });
//         } else {
//             const newUser = new Auth({
//                 firstName,
//                 lastName,
//                 username,
//                 password: hashedPassword,
//                 role
//             });
//             await newUser.save();
//             console.log("User successfully registered!");
//             res.status(201).json({ message: "User successfully registered!" });
//         }
//     } catch (error) {
//         console.log("Signup error:", error);
//         res.status(500).json({ message: "Signup error", error });
//     }
// });


// export { AdminRoute };





















// // // import { User } from "../Models/User";import { } from "../Models/Employer.js";
// // // import { Router, application } from "express";
// // // import bcrypt from 'bcrypt';
// // // import jwt from "jsonwebtoken";
// // // import { authenticate } from "../Middleware/auth.js";
// // // import mongoose from "mongoose";
// // // import dotenv  from "dotenv";

// // // const EmployerRoute = Router();
// // // dotenv.config();
// // // const secretKey='hello';
// // // mongoose.connect('mongodb://localhost:27017/JOBLADDER3')








// // // userRoute.post('/Signup', async (req, res) => {
// // //     try {
// // //         const { firstName,
// // //             lastName,
// // //             userName,
// // //             password,
// // //             userRole } = req.body;
// // //         const newP = await bcrypt.hash(password, 10);
       
// // //         const existingUser= await User.findOne({userName:userName})
// // //         if (existingUser) {
// // //             console.log("User already exsit!")
// // //             res.status(403).json({ message: "User already exist!" });
// // //         }
// // //         else {
// // //             const newUser = new User({
// // //                 firstName:firstName,
// // //                 lastName:lastName,
// // //                 userName:userName,
// // //                 password: newP,
// // //                 userRole:userRole
// // //             });
// // //             await newUser.save();
// // //             console.log("User successfully registered!")
// // //             res.status(201).json({ message: "User Successfully registered!" });
// // //             console.log(newUser);
// // //         }
// // //     }
// // //     catch (error) {
// // //         res.status(500).json(error);
// // //         console.log(error);
// // //     }
// // // })

// // // userRoute.post('/Login', async (req,res)=>{
// // //     // const data=req.body;
// // //      const {
// // //          userName,
// // //          password
// // //      }=req.body
 
// // //      const result = await User.findOne({userName:userName})
// // //      console.log(result);
// // //      if(!result){
// // //          res.status(403).json({message:"user not exist"})
// // //      }
// // //      else{
// // //          console.log(password);
    
// // //          const invalid = await bcrypt.compare(password, result.password);

// // //          console.log(invalid);
// // //          if(!invalid){
// // //              res.status(403).json({message:"Password is incorect"})
// // //          }
// // //          else{
// // //              const token= jwt.sign({userName:userName,userRole:result.userRole},secretKey,{expiresIn:"1h"})
// // //              res.cookie('AuthToken',token,{
// // //                  httpOnly:true
// // //              });
// // //              console.log(token);
// // //              res.status(200).json({token});
// // //              console.log("Login successfull");
             
// // //              //  res.status(200).json({message:"login successfully"});
// // //          }
// // //      }
// // //  })





// // // // userRoute.get('/ViewCerti/:id',async(req,res)=>{

// // // //     const certiId= req.params.id;

// // // //     const result= await Certificates.findOne({certiId:certiId})

// // // //     try {
// // // //         if(result){
// // // //             res.status(200).json(result)
// // // //         }else{
// // // //             res.status(400).json("no cert id")
// // // //         } 
// // // //     } catch (error) {
// // // //         res.status(500).json(error)
// // // //     }


 
// // // // })



// // // userRoute.get('//Logout',(req,res)=>{
// // //     res.clearCookie('AuthToken');
// // //     res.status(200).json({message: "User Successfully logout"});
// // // })
   
// // // export{EmployerRoute,};