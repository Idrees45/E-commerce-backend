const bcrypt = require("bcrypt")
const userModel = require("../../models/userModel")
const userSignup = async (req, res) => {
    try {
        const { email, name, password,profilepic} = req.body
      
        if (!email) {
            throw new Error('email is required')
        }
        if (!name) {
            throw new Error('name is required')
        }
        if (!password) {
            throw new Error('pasword is required')
        }
        const hashpPassword = await bcrypt.hash(password, 10)
        if (!hashpPassword) {
            throw new Error("Some thing is wrong")
        }
        const user = await userModel.findOne({ email: email });
        if (user) {
            throw new Error("User already exists");
        }
        const payload = {
            ...req.body,
            role:"GENERAL",
            password: hashpPassword
        }
        const userData =  userModel(payload)
        const saveUserdata = await userData.save()
        res.json({
            data: saveUserdata,
            success: true,
            error: false,
            message: "User Created Succesfully"
        })
    } catch (error) {
        res.json({
            message: error.message||error,
            error: true,
            success: false
        })
    }
}

module.exports=userSignup