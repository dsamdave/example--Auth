const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")
const  sendEMail  = require("../utilities/sendEmail")

const userCtrl = {

    registration: async(req, res)=>{
        try {

            const { firstName, lastName, email, password } = req.body

            const userAlreadyExist = await User.findOne({ email })

            if(userAlreadyExist) return res.status(400).json({message: "This user already exist!"})

            const hashedPassword = await bcrypt.hash(password, 12)

            const newUser = await new User({ firstName, lastName, email, password: hashedPassword })

            await newUser.save()

            const message = "Whatever you want to write!"

            await sendEMail(email, message,  newUser, res)

            // return res.status(200).json({
            //     message: "sucessful",
            //     user: newUser
            // })
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    login: async(req, res)=>{

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if(!user) return res.status(404).json({message: "Thos user does not exist!"})

        const isMatched = await bcrypt.compare(password, user.password)

        if(!isMatched) return res.status(401).json({message: "Invalid email or password"})

        const acessToken = await jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN, { expiresIn: '30m'}); // change back to 30m

        return res.status(200).json({
            message: "sucessful",
            acessToken,
            user
        })


    }

}


module.exports = userCtrl