function makePayment(f) {
    setTimeout(() => {
        console.log("Payment has been processed")
        f();
    }, 5000)
}

function sendConfirmation() {
    console.log("Ordee has been placed successfully")
}
makePayment(sendConfirmation)