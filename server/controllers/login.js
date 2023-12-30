const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


module.exports = async (req, res) => {
    const { email, password } = req.body;

    const dbUser = await User.findOne({ email }).exec();

    if (dbUser) {
        const matchPassword = await bcrypt.compare(password, dbUser.password);

        if (matchPassword) {
            const token = jwt.sign(
                { _id: dbUser._id, name: dbUser.name, email }, process.env.JWT_LOGIN_TOKEN, process.env.JWT_TOKEN_EXPIRE

            );

            res.json({
                message: "Login Successful",
                token
            })
        }
        else {
            res.status(400).json({ message: " Username or Password incorrect" });

        }
    }
    else {
        res.status(400).json({ message: "No User Found With this Email" });

    }
}

