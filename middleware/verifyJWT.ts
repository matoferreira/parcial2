import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { AuthRequest } from "../src/interface/authorization";

function verifyToken(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, user: any) => {
      if (error || !user) return res.status(403).send("Unauthorized");
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

export default verifyToken;