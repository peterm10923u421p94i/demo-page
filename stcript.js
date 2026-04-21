// 1. Find the button in the HTML using its ID
const campfireButton = document.getElementById('fireButton');

// 2. Tell the button to "listen" for a click
campfireButton.addEventListener('click', function() {
    
    // 3. This is the action that happens when the click occurs
    alert("🔥 The campfire is crackling! Stay cozy, traveler.");
    
    // Bonus: Log a message to the developer console too
    console.log("The user lit the fire!");
});
