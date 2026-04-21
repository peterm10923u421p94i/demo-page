// SELECTING THE ELEMENTS
const heading = document.getElementById('mainHeading');
const vibeBtn = document.getElementById('changeTextBtn');
const fireBtn = document.getElementById('fireButton');

// LOGIC FOR THE "CHANGE THE VIBE" BUTTON
vibeBtn.addEventListener('click', function() {
    heading.innerText = "A Quiet Night Under the Stars";
    vibeBtn.innerText = "Vibe Changed! ✨";
    heading.style.color = "#f1c40f"; 
});

// LOGIC FOR THE "LIGHT THE FIRE" BUTTON
fireBtn.addEventListener('click', function() {
    alert("🔥 The campfire is crackling! Stay cozy, traveler.");
});
