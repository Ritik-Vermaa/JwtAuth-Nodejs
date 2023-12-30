const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const User = require("../models/User");


const saltRound = 10;

const validateSignupData = async(req, res ) =>{
    const {name , email , password} = req.body;
    if(name.trim().length === 0){
        res.status(400).json({message : "Please Enter a Name"})
        return false;
    }

    if (!isEmail(email)) {
        res.status(400).json({message : "Please Enter a Valid Email"})
        return false;
    }
    if(password.trim().length === 0){
        res.status(400).json({message : "Please Enter a Password"})
        return false;
    }
    else if(password.trim().length <=5){
        res.status(400).json({message : "Minimum password length is 6"})
        return false;
    }


    const existingUser = await User.findOne({email}).exec();

    if (existingUser) {
        res.status(400).json({message : "Email Already Registered"})
        return false;
    }

    return true;
};

module.exports = async  (req, res) =>{
    const {name , email , password} = req.body;

    const isValid = await validateSignupData(req , res ) 

    if (isValid) {
        try {
            const hashedPassword = await bcrypt.hash(password , saltRound)
            const user = await User.create({name , email , password : hashedPassword})


            res.json({
                message : "Account Created Successfully",
                user:{_id: user._id , name : user.name , email : user.email},
            })
        } catch (error) {
            
        }
    }
}
