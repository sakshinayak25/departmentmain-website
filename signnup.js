function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']['name'].value;
    var password = document.forms['myForm']['password'].value;
    var cpassword = document.forms['myForm']['cpassword'].value;
    var email = document.forms['myForm']['email'].value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    var phone = document.forms['myForm']['phone'].value;


    if (name.length < 5) {
        // seterror("name", "*Length of name is too short");
        alert("name is too short!");
        returnval = false;
    }

    if (password.length < 6) {
        alert("length of password is to short!");
        returnval = false;
    }

    if (cpassword != password) {
        alert("* password and confirm password don't match!");
        returnval = false;
    }

    if (email.length > 30 && atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("*Email is too long");
        returnval = false;
    }

    if (phone.length != 10 || isNaN(phone)) {
        alert("*phone no is incorrect");

        returnval = false;
    }

    return returnval;
}