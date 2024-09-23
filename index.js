function sendEmail(){
    var parameters = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value, 
    };


const serviceID = 'service_zdkvmgd';
const templateID = 'template_9bz1cqf';

emailjs.send(serviceID, templateID, parameters).then((result) => {
    document.getElementById("name").value = ""; // reset form
    document.getElementById("email").value = ""; 
    document.getElementById("message").value = "";
    console.log(result);
    alert("your message sent successfully");
})
.catch((error) => {
    console.log(error.text);
});

}