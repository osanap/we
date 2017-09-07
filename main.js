function validate() {
    if (document.getElementById("firstName").value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }
    if (document.getElementById("email").value == "") {
        alert("Please provide your Email!");
        document.getElementById("email").focus();
        return false;
    }
    if (document.getElementById("password").value == "") {
        alert("Please Enter your Password!");
        document.getElementById("password").focus();
        return false;
    };
    
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    if (document.getElementById("rpassword").value == "") {
        alert("Please Enter  Renter Password!");
        document.getElementById("email").focus();
        return false;
    }
    if (document.getElementById("birthDate").value == "") {
        alert("Please Enter your birthDate!");
        document.myForm.EMail.focus();
        return false;
    }
    
   var name  =document.getElementById("firstName").value;
    var email=document.getElementById("email").value;
    var dob= document.getElementById("birthDate").value;
    
alert(document.getElementById('message').value);
    
    
}