var score = 0; // Initial score
var gameStarted = false; // Game start status
var gameEnded = false; // Game end status
// Interval IDs for animations
var intervalBird1; 
var intervalBird2; 
var intervalRat; 
var intervalPoss; 
var intervalStoat; 
var intervalKiwi;
var intervalPigeon; 
var intervalKak;
var intervalRatu; 
var intervalKereru; 
var intervalWfly; 
var intervalWfly2; 
var intervalBfly; 
var intervalBfly2; 
var intervalBee1; 
var intervalBee2; 
var intervalWasp1; 
var intervalWasp2; 

// Initial positions for animations
var bird1Position = 0; 
var bird2Position = 0; 
var possPosition = 0; 
var ratPosition = 0; 
var stoatPosition = 0; 
var kiwiPosition = 0; 
var pigeonPosition = 0; 
var kakPosition = 0; 
var ratuPosition = 0; 
var kereruPosition = 0; 
var wflyPosition = 0; 
var wfly2Position = 0; 
var bflyPosition = 0; 
var bfly2Position = 0; 
var bee1Position = 0; 
var bee2Position = 0; 
var wasp1Position = 0; 
var wasp2Position = 0;

// Event listener for DOMContentLoaded, initializes event listeners for each game element
document.addEventListener('DOMContentLoaded', function() {
    bird1.addEventListener('click', tuesday);
    bird2.addEventListener('click', wednesday);
    poss.addEventListener('click', thursday);
    rat.addEventListener('click', friday);
    stoat.addEventListener('click', saturday);
    kiwi.addEventListener('click', sunday);
    pigeon.addEventListener('click', monday);
    kak.addEventListener('click', january);
    ratu.addEventListener('click', february);
    kereru.addEventListener('click', march);
    wfly.addEventListener('click', may);
    wfly2.addEventListener('click', may2);
    bfly.addEventListener('click', april);
    bfly2.addEventListener('click', april2);
    bee1.addEventListener('click', june);
    bee2.addEventListener('click', june2);
    wasp1.addEventListener('click', july);
    wasp2.addEventListener('click', july2);

    document.getElementById('game').addEventListener('click', function(event) {
        if (!gameStarted && event.target.id !== 'startButton') {
            alert('Please click the start button to begin the game.');
        }
    }, true);
    
});

// Function to move the pigeon across the screen
function pigeonf() {
    intervalPigeon = setInterval(() => {
        pigeonPosition -= 10; // Move pigeon to the left by 10px
        pigeon.style.left = pigeonPosition + 'px'; // Update pigeon position on screen
        if (pigeonPosition <= -10) { // If pigeon goes off screen
            pigeonPosition = window.innerWidth; // Reset position to start from the right
        }
    }, 44); // Repeat every 44 milliseconds
}

// Function to move bird1 across the screen
function bird1f() {
    intervalBird1 = setInterval(() => {
        bird1Position -= 10; // Move bird1 to the left by 10px
        bird1.style.left = bird1Position + 'px'; // Update bird1 position on screen
        if (bird1Position <= -10) { // If bird1 goes off screen
            bird1Position = window.innerWidth; // Reset position to start from the right
        }
    }, 40); // Repeat every 40 milliseconds
}

// Function to move bird2 across the screen
function bird2f() {
    intervalBird2 = setInterval(() => {
        bird2Position += 10; // Move bird2 to the right by 10px
        bird2.style.left = bird2Position + 'px'; // Update bird2 position on screen
        if (bird2Position >= window.innerWidth) { // If bird2 goes off screen
            bird2Position = -200; // Reset position to start from the left
        }
    }, 49); // Repeat every 49 milliseconds
}

// Function to move the possum across the screen
function possf() {
    intervalPoss = setInterval(() => {
        possPosition += 10; // Move possum to the right by 10px
        poss.style.left = possPosition + 'px'; // Update possum position on screen
        if (possPosition >= window.innerWidth) { // If possum goes off screen
            possPosition = -350; // Reset position to start from the left
        }
    }, 50); // Repeat every 50 milliseconds
}

// Function to move the rat across the screen
function ratf() {
    intervalRat = setInterval(() => {
        ratPosition += 10; // Move rat to the right by 10px
        rat.style.left = ratPosition + 'px'; // Update rat position on screen
        if (ratPosition >= window.innerWidth) { // If rat goes off screen
            ratPosition = -350; // Reset position to start from the left
        }
    }, 45); // Repeat every 45 milliseconds
}

