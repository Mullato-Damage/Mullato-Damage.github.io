//Terione Martin
//This is my simple timer, as it is named. 
function StartSimple() {
    var currTime = 10;
    // This "for" is the key to the whole timer. The i=1 is the first condition, the i<12 is the second condition, and the i++ is the last condition.
    // The first condition makes sure that i=1 or starts at 1 and counts up.
    // The second condition makes sure that the timer never exceeds 12. If it does, it'll go past 0 and into the negatives, instead of stopping.
    // Our last condition, i++, tells the timer to count up until it reaches 11, because we can't hit 12.
    for (var i = 1; i < 12; i++) {
        // This is the code we used for the first timer we made, but instead of having a bunch of them, we only need 1 that is in a constant loop until it reaches 11.
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
            // This is how the system knows that we're counting backwards. Instead of adding a number with every 1000 milisecnds that passes, it now subtracts 1 second from the seconds, making it decrease with every loop.
            // The currTime is the current time on the timer. So if there is 5 seconds left, the equation will be: 5-1=4. 
                currTime = currTime - 1;
            // The 1000 * i is how the system knows how to count. 1000 is how many milisecods that is left, multiplied by i which will be whatever number is on the counter. So if we're at 5, it'll be 1000 * 5 or 5000 miliseconds. 
        }, 1000 * i)
    }
}
//The simple Do function will go throught the code and read while after it's done, instead of reading the conditions first.
//Because it does it last, it will only got through it once.
function simpleDo() {
    // The currTime here is too make sure that the timer always starts at 10, then counts down.
    var currTime = 10;
    /// This variable makes sure that the counter starts as a 1, which will then be processed and tells the system that it'll be multiplied by 1000 miliseconds, when the timer starts.
    var i = 1;
    do {

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
        }, 1000 * i);
        i += 1; /* This is similar to i = i+1 */
    } while (i < 12);
}
// This is my Start button or my "betterCountdown", which just goes through 4 loops and gives a message for each variable that goes under: if, else if, and else.
// This code is VERY similar to the WhileCount. If the coutdown make it to 11, then it says blastoff. If it gets to that halfway point, then it gives us a warning.
// Finally, for te else, which is neither 11 or the halfway point, then it just tells us how much time is left.
function BetterCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function() {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function() {
                document.getElementById("countdownTimer").innerHTML = "Warning Less than half way to launch, time left " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function() {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
// How it works is by immediatly checking the code before counting down. By telling the system that i is less than 12, allows it to count until it hits 12.
// The first thing is sees is the iff, that tells it that when i makes it to 11, it'll say BLASTOFF!! But, that is ONLY if it makes it to 11.
// It then hits else if, which will tellls it that when it gets to halfway, it'll tell the warning that there is little time.
// Then the else is for if it isn't 11 or less than 6, then it'l just say how much time is left. 
function whileCount() {
    var currTime = 10;
    var i = 1
    while (i < 12) {
        

        if (i == 11) {
            setTimeout(function() {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function() {
                document.getElementById("countdownTimer").innerHTML = 
                "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function() {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1
    }
}
//This is my "Lame" button. I hope no one presses it.
function WHY() {
    document.getElementById("ICantBelieveYou").innerHTML= "You failed me!";
        alert("YOU DOOMED US ALL!");
}