$(document).ready(function(){
    var password = "secret";
    
    $("#submit").click(function(){
        var guess = $("#pass").val();
        
        if (password === guess) {
            $("#result").html("Congratulations! You got it. It's okay.");
        } else {
            $("#result").html("Try again.");
        }
    });
});