// Function to move the stoat across the screen
function stoatf() {
    intervalStoat = setInterval(() => {
        stoatPosition -= 10; // Move stoat to the left by 10px
        stoat.style.left = stoatPosition + 'px'; // Update stoat position on screen
        if (stoatPosition <= -350) { // If stoat goes off screen
            stoatPosition = window.innerWidth; // Reset position to start from the right
        }
    }, 40); // Repeat every 40 milliseconds
}

// Function to move the kiwi across the screen
function kiwif() {
    intervalKiwi = setInterval(() => {
        kiwiPosition += 10; // Move kiwi to the right by 10px
        kiwi.style.left = kiwiPosition + 'px'; // Update kiwi position on screen
        if (kiwiPosition >= window.innerWidth) { // If kiwi goes off screen
            kiwiPosition = -700; // Reset position to start from the left
        }
    }, 45); // Repeat every 45 milliseconds
}

// Function to move the kak across the screen
function kakf() {
    intervalKak = setInterval(() => {
        kakPosition += 10; // Move kak to the right by 10px
        kak.style.left = kakPosition + 'px'; // Update kak position on screen
        if (kakPosition >= window.innerWidth) { // If kak goes off screen
            kakPosition = -100; // Reset position to start from the left
        }
    }, 40); // Repeat every 40 milliseconds
}

// Function to move the ratu vertically
function ratuf() {
    clearInterval(intervalRatu); // Clear any existing interval for ratu
    if (ratuPosition < 400) { // If ratu is below 400px
        intervalRatu = setInterval(() => {
            ratuPosition += 10; // Move ratu up by 10px
            ratu.style.bottom = ratuPosition + 'px'; // Update ratu position on screen
            if (ratuPosition >= 400) { // If ratu reaches 400px
                clearInterval(intervalRatu); // Clear interval
                ratuf(); // Call ratuf again to move down
            }
        }, 40); // Repeat every 40 milliseconds
    } else {
        ratu.style.transform = "rotate(180deg)"; // Rotate ratu upside down
        intervalRatu = setInterval(() => {
            ratuPosition -= 10; // Move ratu down by 10px
            ratu.style.bottom = ratuPosition + 'px'; // Update ratu position on screen
            if (ratuPosition <= 0) { // If ratu reaches bottom
                ratu.style.transform = "rotate(360deg)"; // Reset ratu rotation
                ratuf(); // Call ratuf again to move up
            }
        }, 40); // Repeat every 40 milliseconds
    }
}

// Function to move the kereru across the screen
function kereruf() {
    intervalKereru = setInterval(() => {
        kereruPosition += 10; // Move kereru to the right by 10px
        kereru.style.left = kereruPosition + 'px'; // Update kereru position on screen
        if (kereruPosition >= window.innerWidth) { // If kereru goes off screen
            kereruPosition = -350; // Reset position to start from the left
        }
    }, 44); // Repeat every 44 milliseconds
}

// Function to move the white butterfly across the screen
function wflyf() {
    intervalWfly = setInterval(() => {
        wflyPosition -= 10; // Move white butterfly to the left by 10px
        wfly.style.left = wflyPosition + 'px'; // Update white butterfly position on screen
        if (wflyPosition <= -1000) { // If white butterfly goes off screen
            wflyPosition = window.innerWidth; // Reset position to start from the right
        }
    }, 35); // Repeat every 35 milliseconds
}

// Function to move the second white butterfly across the screen
function wflyf2() {
    intervalWfly2 = setInterval(() => {
        wfly2Position -= 10; // Move second white butterfly to the left by 10px
        wfly2.style.left = wfly2Position + 'px'; // Update second white butterfly position on screen
        if (wfly2Position <= -1000) { // If second white butterfly goes off screen
            wfly2Position = window.innerWidth; // Reset position to start from the right
        }
    }, 39); // Repeat every 39 milliseconds
}

