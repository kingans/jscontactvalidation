// if you need help contact me oluoanselm@gmail.com

function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  

  //name validation, you can set it to what ever you want. in this tutorial i said the name must be more than 3 letters
  var text;
  if(name.length < 4){
    text = "Please Enter valid Name The Name must be More than 3 letters";
    error_message.innerHTML = text;
    return false;
  }


  //subject validate, same as the name
  if(subject.length < 2){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }

  //In my country our phone number is 11 digits, so you can set it to us.
  if(isNaN(phone) || phone.length != 11){
    text = "Please Enter valid Phone Number or your Number is not less than 11";
    error_message.innerHTML = text;
    return false;
  }

  //email validation. they are strings that can do this for you, you can google them and use
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 20){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}