'use strict';

(function () {
  const WIZARD_ELEMENT = document.querySelector(`.setup-wizard-appearance`);

  window.colorize = function (element, colors) {
    let fireball = element.querySelector(`input`);
    let coat = WIZARD_ELEMENT.querySelector(`input[name="coat-color"]`);
    let eyes = WIZARD_ELEMENT.querySelector(`input[name="eyes-color"]`);

    element.addEventListener(`click`, function () {
      const newColor = window.util.getRandomColor(colors);
      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = newColor;
        fireball.value = newColor;
      } else if (element.classList.contains(`wizard-coat`)) {
        element.style.fill = newColor;
        coat.value = newColor;
      } else {
        element.style.fill = newColor;
        eyes.value = newColor;
      }
    });
  };
})();