// Function to move the butterfly across the screen
function bflyf() {
    intervalBfly = setInterval(() => {
        bflyPosition += 10; // Move butterfly to the right by 10px
        bfly.style.left = bflyPosition + 'px'; // Update butterfly position on screen
        if (bflyPosition >= window.innerWidth) { // If butterfly goes off screen
            bflyPosition = -800; // Reset position to start from the left
        }
    }, 36); // Repeat every 36 milliseconds
}

// Function to move the second butterfly across the screen
function bflyf2() {
    intervalBfly2 = setInterval(() => {
        bfly2Position += 10; // Move second butterfly to the right by 10px
        bfly2.style.left = bfly2Position + 'px'; // Update second butterfly position on screen
        if (bfly2Position >= window.innerWidth) { // If second butterfly goes off screen
            bfly2Position = -1500; // Reset position to start from the left
        }
    }, 38); // Repeat every 38 milliseconds
}

// Function to move bee1 across the screen
function bee1f() {
    intervalBee1 = setInterval(() => {
        bee1Position += 10; // Move bee1 to the right by 10px
        bee1.style.left = bee1Position + 'px'; // Update bee1 position on screen
        if (bee1Position >= window.innerWidth) { // If bee1 goes off screen
            bee1Position = -400; // Reset position to start from the left
        }
    }, 60); // Repeat every 60 milliseconds
}

// Function to move wasp1 across the screen
function wasp1f() {
    intervalWasp1 = setInterval(() => {
        wasp1Position += 10; // Move wasp1 to the right by 10px
        wasp1.style.left = wasp1Position + 'px'; // Update wasp1 position on screen
        if (wasp1Position >= window.innerWidth) { // If wasp1 goes off screen
            wasp1Position = -1000; // Reset position to start from the left
        }
    }, 62); // Repeat every 62 milliseconds
}

// Function to move bee2 across the screen
function bee2f() {
    intervalBee2 = setInterval(() => {
        bee2Position -= 10; // Move bee2 to the left by 10px
        bee2.style.left = bee2Position + 'px'; // Update bee2 position on screen
        if (bee2Position <= -200) { // If bee2 goes off screen
            bee2Position = window.innerWidth; // Reset position to start from the right
        }
    }, 61); // Repeat every 61 milliseconds
}

// Function to move wasp2 across the screen
function wasp2f() {
    intervalWasp2 = setInterval(() => {
        wasp2Position -= 10; // Move wasp2 to the left by 10px
        wasp2.style.left = wasp2Position + 'px'; // Update wasp2 position on screen
        if (wasp2Position <= -600) { // If wasp2 goes off screen
            wasp2Position = window.innerWidth; // Reset position to start from the right
        }
    }, 63); // Repeat every 63 milliseconds
}

// Function to start the game
function start() {
    gameStarted = true; // Set gameStarted flag to true
    document.getElementById('startButton').disabled = true; // Disable start button
    // Call functions to move all elements
    pigeonf();
    bird1f();
    bird2f();
    possf();
    ratf();
    stoatf();
    kiwif();
    kakf();
    ratuf();
    kereruf();
    bflyf2();
    bflyf();
    wflyf();
    wflyf2();
    bee1f();
    wasp1f();
    bee2f();
    wasp2f();

    // Stop all intervals after 20 seconds
    setTimeout(() => {
        clearInterval(intervalBird2);
        clearInterval(intervalBird1);
        clearInterval(intervalKak);
        clearInterval(intervalKiwi);
        clearInterval(intervalPigeon);
        clearInterval(intervalPoss);
        clearInterval(intervalRat);
        clearInterval(intervalRatu);
        clearInterval(intervalStoat);
        clearInterval(intervalKereru);
        clearInterval(intervalWfly);
        clearInterval(intervalWfly2);
        clearInterval(intervalBfly);
        clearInterval(intervalBfly2);
        clearInterval(intervalBee1);
        clearInterval(intervalBee2);
        clearInterval(intervalWasp1);
        clearInterval(intervalWasp2);

        displayPopUp(score); // Display score pop-up
        gameEnded = true; // Set gameEnded flag to true
        document.getElementById('saveScoreButton').disabled = false;
    }, 20000); // 20 seconds timeout
}

// Event listener for DOMContentLoaded, initializes save score button event listener
document.addEventListener('DOMContentLoaded', () => {
    const saveScoreButton = document.getElementById('saveScoreButton');
    saveScoreButton.addEventListener('click', () => {
        if (gameEnded) { // If game has ended
            document.getElementById('login').style.display = 'block'; // Show login section
            document.getElementById('game').style.display = 'none'; // Hide game section
        }
    });
});

