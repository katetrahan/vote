$(document).ready(function() {
  var enteredAge = parseInt (prompt("How old are you?"))

  if (enteredAge >= 18) {
    $("#over18").show();
  } else if  (enteredAge < 18) {
    $("#under18").show();
  } else {
    $("#noage").show();
  }

});
