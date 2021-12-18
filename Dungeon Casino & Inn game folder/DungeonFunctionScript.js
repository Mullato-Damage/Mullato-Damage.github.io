//Terione Martin//
//This is my function that my program will refer to when deciding the variables and outcomes.//
function DragonJaw() {
    //This is where I use the math library, so it can correctly provide the right amount of numbers that I need for the dice. //
    //I am using "7" instead of "6" for both dice because, through any test and tweaking, it subtracts a digit for both dice, so I never seen a single 6 while using 6;
    // With 7, I am able to have 6 as a variable for the dice and we can get a sum of 12. I made sure to test with 7 multiple times and it hasn't apppeared as a variable.
    //I just learned that 6, originlly, didn't appear because I used "Math.Floor" instead of "Math.ceil". Because I chose the wrong variable, it would round down instead of up.
    //Now I know to use Math.ceil, going forward, unless I need the program to round down instead of up.
    var die1=Math.ceil(Math.random() * 6);
    var die2=Math.ceil(Math.random() * 6);
    //This is where both dice variables are added to give us an outcome that triggers that scenarios that occur in the game. 
    var sum= die1 + die2;
    // This is the code so that the variables are shown to the player and the can see which variables the two dice gave and the outcome of the addition.
    document.getElementById("die1Results").innerHTML= "die1=" + die1;
    document.getElementById("die2Results").innerHTML= "die2=" + die2;
    document.getElementById("sumResults").innerHTML= "sum=" + sum;
    //This is how the program knows which outcome goes with each scenario that I have in place.
    if (sum==2 || sum==4) {
        document.getElementById("FinalResults").innerHTML= "Mimic die uses BITE!";
        alert("A dice mimic surprises you!");
    }
    else if (sum==3 || sum==5) {
        document.getElementById("FinalResults").innerHTML= "You gain an extra chance!";
        alert("YAY, you found one of your precious die from your last adventure!");
    }
    //This on specifically targets the die instead of the sum. The scenario requires teh die to both equal 5. The scenario won't occur if ONLY one 5 appears.//
    else if (die1 == 5 && die2 == 5 ) {
        document.getElementById("FinalResults").innerHTML= "YOU BLAST A GIANT FIREBALL THROUGH THE DUNGEON, DESTROYING EVERYTHING IN YOUR PATH!!!!";
        alert("Double Trouble! CRITICAL FIREBALL!!");
    }
    else if (sum==7 || sum==11) {
        document.getElementById("FinalResults").innerHTML= "A true explorer, the dungeon has been cleared!";
        alert("CONGRATS EXPLORER, ANOTHER SUCCESSFUL ADVENTURE!");
    }
    //This is some incredibale luck!
    else if (sum==12) {
        document.getElementById("FinalResults").innerHTML= "THORMIR HAS BEEN CONQURED AND HIS RICHES ARE CLAIMED!";
        alert("You claim your stolen dice and enjoy your riches. You should add conqurer to your name!");
    }
    //This is some horrible luck!
    else if (sum==0) {
        document.getElementById("FinalResults").innerHTML= "THORMIR SHOOTS THROUGH THE ROOM AND EATS YOU!!!";
        alert("YOU HAVE BEEN SLAYED AND MUST RESTART!");
    } 
    //This is the scenario/outcome where none of the specified variables are shown.
    else {
        document.getElementById("FinalResults").innerHTML= "You find an empty room, suspiciously quiet, but you continue forward!";
    }
    
}