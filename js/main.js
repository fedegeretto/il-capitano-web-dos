document.addEventListener('DOMContentLoaded', function() {
  // Obtener todos los enlaces dentro del navbar
  let navLinks = document.querySelectorAll('.navbar a');
  console.log(navLinks);

  // Agregar un evento de clic a cada enlace
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Obtener el input checkbox que controla el navbar
      var checkbox = document.querySelector('header input[type="checkbox"]');
      
      // Cerrar el navbar después de un breve lapso de tiempo (300 ms)
      setTimeout(function() {
        checkbox.checked = false;
      }, 100);
    });
  });
});