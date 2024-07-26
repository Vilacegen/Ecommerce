import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "./models/userModel";

// Token generation
export const generateToken = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "myonesecret",
    {
      expiresIn: "30d",
    }
  );
};

// Middleware for authentication
export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    try {
      const decode = jwt.verify(
        token,
        process.env.JWT_SECRET || "myonesecret"
      ) as { _id: string; name: string; email: string; isAdmin: boolean }; // Adjust type
      req.user = decode;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid Token" });
    }
  } else {
    res.status(401).json({ message: "No Token" });
  }
};
