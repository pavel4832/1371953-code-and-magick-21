'use strict';

(function () {
  const WIZARD_ELEMENT = document.querySelector(`.setup-wizard-appearance`);

  const getRandomColor = function (colors) {
    return colors[Math.floor(colors.length * Math.random())];
  };

  window.colorize = function (element, colors) {
    let fireball = element.querySelector(`input`);
    let coat = WIZARD_ELEMENT.querySelector(`input[name="coat-color"]`);
    let eyes = WIZARD_ELEMENT.querySelector(`input[name="eyes-color"]`);

    element.addEventListener(`click`, function () {
      const color = getRandomColor(colors);
      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = color;
        fireball.value = color;
      } else if (element.classList.contains(`wizard-coat`)) {
        element.style.fill = color;
        coat.value = color;
      } else {
        element.style.fill = color;
        eyes.value = color;
      }
    });
  };
})();
