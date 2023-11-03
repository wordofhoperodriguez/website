  function toggleMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const thirdLine = document.getElementById('thirdLine');
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active1');
    menuToggle.classList.toggle('menu-toggle1');
    thirdLine.classList.toggle('third-line1');
  }
  function updateDropdownText() {
    const screenWidth = window.innerWidth;
    const dropdownNav = document.querySelector('.dropdown-nav');
    const dropdownNav1 = document.querySelector('.dropdown a');

    if (screenWidth <= 600) {
      dropdownNav.textContent = 'Pastors';
      dropdownNav1.href = 'pastors.html';
    } else {
      dropdownNav.textContent = 'More';
      dropdownNav1.href = '';
    }
  }

  window.addEventListener('load', updateDropdownText);
  window.addEventListener('resize', updateDropdownText);

  window.addEventListener('click', function(e) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      const dropdown = dropdowns[i];
      if (e.target.closest('.dropdown') !== dropdown.parentNode) {
        dropdown.style.display = 'none';
      }
    }
  });
