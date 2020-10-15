'use strict';

(function () {
  const WIZARD_ELEMENT = document.querySelector(`.setup-wizard-appearance`);
  const COAT_ELEMENT = WIZARD_ELEMENT.querySelector(`.wizard-coat`);
  const EYES_ELEMENT = WIZARD_ELEMENT.querySelector(`.wizard-eyes`);
  const COAT_COLORS = [`rgb(146, 100, 161)`, `rgb(215, 210, 55)`, `rgb(241, 43, 107)`, `rgb(101, 137, 164)`, `rgb(0, 0, 0)`, `rgb(215, 210, 55)`, `rgb(56, 159, 117)`, `rgb(241, 43, 107)`];
  const EYES_COLORS = [`red`, `orange`, `yellow`, `green`, `lightblue`, `blue`, `purple`];

  let wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  COAT_ELEMENT.addEventListener('click', function () {
    const newColor = window.util.getRandomColor(COAT_COLORS);
    COAT_ELEMENT.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  EYES_ELEMENT.addEventListener('click', function () {
    const newColor = window.util.getRandomColor(EYES_COLORS);
    EYES_ELEMENT.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = {
    setCoatChangeHandler: function (cb) {
      wizard.onCoatChange = cb;
    },
    setEyesChangeHandler: function (cb) {
      wizard.onEyesChange = cb;
    }
  };
})();
