import userModel from "../model/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {

    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.json({ error: "Enter all fields" })
    }

    const userwithsameusername = await userModel.findOne({ username })

    if (userwithsameusername) {
        return res.json({ error: "user with this username already exist" })
    }

    const userwithsameemail = await userModel.findOne({ email })

    if (userwithsameemail) {
        return res.json({ error: "user with this email already exist" })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: passwordHash
    })

    res.status(201).json({ message: "User registered successfully", user })
    
}

export const loginUser = async (req, res) => {

    const {email , password} = req.body
  
    if (!email || !password) {
        return res.json({ error: "Enter all fields" })
    }

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.json({ error: "User not found" })
    }   

    const verified = await bcrypt.compare(password, user.password)

    if (!verified) {
        return res.json({ error: "Invalid credentials" })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

    res.json({ message: "Login successful", token, user: { username: user.username, email: user.email } })

}


export const getDetails = async (req,res) => {

    res.json("Profile section")

}