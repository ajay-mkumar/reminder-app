const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const asyncHandler = require("./asyncHandler");

const JWT_TOKEN = 'dsskdfllkjsdfklsfkjsdfkdfkjhsdjkfhksjadghsskjdbg';

const protect = asyncHandler(async(req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({"error": "Access denied!"});
    }
    
    try{
        const decoded = jwt.verify(token, JWT_TOKEN);
        req.user = await userModel.findByPk(decoded.user.id);
        next();
    } catch(err) {
        res.status(401);
        throw new Error("Not Authorized!");
    }
})

module.exports = { protect }