'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const NAME_LENGTH = 8;
const COAT_COLOR_LENGTH = 6;
const EYES_COLOR_LENGTH = 5;
const WIZARD_QUANTITY = 4;
const USER_DIALOG = document.querySelector(`.setup`);
const SIMILAR_LIST_ELEMENT = USER_DIALOG.querySelector(`.setup-similar-list`);
const SIMILAR_WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getWizard = function () {
  const array = [];

  for (let i = 0; i < WIZARD_QUANTITY; i++) {
    array[i] = {
      name: NAMES[getRandomNumber(0, NAME_LENGTH)] + ` ` + SURNAMES[getRandomNumber(0, NAME_LENGTH)],
      coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLOR_LENGTH)],
      eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLOR_LENGTH)]
    };
  }
  return array;
};

const renderWizard = function (wizards) {
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

USER_DIALOG.classList.remove(`hidden`);

const WIZARDS = getWizard();

renderWizard(WIZARDS);

USER_DIALOG.querySelector(`.setup-similar`).classList.remove(`hidden`);
