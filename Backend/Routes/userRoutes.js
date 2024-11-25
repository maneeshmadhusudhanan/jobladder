
    import { Router  } from "express";
    import bcrypt from 'bcrypt';
    import jwt from "jsonwebtoken";
    import mongoose from "mongoose";
    import dotenv  from "dotenv";
    import { User } from "../Models/User.js";
    
    const UserRoute = Router();
    dotenv.config();
    const secretKey='hello';
    mongoose.connect('mongodb://localhost:27017/JOBLADDER3')


    UserRoute.post('/Signup', async (req, res) => {
        try {
            const { firstName, lastName, username, password, role } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Check if the user already exists
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                console.log("User already exists!");
                res.status(403).json({ message: "User already exists!" });
            } else {
                const newUser = new User({
                    firstName,
                    lastName,
                    username,
                    password: hashedPassword,
                    role
                });
                await newUser.save();
                console.log("User successfully registered!");
                res.status(201).json({ message: "User successfully registered!" });
            }
        } catch (error) {
            console.log("Signup error:", error);
            res.status(500).json({ message: "Signup error", error });
        }
    });
    
    // Login Route
    UserRoute.post('/Login', async (req, res) => {
        const { username, password } = req.body;
    
        try {
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(403).json({ message: "User does not exist" });
            }
    
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(403).json({ message: "Password is incorrect" });
            }
            const token = jwt.sign({ username, userId: user.id }, secretKey, { expiresIn: '1h' });

            res.cookie('AuthToken', token, {
                httpOnly: true
            });
    
            console.log("Login successful");
            res.status(200).json({ token });
        } catch (error) {
            console.log("Login error:", error);
            res.status(500).json({ message: "Login error", error });
        }
    });

    // UserRoute.get('/logout',(req, res) => {
    //     try {
    //         if (req.role) {
    //             res.clearCookie('AuthToken');
    //             res.status(200).json({ message: "Logout successfull" });
    //         } else {
    //             res.status(404).json({ message: "No user found!" })
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ message: "Server error" })
    //     }
    
    // });
    
    export { UserRoute } ;



    
    // // })
    // // UserRoute.get('//Logout',(req,res)=>{
    // //     res.clearCookie('AuthToken');
    // //     res.status(200).json({message: "User Successfully logout"});
    // // })


    
    // export {UserRoute};