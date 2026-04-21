"use strict"; // Prevents common coding mistakes

// --- SELECT ALL ELEMENTS ---
const elements = {
    heading: document.getElementById('mainHeading'),
    vibeBtn: document.getElementById('changeTextBtn'),
    fireBtn: document.getElementById('fireButton'),
    inputField: document.getElementById('userInput'),
    postBtn: document.getElementById('displayBtn'),
    displayArea: document.getElementById('storyDisplay'),
    genBtn: document.getElementById('generatorBtn'),
    genResult: document.getElementById('gameResult')
};

// --- 1. LIGHT THE FIRE ---
elements.fireBtn.addEventListener('click', () => {
    alert("🔥 The campfire is crackling! Stay cozy, traveler.");
});

// --- 2. CHANGE THE VIBE ---
elements.vibeBtn.addEventListener('click', () => {
    elements.heading.innerText = "A Quiet Night Under the Stars";
    elements.vibeBtn.innerText = "Vibe Changed! ✨";
    elements.heading.style.color = "#f1c40f"; 
});

// --- 3. STORY INPUT WITH IMPROVED LOGIC ---
elements.postBtn.addEventListener('click', () => {
    const rawValue = elements.inputField.value;
    const cleanValue = rawValue.toLowerCase().trim();

    // Using an if/else tree for responses
    if (!cleanValue) {
        elements.displayArea.innerText = "The woods are quiet... try typing a story first!";
        elements.displayArea.style.color = "#e74c3c";
    } else if (cleanValue === "marshmallow") {
        elements.displayArea.innerText = "Yum! Don't forget the graham crackers. 🍫";
        elements.displayArea.style.color = "#f1c40f";
    } else {
        // Using a Template Literal (Backticks) for cleaner code
        elements.displayArea.innerText = `“${rawValue}”`;
        elements.displayArea.style.color = "#f1c40f";
    }
    elements.inputField.value = ""; 
});

// --- 4. ENHANCED RANDOM GENERATOR ---
const pickRandomGame = () => {
    const games = [
        "Rocket League 🏎️", 
        "Minecraft 🧱", 
        "College Football 25 🏈", 
        "Go hit some Golf Balls 🏌️", 
        "Actually... just take a nap 😴"
    ];

    const randomIndex = Math.floor(Math.random() * games.length);
    elements.genResult.innerText = `You should play: ${games[randomIndex]}`;
};

elements.genBtn.addEventListener('click', pickRandomGame);
