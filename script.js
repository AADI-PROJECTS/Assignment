document.getElementById('toggleMenu').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
});

// Function to adjust the scale based on screen width
function adjustScale() {
    const body = document.body;
    const width = window.innerWidth;

    // Define scaling rules
    const scalingRules = [
        { min: 992, max: 1600, scale: 0.9 },
        { min: 700, max: 767, scale: 0.8 },
        { min: 600, max: 700, scale: 0.75 },
        { min: 0, max: 600, scale: 0.5 }
    ];

    // Find the appropriate scale based on the current width
    const rule = scalingRules.find(rule => width >= rule.min && width <= rule.max);

    // Apply the scale if a rule is found
    if (rule) {
        body.style.transform = `scale(${rule.scale})`;
        body.style.transformOrigin = 'top left';
        body.style.width = `${100 / rule.scale}%`; // Adjust width to prevent overflow
    } else {
        body.style.transform = 'scale(1)'; // Reset to normal scale
        body.style.width = '100%'; // Reset width
    }
}

// Call the function on initial load
adjustScale();

// Add event listener for window resize
window.addEventListener('resize', adjustScale);