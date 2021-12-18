function BetterCountdown2() {
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
// The first thing is sees is the iff, that tells it that when i makes it to 11, it'll say BLASTOFF!! But, that is ONLY if it makes 11.
// It then hits else if, which will tellls it that when it gets to halfway, it'll tell the warning that there is little time.
// Then the else is for if it isn't 11 or less than 6, then it'l just say how much time is left. 
function whileCount2() {
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