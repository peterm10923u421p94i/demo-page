// --- SELECT ALL ELEMENTS ---
const heading = document.getElementById('mainHeading');
const vibeBtn = document.getElementById('changeTextBtn');
const fireBtn = document.getElementById('fireButton');
const inputField = document.getElementById('userInput');
const postBtn = document.getElementById('displayBtn');
const displayArea = document.getElementById('storyDisplay');

// NEW Generator Elements
const genBtn = document.getElementById('generatorBtn');
const genResult = document.getElementById('gameResult');

// --- 1. LIGHT THE FIRE ALERT ---
fireBtn.addEventListener('click', function() {
    alert("🔥 The campfire is crackling! Stay cozy, traveler.");
});

// --- 2. CHANGE THE VIBE ---
vibeBtn.addEventListener('click', function() {
    heading.innerText = "A Quiet Night Under the Stars";
    vibeBtn.innerText = "Vibe Changed! ✨";
    heading.style.color = "#f1c40f"; 
});

// --- 3. INPUT LOGIC (IF/ELSE) ---
postBtn.addEventListener('click', function() {
    const message = inputField.value.toLowerCase().trim();

    if (message === "") {
        displayArea.innerText = "The woods are quiet... try typing a story first!";
    } else if (message === "marshmallow") {
        displayArea.innerText = "Yum! Don't forget the graham crackers and chocolate. 🍫";
    } else {
        displayArea.innerText = "“" + inputField.value + "”";
    }
    inputField.value = ""; 
});

// --- 4. RANDOM GAME GENERATOR ---
genBtn.addEventListener('click', function() {
    // This is our list (Array) of choices
    const games = [
        "Rocket League 🏎️", 
        "Minecraft 🧱", 
        "College Football 25 🏈", 
        "Go hit some Golf Balls 🏌️", 
        "Actually... just take a nap 😴"
    ];

    // Math.random() picks a decimal between 0 and 1
    // Math.floor() rounds it down to a whole number (0, 1, 2, 3, or 4)
    const randomIndex = Math.floor(Math.random() * games.length);
    
    // Pick the game at that random position
    const selectedGame = games[randomIndex];

    // Display it on the page
    genResult.innerText = "You should play: " + selectedGame;
});
