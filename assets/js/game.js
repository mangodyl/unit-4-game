


$(document).ready(function() {

    console.log("yes");

});

function chooseFighter() {

    $(this).detach().appendTo("#your-fighter-row");
    console.log("ok");

    $(".card").not(this).addClass("enemy");

    $(".enemy").detach().appendTo("#available-fighter-row");

    $("#fighter-choice").hide();

    $(".card").off("click", chooseFighter);

}


$(".card").on("click", chooseFighter);


$(".enemy").on("click", function() {



});