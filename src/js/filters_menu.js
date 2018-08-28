'use strict';
(
  function() {
    const toggleBtn = document.getElementById('filters-toggle_btn');
    const menu = document.getElementById('device-filters');
    const body = document.querySelector('body');
    const devices = window.devices;
    let devicesList = document.getElementById('devices');

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
        target = menu.querySelector('.filters-item[data-type="all"]');
      }
      if (!target.classList.contains('current')){
        const current = menu.querySelector('.current');
        if (current) {
          current.classList.remove('current');
        }
        target.classList.add('current');
        const type = target.dataset && target.dataset.type ? target.dataset.type : null;
        const value = target.dataset && target.dataset.value ? target.dataset.value : null;
        displayDevices(type, value);
      }
      toggleBtn.querySelector('.filters-toggle_btn-text').innerText = target.innerText;
      closeMenu();
    }

    function displayDevices(type, value){
      const parent = devicesList.cloneNode();
      let filtered = [];
      if (type === 'all') {
        filtered = devices
      } else {
        filtered = devices.filter(obj => (
          obj[type] === value
        ))
      }
      for (let i = 0; i < filtered.length; i++){
        const data = filtered[i];
        const li = document.createElement("li");
        const button = document.createElement("button");
        const icon = document.createElement('div');
        const texts = document.createElement('div');
        const title = document.createElement('div');
        const description = document.createElement('div');
        button.setAttribute('type', 'button');
        button.classList.add('devices-list_item', 'device');
        icon.className = 'device-icon';
        icon.style.backgroundImage = 'url("assets/img/' + data.icon + '")';
        texts.className = 'device-texts';
        title.className = 'device-title';
        title.innerText = data.name;
        description.className = 'device-description';
        description.innerText = data.description;
        button.appendChild(icon);
        texts.appendChild(title);
        texts.appendChild(description);
        button.appendChild(texts);
        li.appendChild(button);
        parent.appendChild(li);
      }
      devicesList.parentNode.replaceChild(parent, devicesList);
      devicesList = parent;
      parent.querySelectorAll(".devices-list_item").forEach(function(el) {
        el.addEventListener("click", function (e) {
          var target = e.target;
          console.log(target)
        });
      });
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