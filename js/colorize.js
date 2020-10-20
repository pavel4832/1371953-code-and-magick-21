'use strict';

const WIZARD_ELEMENT = document.querySelector(`.setup-wizard-appearance`);
let color = {
  onEyesChange: function () {},
  onCoatChange: function () {}
};

window.colorize = {
  setCoatChangeHandler: function (cb) {
    color.onCoatChange = cb;
  },
  setEyesChangeHandler: function (cb) {
    color.onEyesChange = cb;
  },
  setColor: function (element, colors) {
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
        color.onCoatChange(newColor);
      } else {
        element.style.fill = newColor;
        eyes.value = newColor;
        color.onEyesChange(newColor);
      }
    });
  }
};
