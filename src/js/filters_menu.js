'use strict';
(
  function() {
    const toggleBtn = document.getElementById('filters-toggle_btn');
    const menu = document.getElementById('device-filters');
    const body = document.querySelector('body');

    function toggleMenu() {
      menu.classList.toggle('visible');
      body.classList.toggle('noscroll');
    }

    function closeMenu() {
      body.classList.remove('noscroll');
      menu.classList.remove('visible');
    }

    function onResize () {
      if (body.classList.contains('noscroll') && body.offsetWidth > 768) {
        closeMenu();
      }
    }

    function setCurrentFilter(target){
      if (!target){
        return;
      }
      if (!target.classList.contains('current')){
        var current = menu.querySelector('.current');
        if (current) {
          current.classList.remove('current');
        }
        target.classList.add('current');
        var type = target.dataset && target.dataset.type ? target.dataset.type : null;
        var value = target.dataset && target.dataset.value ? target.dataset.value : null;
      }
      toggleBtn.querySelector('.filters-toggle_btn-text').innerText = target.innerText;
      closeMenu();
    }

    setCurrentFilter(menu.querySelector('.current'));

    menu.querySelectorAll('.filters-item').forEach(function(el) {
      el.addEventListener("click", function(e) {
        var target = e.target;
        setCurrentFilter(target);
      });
    });

    menu.addEventListener('click', closeMenu);

    toggleBtn.addEventListener('click', toggleMenu);

    window.addEventListener('resize', onResize);
  }
)();