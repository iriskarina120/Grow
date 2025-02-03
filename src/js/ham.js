// Wait until the DOM content is fully loaded  
document.addEventListener('DOMContentLoaded', function () {  
    // Select the hamburger icon and the navigation container  
    const hamburger = document.getElementById('hamburger');  
    const navContainer = document.querySelector('.nav-container');  

    // Add a click event listener to the hamburger icon  
    hamburger.addEventListener('click', function () {  
        // Toggle the 'active' class on the navigation container  
        navContainer.classList.toggle('active');  
    });  

    // Hide the nav container when mouse leaves  
    navContainer.addEventListener('mouseleave', function () {  
        navContainer.classList.remove('active'); // Remove the active class  
    });  
});  