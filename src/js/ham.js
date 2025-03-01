// Espera hasta que el contenido del DOM esté completamente cargado  
document.addEventListener('DOMContentLoaded', function () {  
    // Selecciona el ícono de hamburguesa y el contenedor de navegación  
    const hamburger = document.getElementById('hamburger');  
    const navContainer = document.querySelector('.nav-container');  

    // Agrega un evento de clic al ícono de hamburguesa  
    hamburger.addEventListener('click', function () {  
        // Alterna la clase 'active' en el contenedor de navegación  
        navContainer.classList.toggle('active');  
    });  

    // Oculta el contenedor de navegación cuando el mouse sale  
    navContainer.addEventListener('mouseleave', function () {  
        navContainer.classList.remove('active'); // Remueve la clase 'active'  
    });  

    // Oculta el menú si se hace clic fuera de él  
    document.addEventListener('click', function (event) {  
        if (!navContainer.contains(event.target) && !hamburger.contains(event.target)) {  
            navContainer.classList.remove('active'); // Remueve la clase 'active' si se hace clic fuera  
        }  
    });  

    // Agregar un evento de 'touchstart' para mejorar la experiencia en móviles  
    document.addEventListener('touchstart', function (event) {  
        if (!navContainer.contains(event.target) && !hamburger.contains(event.target)) {  
            navContainer.classList.remove('active'); // Remueve la clase 'active' si se toca fuera  
        }  
    });  
});  