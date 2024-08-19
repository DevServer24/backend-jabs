import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

const SignUpController = async (req, res) => {
    try {
        const { email, name, password } = req.body

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create a new user
        const signupData = await prisma.userdata.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        })

        if (!signupData) {
            return res.status(500).json({ error: "Error creating user" })
        } else {
            return res.status(201).json(signupData)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error" })
    }
}

export default SignUpController
