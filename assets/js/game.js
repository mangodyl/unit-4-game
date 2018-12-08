


$(document).ready(function() {

    console.log("yes");


    // moving chosen fighter, and setting unchosen to enemies

    function chooseFighter() {

        $(this).detach().appendTo("#your-fighter-row");
        console.log("ok");
    
        $(this).addClass("bg-success")
    
        $(".card").not(this).addClass("enemy bg-danger");
    
        $(".enemy").detach().appendTo("#available-fighter-row");
    
        $("#fighter-choice").hide();


        // turn off function on click
        $(".card").off("click", chooseFighter);
    
    };
    
    
    $(".card").on("click", chooseFighter);



    // moving enemies to attack area
    
    function chooseEnemy() {
    
        $(this).detach().appendTo("#their-fighter-row");

        $(this).addClass("currentEnemy")

        $(document).off("click", "#combat-zone .enemy", chooseEnemy);
    
    };

    $(document).on("click", "#combat-zone .enemy", chooseEnemy);


    if (enemyHP <= 0) {
        $(document).on("click", "#combat-zone .enemy", chooseEnemy);
    }


    // calculating attacks

    var enemyHP = $(this).find(id).text();
    var pikachuHP = 70;
    var bulbasaurHP = 100;
    var squirtleHP = 80;
    var charmanderHP = 90;

    var yourAttack = 10;
    var pikachuAttack = 30;
    var bulbasaurAttack = 15;
    var squirtleAttack = 40;
    var charmanderAttack = 20;

    $(".btn").on("click", function() {



    });

});



// $(this).children("myClass").find("#hpText").text();