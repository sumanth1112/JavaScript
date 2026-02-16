function makePayment(f) {
    return new Promise((resolve, reject) => {
        // reject("Something went Wrong")
        // resolve()
        setTimeout(() => {
        console.log("Payment has been processed")
        resolve();
    }, 5000)
    })
    
}

function sendConfirmation() {
    console.log("Ordee has been placed successfully")
}
// makePayment(sendConfirmation)

//call back hell
makePayment().then(() => sendConfirmation()).catch((err) => console.log(err))