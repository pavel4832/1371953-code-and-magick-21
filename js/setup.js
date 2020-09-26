'use strict';

const NAME = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];

const FAMILY = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];

const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];

const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const USER_DIALOG = document.querySelector(`.setup`);

const SIMILAR_LIST_ELEMENT = USER_DIALOG.querySelector(`.setup-similar-list`);

const SIMILAR_WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const WIZARDS = [];

const FRAGMENT = document.createDocumentFragment();

const renderWizard = function (wizard) {
  const wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getWizardName = function (name, family) {
  let a = getRandom(0, 8);
  let b = getRandom(0, 8);
  return name[a] + ` ` + family[b];
};

const getWizardCoatColor = function (coatColor) {
  let a = getRandom(0, 6);
  return coatColor[a];
};

const getWizardEyesColor = function (eyesColor) {
  let a = getRandom(0, 5);
  return eyesColor[a];
};

const getWizard = function (array) {
  for (let i = 0; i < 4; i++) {
    array[i] = {
      name: getWizardName(NAME, FAMILY),
      coatColor: getWizardCoatColor(COAT_COLOR),
      eyesColor: getWizardEyesColor(EYES_COLOR)
    };
  }
};

USER_DIALOG.classList.remove(`hidden`);

getWizard(WIZARDS);

for (let i = 0; i < WIZARDS.length; i++) {
  FRAGMENT.appendChild(renderWizard(WIZARDS[i]));
}

SIMILAR_LIST_ELEMENT.appendChild(FRAGMENT);

USER_DIALOG.querySelector(`.setup-similar`).classList.remove(`hidden`);
