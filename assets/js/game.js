


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


            console.log("attack");

            // current enemy's attack

            function enemyAttack() {
    
                //console.log(yourHP);

                yourHP = yourHP - $(".currentEnemy").attr('att');

                $("#enemyAttackText").html($(".currentEnemy").attr('att'));

                //console.log(yourHP);

                $(yourHPSpan).html(yourHP);

            }

            enemyAttack();
        
            // your attack

            function yourAttack () {

                enemyHP = ($(".currentEnemy .card-body .card-text span").text());

                enemyHP = enemyHP - currentAttack;

                $("#yourAttackText").html(currentAttack);

                $(".currentEnemy .card-body .card-text span").text(enemyHP);

                currentAttack += 15;

                console.log(enemyHP);

            }
            
            yourAttack();

            // if enemy is defeated, move below and allow new enemy to be chosen
        
            if (enemyHP <= 0) {

                $(".currentEnemy").detach().appendTo("#defeated-fighter-row");
    
                $(".currentEnemy").removeClass("currentEnemy");

                console.log($("#defeated-fighter-row .card").length);
    
                $(document).on("click", "#combat-zone .enemy", chooseEnemy);
    
            };

            // alert loss when your pokemon's hp = 0, then reload page after alert is clicked

            if (yourHP <= 0) {

                alert("Game Over! Try fighting weaker Pokémon first to increase your attack damage!")

                location.reload();

            };

            // check how many '.card' elements are in the defeated row, and if alert win and reset

            if (($("#defeated-fighter-row .card").length) = 3) {

                console.log($("#defeated-fighter-row .card").length);

                alert("Congrats, champ! You beat 'em all!");

                //location.reload();

            }
            

    });

    // reset button

    $(".reset-button").on("click", function reset() {

        location.reload();

    });

});



// $(this).children("myClass").find("#hpText").text();