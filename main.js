/*javascript for form validation. Contact form cannot be submitted without the Name,
Organisation, and Email input fields being filled.
*/

function validateForm() {
    var x = document.forms["contact-form"]["contact-name"].value;
    var y = document.forms["contact-form"]["contact-organisation"].value;
    var z = document.forms["contact-form"]["contact-email"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (y == ""){
      alert("Organisation must be filled out");
      return false;
    }
    else if (z == ""){
      alert("Email must be filled out");
      return false;
    }
    else{
      alert("Your form is submitted, thanks for getting in touch!");
    }
}
