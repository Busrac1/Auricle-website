 const menuToggleButton = document.querySelector('.menu-toggle');
 const sidebar = document.querySelector('.sidebar');

  menuToggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open')
 })

// (verdiğindeğişkenismi)togglbutton document.querySelector('değişkenismi-toggle')
// const yerine let verebilirsin ancak const değer atayamazsın.
