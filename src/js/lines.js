// Select all wave paths  
const waves = document.querySelectorAll('.wave');

// Function to generate a deformation based on mouse position  
function deformWaves(event) {
    const mouseX = event.clientX; // Get the mouse X position  
    waves.forEach((wave, index) => {
        const length = wave.getTotalLength(); // Get the total length of the wave  
        let newPath = []; // Initialize an array to hold new path points  

        // Loop to create the new path points based on mouse position  
        for (let i = 0; i <= length; i += 2) {
            const point = wave.getPointAtLength(i); // Get the point at length i  
            const offset = Math.sin((mouseX + index * 300) * 0.005 + i * 0.1) * 2; // Increasing deformation effect  
            newPath.push(`${i === 0 ? 'M' : 'L'}${point.x} ${point.y + offset}`); // Append new points with offset  
        }
        // Join the points to create a string for the path  
        wave.setAttribute('d', newPath.join(' '));
    });
}

// Function to reset waves back to original state  
function resetWaves() {
    waves.forEach(wave => {
        wave.removeAttribute('d'); // Reset the attribute to remove deformation  
        wave.setAttribute('d', wave.getAttribute('data-original')); // Set back to original path  
    });
}

// Store original paths  
waves.forEach(wave => {
    wave.setAttribute('data-original', wave.getAttribute('d')); // Store original path  
});

// Add event listeners for mouse enter and leave  
const dynamicLinesContainer = document.querySelector('.dynamic-lines');
dynamicLinesContainer.addEventListener('mousemove', deformWaves);
dynamicLinesContainer.addEventListener('mouseleave', resetWaves); // Reset on mouse leave  