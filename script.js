// SELECT ALL ELEMENTS
const heading = document.getElementById('mainHeading');
const vibeBtn = document.getElementById('changeTextBtn');
const fireBtn = document.getElementById('fireButton');
const inputField = document.getElementById('userInput');
const postBtn = document.getElementById('displayBtn');
const displayArea = document.getElementById('storyDisplay');

// 1. LIGHT THE FIRE ALERT
fireBtn.addEventListener('click', function() {
    alert("🔥 The campfire is crackling! Stay cozy, traveler.");
});

// 2. CHANGE THE VIBE
vibeBtn.addEventListener('click', function() {
    heading.innerText = "A Quiet Night Under the Stars";
    vibeBtn.innerText = "Vibe Changed! ✨";
    heading.style.color = "#f1c40f"; 
});

// 3. IF / ELSE LOGIC FOR INPUT
postBtn.addEventListener('click', function() {
    const message = inputField.value.toLowerCase().trim(); // Cleans up the text

    if (message === "") {
        // Condition 1: Box is empty
        displayArea.innerText = "The woods are quiet... try typing a story first!";
        displayArea.style.color = "#e74c3c"; // Red for warning
    } 
    else if (message === "marshmallow") {
        // Condition 2: Secret word
        displayArea.innerText = "Yum! Don't forget the graham crackers and chocolate. 🍫";
        displayArea.style.color = "#f1c40f"; // Gold for secret
    } 
    else {
        // Condition 3: Any other text
        displayArea.innerText = "“" + inputField.value + "”";
        displayArea.style.color = "#f1c40f"; // Back to cozy gold
    }

    inputField.value = ""; // Always clear the box at the end
});
