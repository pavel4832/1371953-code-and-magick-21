'use strict';

(function () {
  const USER_DIALOG = document.querySelector(`.setup`);
  const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  const WIZARD_QUANTITY = 4;
  const SIMILAR_LIST_ELEMENT = USER_DIALOG.querySelector(`.setup-similar-list`);
  const SIMILAR_WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  const getWizards = function () {
    const array = [];

    for (let i = 0; i < WIZARD_QUANTITY; i++) {
      array[i] = {
        name: NAMES[window.util.getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[window.util.getRandomNumber(0, NAMES.length)],
        coatColor: COAT_COLORS[window.util.getRandomNumber(0, COAT_COLORS.length)],
        eyesColor: EYES_COLORS[window.util.getRandomNumber(0, EYES_COLORS.length)]
      };
    }
    return array;
  };

  const renderWizards = function (wizards) {
    const FRAGMENT = document.createDocumentFragment();

    for (let i = 0; i < wizards.length; i++) {
      const wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
      wizardElement.querySelector(`.setup-similar-label`).textContent = wizards[i].name;
      wizardElement.querySelector(`.wizard-coat`).style.fill = wizards[i].coatColor;
      wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards[i].eyesColor;
      FRAGMENT.appendChild(wizardElement);
    }
    SIMILAR_LIST_ELEMENT.appendChild(FRAGMENT);
  };

  const WIZARDS = getWizards();

  renderWizards(WIZARDS);

  USER_DIALOG.querySelector(`.setup-similar`).classList.remove(`hidden`);
})();
