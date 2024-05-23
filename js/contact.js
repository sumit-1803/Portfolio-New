(function() {
    emailjs.init("v8wNgPKmZpEGXK_ZB");
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = this;
    
    emailjs.sendForm('service_xqtplbe', 'template_o56rgfv', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('thanksMessage').innerText = "Thank-You ... Your Response has been submitted.";
        }, function(error) {
            console.log('FAILED...', error);
        });
});