// Function to display the pop-up with the score
function displayPopUp(score) {
    var popup = document.createElement("div");
    popup.setAttribute("style", "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 2px solid black;");
    
    var title = document.createElement("h1"); // Create title element
    var message = document.createElement("h2"); // Create message element
    var additionalMessage = document.createElement("p"); // Create additional message element

    // Set pop-up content based on the score
    if (score < 7) {
        title.textContent = "You Failed (next star at 7)";
        message.textContent = "Try again!";
    } else if (score < 12) {
        title.textContent = "1 Star (next star at 12)";
        message.textContent = "Hmm, you did okay.";
        additionalMessage.textContent = "Try and get those last stars";
    } else if (score < 17) {
        title.textContent = "2 Stars (next star at 17)";
        message.textContent = "Good job!";
        additionalMessage.textContent = "See if you can get that last star";
    } else {
        title.textContent = "3 Stars";
        message.textContent = "Well done! You clearly know your pests.";
        additionalMessage.textContent = "You win!!!";
    }

    var scoreDisplay = document.createElement("h2"); // Create score display element
    scoreDisplay.textContent = "Score: " + score;

    var retryButton = document.createElement("button"); // Create retry button
    retryButton.textContent = "Retry";
    retryButton.onclick = function() {
        location.reload(); // Reload the page to restart the game
    };

    var homeButton = document.createElement("button"); // Create home button
    homeButton.textContent = "Home";
    homeButton.onclick = function() {
        window.location.href = "index.html"; // Redirect to home page
    };
   

    // Append elements to the pop-up
    popup.appendChild(title);
    popup.appendChild(message);
    popup.appendChild(scoreDisplay);
    popup.appendChild(additionalMessage);
    popup.appendChild(retryButton);
    popup.appendChild(homeButton);

    // Append pop-up to the body
    document.body.appendChild(popup);
}

// Function to handle element click and update score
function handleElement(event, target, scoreChange) {
    if (gameStarted && event.target === target) { // Check if game is started and target is the clicked element
        score += scoreChange; // Update score
        localStorage.setItem('score', score); // Save score to local storage
        message.textContent = "Score: " + score; // Update score display
        target.style.pointerEvents = 'none'; // Disable pointer events for the clicked element
        target.style.visibility = 'hidden'; // Hide the clicked element
    }
    // Re-enable pointer events and visibility after 3 seconds
    setTimeout(() => {
        target.style.pointerEvents = 'auto'; // Re-enable pointer events
        target.style.visibility = 'visible'; // Make element visible again
    }, 3000); // 3 seconds timeout
}

// Click handler functions for each element
function tuesday(event) {
    handleElement(event, bird1, -1); // Call handleElement for bird1 with score change -1
}

function wednesday(event) {
    handleElement(event, bird2, -1); //score change -1
}

function thursday(event) {
    handleElement(event, poss, 1); // score change 1
}

function friday(event) {
    handleElement(event, rat, 1); // score change 1
}

function saturday(event) {
    handleElement(event, stoat, 1); //  score change 1
}

function sunday(event) {
    handleElement(event, kiwi, -1); //  score change -1
}

function monday(event) {
    handleElement(event, pigeon, 1); //  score change 1
}

function january(event) {
    handleElement(event, kak, -1); // score change -1
}

function february(event) {
    handleElement(event, ratu, 1); //  score change 1
}

function march(event) {
    handleElement(event, kereru, -1); //  score change -1
}

function april(event) {
    handleElement(event, bfly, -3); //  score change -3
}

function april2(event) {
    handleElement(event, bfly2, -3); //  score change -3
}

function may(event) {
    handleElement(event, wfly, 3); // score change 3
}

function may2(event) {
    handleElement(event, wfly2, 3); //  score change 3
}

function june(event) {
    handleElement(event, bee1, -5); //  score change -5
}

function june2(event) {
    handleElement(event, bee2, -5); // score change -5
}

function july(event) {
    handleElement(event, wasp1, 5); // score change 5
}

function july2(event) {
    handleElement(event, wasp2, 5); // score change 5
}
