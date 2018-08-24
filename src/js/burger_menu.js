'use strict';
(
  function() {
    const toggleBtn = document.getElementById('burger_btn');
    const navMenu = document.getElementById('main_nav');
    const body = document.querySelector('body');

    function toggleMenu() {
      navMenu.classList.toggle('visible');
      toggleBtn.classList.toggle('cross');
      body.classList.toggle('noscroll');
    }

    function onResize () {
      if (body.classList.contains('noscroll') && body.offsetWidth > 768) {
        body.classList.remove('noscroll');
        navMenu.classList.remove('visible');
        toggleBtn.classList.remove('cross');
      }
    }

    toggleBtn.addEventListener('click', toggleMenu);

    window.addEventListener('resize', onResize);
  }
)();