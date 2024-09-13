// ARCHIVO: menuExp3.js
// AUTOR: Ricardo Gabriel Manrique Silva
// FECHA: 13/09/24
// DESCRIPCIÓN: Archivo JS para controlar la interacción del menú de navegación
document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.getElementById('navbar-toggler');
  const navbarNav = document.getElementById('navbarNav'); // Contenedor del menú de navegación
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle'); // Enlaces con submenú desplegable

  navbarToggler.addEventListener('click', () => {
    if (navbarNav.classList.contains('collapse')) { // Si el menú está colapsado
      navbarNav.classList.remove('collapse'); // Expande el menú
    } else {
      navbarNav.classList.add('collapse'); // Colapsa el menú
    }
  });

  dropdownToggles.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
      e.preventDefault(); // Previene el comportamiento por defecto del enlace
      const menu = dropdown.nextElementSibling;
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
      } else {
        // Cerrar otros menús desplegables abiertos
        document.querySelectorAll('.dropdown-menu').forEach(m => {
          m.classList.remove('show');
        });
        menu.classList.add('show');
      }
    });
  });

  // Cerrar el menú desplegable si se hace clic fuera de él
  document.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-toggle')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });
});