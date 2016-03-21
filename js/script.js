$(document).ready(function(){

  $('.password').on("keyup", function(){
     var password = $(".password");
     if(password){
       var strength = passwordStrength(password);

       // display in form
       $('.password-strength').css('background-color', strength.colour);
       $('.password-strength .text').html(strength.level + " (<strong>" + strength.percent + "</strong>%)");
     }
  });

// Check the password strength and return object
  function passwordStrength(password){
    var score = 0;

    // Check length
    if (password.val().length > 6) {
       score++;
    }

    // Check length
    if (password.val().length > 8) {
       score++;
    }

    // Uppercase and lowercase characters
    if (/(?=.*[A-Z])(?=.*[a-z])/.test(password.val())) {
       score++;
    }
    // Has number
    if (/(?=.*[0-9])/.test(password.val())) {
       score++;
    }
    //REGEX for symbol
    if (/@|\$|\!|&|\^/.test(password.val())) {
       score++;
    }

    var obj = {};
    var fill = (100 - ((score * 2) * 10));
    var percent = (100 - fill);
    var level,
    colour;
    switch (score) {
    case 0:
    case 1:
    level = "Weak";
    colour = "green";
    break;
    case 2:
    case 3:
    level = "Medium";
    colour = "orange";
    break;
    case 4:
    level = "Strong";
    colour = "red";
    break;
    case 5:
    level = "Best";
    colour = "#9F2B68";
    break;
    }

    obj.colour = colour;
    obj.level = level;
    obj.percent = percent;

    return obj;
  }

}());
