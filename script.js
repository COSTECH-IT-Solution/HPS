<script>
function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const service = document.getElementById('serviceType').value;
    const message = document.getElementById('message').value;
    
    // Replace with your actual phone number (include country code, no + or spaces)
    const phoneNumber = "1234567890"; 
    
    const text = `Hello Hygen Pro! My name is ${name}. I am interested in ${service}. Details: ${message}`;
    const encodedText = encodeURIComponent(text);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
}
</script>
