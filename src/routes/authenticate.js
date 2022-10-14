import dotenv from 'dotenv';
dotenv.config();

const authenticate = (req, res, next) => {
    if (req.body.password === process.env.PASSWORD) {
        next();
        return;
    }
    res.status(401).json({ error: "Not authenticated" })
}

export default authenticate;