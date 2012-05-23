function validateForm(){
  var name = $('#name').val()
  var email = $('#email').val()
  var email2 = $('#email2').val()
  var message = $('#message').val()
  var verify = $('#verify').val()
  var error = false;
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (name== '' || name == 'You must enter your name.'){
    error = true
    $('#name').val('You must enter your name.');
  }
  if (email=='' || !emailReg.test(email)){
    error = true
    $('#email').val('You must enter a valid email.');
  }
  if (email != email2){
    error = true
    $('#email2').val('You must verify your email.');
  }
  if (message == ''){
    error = true
    $('#message').val('You must enter a message.');
  }
  if (verify != '9'){
    console.log(verify);
    error = true
    $('#verify').val('Check your math!');
  }
  if (error){
    return false
  } else{
    $('#name').val('');
    $('#email').val('');
    $('#email2').val('');
    $('#message').val('Thank you for sending me a message. I\'ll contact you shortly.');
    $('#verify').val('');
    $.post('../contact.php', {name: name, email: email, message: message});
  }
}