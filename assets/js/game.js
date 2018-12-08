


$(document).ready(function() {

    console.log("yes");

});

$(".card").on("click", function() {

    $(this).detach().appendTo("#your-fighter-row");
    console.log("ok");

    $(".card").not(this).addClass("enemy");

    $(".enemy").detach().appendTo("#available-fighter-row");

});