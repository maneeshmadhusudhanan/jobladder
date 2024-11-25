
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY || 'yourSecretKey';

export const authenticate = (req, res, next) => {
    const token = req.cookies.AuthToken; 
    if (!token) {
        return res.status(401).json({ message: "No token provided, authorization denied" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token is not valid" });
        }
        req.user = decoded; // Save decoded token to request for use in other routes
        next();
    });
};

// Authorization Middleware
export const authorizeAdminOrEmployer = (req, res, next) => {
    const { role } = req.user; // Assuming req.user is populated by the authenticate middleware
    if (role === 'admin' || role === 'employer') {
        return next(); // User is authorized
    }
    return res.status(403).json({ message: "Access denied" });
};

