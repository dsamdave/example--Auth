
const submitButton = document.querySelector("#btn")




async function submitForm (event){
    try {

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const age = document.getElementById("age").value
    const state = document.getElementById("state").value
    const password = document.getElementById("password").value
    const phoneNumber = document.getElementById("phoneNumber").value



    event.preventDefault()
    const payload = {firstName, lastName, email, age, state, phoneNumber, password};

    const response = await fetch("http://localhost:5000/api/add-user", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)

    })
    
    const result = await response.json()

    console.log(result);
        
    } catch (error) {
        if(error.response?.data?.message){
            return console.log(error.response?.data?.message) 
        } else {
            return console.log(error.message) 
        }
    }

    
}

// submitButton.addEventListener("onsubmit", submitForm)