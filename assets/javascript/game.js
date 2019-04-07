

$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var counter = 0;
    var goalNumber;

    function start() {

        counter = 0;
        $("#numberScore").empty();
        $(".crystal").empty();

        console.log("start counter: " + counter);

        // Generate and assign random number goal between 19 and 120 
        goalNumber = Math.floor(Math.random() * 101) + 19;
        console.log("Goal Number: " + goalNumber);

        $("#numberGoal").text("Your target Goal: " + goalNumber);

        // Assign random numbers to each crystal between 1 and 12
        function randomNumber() {
            return Math.floor(Math.random() * 11 + 1);
        }

        for (i = 0; i < 4; i++) {
            var crystal = $("#crystal" + i);
            crystal.attr("data-crystalvalue", randomNumber());
            console.log(crystal.attr("data-crystalvalue"));
        }
    }

    start();

    // each time crystal is clicked add to total
    $(".crystal").on("click", function () {

        console.log("-------NEW CLICK-------");

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        // console.log("crystal: " + crystalValue);

        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.

        counter += crystalValue;

        $("#numberScore").text("Your score is " + counter);

        // evaluate total against number goal and win if match, lose if over

        console.log("counter: " + counter);
        console.log("goal number: " + goalNumber);

        if (counter === goalNumber) {
            wins += 1;
            $("#wins").text(wins);
            // reset game
            console.log("winner");
            start();
        }
        else if (counter > goalNumber) {
            losses += 1;
            $("#losses").text(losses);
            // reset game
            console.log("loser");
            start();
        }
    });

});


