'use strict';
(
  function() {
    // const scrollBtns = document.querySelector('.scenarios_scroll');
    // const scrollLeft = scrollBtns.querySelector('.scenarios_scroll-btn--left');
    // const scrollRight = scrollBtns.querySelector('.scenarios_scroll-btn--right');
    const scenarios = window.scenarios;
    let scenariosList = document.getElementById('scenarios');

    // function onResize () {
    //   toggleScrollBtns();
    // }

    function displayDevices(){
      const parent = scenariosList.cloneNode();
      for (let i = 0; i < scenarios.length; i++){
        const data = scenarios[i];
        const li = document.createElement("li");
        const button = document.createElement("button");
        const icon = document.createElement('div');
        const texts = document.createElement('div');
        const title = document.createElement('div');
        li.classList.add('scenarios-list_item');
        button.setAttribute('type', 'button');
        button.classList.add('card', 'card--small');
        icon.className = 'card-icon';
        icon.style.backgroundImage = 'url("assets/img/' + data.icon + '")';
        texts.className = 'card-texts';
        title.className = 'card-title';
        title.innerHTML = data.title;
        button.appendChild(icon);
        texts.appendChild(title);
        if (data.description) {
          const description = document.createElement('div');
          description.className = 'card-description';
          description.innerHTML = data.description;
          texts.appendChild(description);
        }
        button.appendChild(texts);
        li.appendChild(button);
        parent.appendChild(li);
      }
      scenariosList.parentNode.replaceChild(parent, scenariosList);
      scenariosList = parent;
      // scenariosList.addEventListener('scroll', scrollBtnsState);
      // toggleScrollBtns();
    }

    // function toggleScrollBtns(){
    //   if (scenariosList.scrollWidth > scenariosList.offsetWidth) {
    //     scrollBtns.classList.remove('hidden');
    //     scrollBtnsState()
    //   } else {
    //     scrollBtns.classList.add('hidden');
    //     scrollLeft.disabled = true;
    //     scrollRight.disabled = true;
    //   }
    // }

    // function scrollBtnsState(){
    //   if (scenariosList.scrollLeft <= 0) {
    //     scrollLeft.disabled = true;
    //     scrollRight.disabled = false;
    //   } else if (scenariosList.scrollLeft >= scenariosList.scrollWidth - scenariosList.offsetWidth){
    //     scrollLeft.disabled = false;
    //     scrollRight.disabled = true;
    //   } else {
    //     scrollLeft.disabled = false;
    //     scrollRight.disabled = false;
    //   }
    // }

    // function onScrollLeft(){
    //   scenariosList.scrollLeft = scenariosList.scrollLeft - scenariosList.offsetWidth;
    // }
    //
    // function onScrollRight(){
    //   scenariosList.scrollLeft = scenariosList.scrollLeft + scenariosList.offsetWidth;
    // }
    //
    // window.addEventListener('resize', onResize);
    //
    // scrollLeft.addEventListener('click', onScrollLeft);
    //
    // scrollRight.addEventListener('click', onScrollRight);

    displayDevices();
  }
)();