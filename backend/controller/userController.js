const asyncHandler = require("../middleware/asyncHandler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const JWT_TOKEN = 'dsskdfllkjsdfklsfkjsdfkdfkjhsdjkfhksjadghsskjdbg';

const getUsers = asyncHandler(async(req, res) => {
    const users = await User.findAll();
    res.json(users);
})

const addUser = asyncHandler(async(req, res) => {
    const { firstName, lastName, email, password} = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
    })

    res.status(200).json(user.firstName);
});

const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({
        where: {
            email: email
        }
    });

    if(!user) {
        res.status(404).json("No user found with the given mail id.");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        res.status(400).json("Please enter valid password");
    }

    const token = jwt.sign({ user }, JWT_TOKEN, { expiresIn: '1h' });
    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        maxAge: 36000000
    }) 

    res.status(200).json(user);

})
const getUserById = asyncHandler(async(req, res) => {
    const { id } = req.params;

    const user = await User.findByPk(id);
    

    if (!user) {
        res.status(404).json({"error": "User not found"});
    }

    res.status(200).json(user);
});

const updateUser = asyncHandler(async(req, res) => {
    const user = await User.findByPk(req.user.id);
    const { firstName, lastName, email} = req.body;

    if(!user) {
        res.status(404).json({"error" : "User not found!"});
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email)  user.email = email;
    await user.save();

    res.status(200).json(user);
})

const deleteUser = (req, res) => {
    console.log("user controller under construction");
}

const logout = (req, res) => {
    res.clearCookie('token');

    res.send("User logged out");
}

module.exports = { getUsers, addUser, getUserById, updateUser, deleteUser, authUser, logout };