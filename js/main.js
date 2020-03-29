$(document).ready(function() {
  
  $("form#survey").submit(function(event) {
    event.preventDefault();
    
    var userName = $("#name").val();
    var userAge = $("#age").val();
    var netflixRate = parseInt($("#netflix").val());
    var fruitRate = parseInt($("#fruit").val());
    var travelRate = parseInt($("#travel").val());
    var total = netflixRate + fruitRate + travelRate;
    
    // console.log(userName);
    // console.log(userAge);
    // console.log(netflixRate);
    
    

    if(total <= 10) {
      $("#result").text("Javascript");
    } else if (total >= 11 && total <=20) {
      $("#result").text("Ruby");
    } else if (total >=21 && total <=30) {
      $("#result").text("Python");
    } else {
      $("#result").text("");
    }   
    
    $("#username").text(userName);
    $(".results").show();
  });
});