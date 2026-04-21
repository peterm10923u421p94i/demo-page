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

// 2. CHANGE THE VIBE (TEXT CHANGE)
vibeBtn.addEventListener('click', function() {
    heading.innerText = "A Quiet Night Under the Stars";
    vibeBtn.innerText = "Vibe Changed! ✨";
    heading.style.color = "#f1c40f"; 
});

// 3. GET INPUT AND DISPLAY IT
postBtn.addEventListener('click', function() {
    const message = inputField.value;
    if (message === "") {
        displayArea.innerText = "The silence of the woods is nice, but try typing something first!";
    } else {
        displayArea.innerText = "“" + message + "”";
        inputField.value = ""; // Clears the box after posting
    }
});
