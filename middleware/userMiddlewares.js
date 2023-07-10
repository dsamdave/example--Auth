

const validateUserRegistration = (req, res, next )=>{

    const { firstName, lastName, email, password, cf_password } = req.body

    const errors = [];

    if(!firstName) {
         errors.push("please add first name!")
    }
    if(!lastName) {
         errors.push("please add last name!")
    }
    if(!email) {
         errors.push("please add email name!")
    } 
    // else if (!validateEmail(email)) {
    //      errors.push("please enter a valid email!")
        
    // }

    if(!password){
        errors.push("Please enter a password.")
      } else if(password.length < 6) {
        errors.push("Please password must be 6 chars.")
      } else if (!/[A-Z]/.test(password)) {
        errors.push("Please password must contain a capital letter")
      } else if (!/[0-9]/.test(password)) {
        errors.push("Please password must contain a number")
    }


    if(!cf_password) {
         errors.push("please enter cf_password!")
    } 
    // else if(checkPassword(password, cf_password)){

    //     errors.push("invalid email or password!")
    // }

    if(errors.length > 0) return res.status(400).json({message: errors})

    next()
}

const validateUserLogin = (req, res, next )=>{

    const { email, password } = req.body

    const errors = [];

    if(!email) {
         errors.push("please add email name!")
    } 
    // else if (!validateEmail(email)) {
    //      errors.push("please enter a valid email!")
        
    // }

    if(!password){
        errors.push("Please enter a password.")
    } 

    if(errors.length > 0) return res.status(400).json({message: errors})

    next()
}


const checkPassword = (password, cf_password) => {
    if(password.length < 6){
      return ("Password must be at least 6 chars.")
    }else if(password !== cf_password){
      return ("Confirm password did not match.")
    }
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = {checkPassword,  validateEmail, validateUserRegistration, validateUserLogin}

