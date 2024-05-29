document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Send the form data using EmailJS
    emailjs.send("service_83rfrip", "Gmail", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for contacting us, " + name + "!");
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.error("FAILED...", error);
        alert("An error occurred while sending the email. Please try again later.");
        // Log more detailed error information
        console.error("Error Details:", JSON.stringify(error));
    });
});
