document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded and DOM ready!");

    // 1. SELECT THE ELEMENTS
    const mainHeading = document.getElementById('mainHeading');
    const vibeButton = document.getElementById('changeTextBtn');
    const fireButton = document.getElementById('fireButton');
    const inputField = document.getElementById('userInput');
    const postButton = document.getElementById('displayBtn');
    const displayArea = document.getElementById('storyDisplay');
    const generatorButton = document.getElementById('generatorBtn');
    const gameResultArea = document.getElementById('gameResult');

    // 2. LIGHT THE FIRE
    if(fireButton) {
        fireButton.addEventListener('click', function() {
            alert("🔥 The campfire is crackling! Stay cozy, traveler.");
        });
    }

    // 3. CHANGE THE VIBE
    if(vibeButton) {
        vibeButton.addEventListener('click', function() {
            mainHeading.innerText = "A Quiet Night Under the Stars";
            vibeButton.innerText = "Vibe Changed! ✨";
            mainHeading.style.color = "#f1c40f"; 
        });
    }

    // 4. CAMPFIRE STORIES
    if(postButton) {
        postButton.addEventListener('click', function() {
            const rawValue = inputField.value;
            const cleanValue = rawValue.toLowerCase().trim();

            if (cleanValue === "") {
                displayArea.innerText = "The woods are quiet... try typing a story first!";
            } else if (cleanValue === "marshmallow") {
                displayArea.innerText = "Yum! Don't forget the graham crackers and chocolate. 🍫";
            } else {
                displayArea.innerText = "“" + rawValue + "”";
            }
            inputField.value = ""; 
        });
    }

    // 5. RANDOM GAME GENERATOR (The Fixed Section)
    if(generatorButton) {
        generatorButton.addEventListener('click', function() {
            console.log("Generator button clicked!");
            const games = [
                "Rocket League 🏎️", 
                "Minecraft 🧱", 
                "College Football 25 🏈", 
                "Go hit some Golf Balls 🏌️", 
                "Actually... just take a nap 😴"
            ];

            const randomIndex = Math.floor(Math.random() * games.length);
            const selectedGame = games[randomIndex];

            gameResultArea.innerText = "You should play: " + selectedGame;
        });
    }
});
