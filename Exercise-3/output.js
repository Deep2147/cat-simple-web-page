var voice = localStorage.getItem("voice");
var urgent = localStorage.getItem("urgent");

$(document).ready(function(){


    $("#voice").html(`Voice Selected is: ${voice}`);
    $("#urgent").html(`Urgent Selected is:  ${urgent}`);
    
});