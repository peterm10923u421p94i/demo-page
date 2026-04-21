// 1. Find the elements
const heading = document.getElementById('mainHeading');
const button = document.getElementById('changeTextBtn');

// 2. Listen for the click
button.addEventListener('click', function() {
    
    // 3. Change the heading text
    heading.innerText = "A Quiet Night Under the Stars";
    
    // 4. Update the button text too
    button.innerText = "Vibe Changed! ✨";
    
    // 5. Change the color of the heading as a bonus
    heading.style.color = "#f1c40f"; 
});
