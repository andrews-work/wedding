document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('#form');
    var yesLink = document.querySelector('.yes a');
  
    yesLink.addEventListener('click', function(event) {
      event.preventDefault();
      form.style.display = 'flex';
      document.body.classList.add('hide-content');
    });
  });

  function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var address = document.forms["myForm"]["address"].value;
    var dietary = document.forms["myForm"]["dietary"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (address == "") {
        alert("Address must be filled out");
        return false;
    }
    // optionally add more validation for dietary requirements field
    return true;
}