$(document).ready(function() {
  
  $("form#survey").submit(function(event) {
    event.preventDefault();
    
    var userName = $("#name").val();
    var userAge = $("#age").val();
    var netflixRate = parseInt($("#netflix").val());
    var fruitRate = parseInt($("#fruit").val());
    var travelRate = parseInt($("#travel").val());
    var total = netflixRate + fruitRate + travelRate; 


  });
});