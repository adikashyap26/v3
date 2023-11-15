const url = new URLSearchParams(window.location.search);
const poistion = url.get('position');
debugger
if(poistion == 'proposal-engineer'){
  document.getElementById('job-title').innerHTML = 'Proposal Engineer';
} else if(poistion == 'sales-engineer'){
  document.getElementById('job-title').innerHTML = 'Sales Engineer';
} else{
  document.getElementById('job-title').innerHTML = 'stores-assistant'
}


function sendEmail() {
    const form = document.getElementById("myForm");
  
    emailjs.sendForm("service_tb2irvh", "template_7lh538e", form)
      .then(
        function (response) {
          console.log("Email sent successfully", response);
        },
        function (error) {
          console.log("Email failed to send", error);
        }
      );
  }
  
  
  
  
  
  
  
  