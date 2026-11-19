import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.json({ error: "No token found" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (verified) {
        next();
    } else {
        return res.json({ error: "Invalid token" });
    }
};

export default authenticate;