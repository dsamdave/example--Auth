const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config()

 const sendEMail = async ( userEmail, message, user , res  ) => {
    try {

        const { SMARTHUB_EMAIL, SMARTHUB_EMAIL_PASSWORD } = process.env

  
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${SMARTHUB_EMAIL}`,
                pass: `${SMARTHUB_EMAIL_PASSWORD}` 
            }
            
        });
         
        let mailDetails = {
            from: `${SMARTHUB_EMAIL}`,
            to: `${userEmail}`,
            subject: `Welcome To SMARTHUB!`,
            html: `
                <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                <h3 style="text-align: center; text-transform: uppercase;color: #9417E2;">Thank you for using SMARTHUB</h3>
                <p style="text-align: center">Your SMARTHUB registration OTP:</p>
                
                
                <h2 style="text-align: center">${message}</h2> 
                <br/>

                </div>
                `
        };

        // mailTransporter.sendMail(mailDetails)

        mailTransporter.sendMail(mailDetails, async (error, data ) => {
            if(error) {
                return res.status(400).json({msg: error.message})
            } else {
                return res.status(200).json({
                    message: "Successful",
                    user
                })
            }
        });

    } catch (error ) {
        return res.status(500).json({msg: error.message})
        
    }
}

module.exports = sendEMail