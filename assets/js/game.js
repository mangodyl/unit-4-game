


$(document).ready(function() {

    console.log("yes");

    var pikachuHP = 100;
    var bulbasaurHP = 140;
    var squirtleHP = 120;
    var charmanderHP = 130;

    var yourHP;
    var yourHPSpan;

    var enemyHP;
    var currentAttack = 20;

    $("#pikachu-hp").text(pikachuHP);
    $("#bulbasaur-hp").text(bulbasaurHP);
    $("#squirtle-hp").text(squirtleHP);
    $("#charmander-hp").text(charmanderHP);


    // moving chosen fighter, and setting unchosen to enemies

    function chooseFighter() {

        $(this).detach().appendTo("#your-fighter-row");
        console.log("ok");
    
        $(this).addClass("bg-success")

        yourHP = $(this).children(".card-body").find("span").clone("id").text();
        console.log(yourHP);

        yourHPSpan= $(this).children(".card-body").find("span");

        //$((this).attr("att")).text(yourAttack);
    
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


    // if (enemyHP <= 0) {
    //     $(document).on("click", "#combat-zone .enemy", chooseEnemy);
    // }


    // calculating attacks


    $(".btn").on("click", function() {

        if (enemyHP <= 0) {

            $(".currentEnemy").detach();

            $(".currentEnemy").removeClass("currentEnemy");

            $(document).on("click", "#combat-zone .enemy", chooseEnemy);

        }
        
        else {

            console.log("attack");

            // current enemy's attack

            function enemyAttack() {
    
                //console.log(yourHP);

                yourHP = yourHP - $(".currentEnemy").attr('att');

                //console.log(yourHP);

                $(yourHPSpan).html(yourHP);

            }

            enemyAttack();
        
            // your attack

            function yourAttack () {

                enemyHP = ($(".currentEnemy .card-body .card-text span").text());

                enemyHP = enemyHP - currentAttack;

                $(".currentEnemy .card-body .card-text span").text(enemyHP);

                currentAttack += 15;

                console.log(enemyHP);

            }
            
            yourAttack();
        
        };

    });

    // reset button

    $(".reset-button").on("click", function reset() {

        location.reload();

    });

});



// $(this).children("myClass").find("#hpText").text();