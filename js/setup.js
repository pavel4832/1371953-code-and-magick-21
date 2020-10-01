'use strict';

const USER_DIALOG = document.querySelector(`.setup`);
const SETUP_OPEN = document.querySelector(`.setup-open`);
const SETUP_CLOSE = document.querySelector(`.setup-close`);
const SETUP_USER_NAME = document.querySelector(`.setup-user-name`);
const FIREBALL_ELEMENT = document.querySelector(`.setup-fireball-wrap`);
const WIZARD_ELEMENT = document.querySelector(`.setup-wizard-appearance`);
const COAT_ELEMENT = WIZARD_ELEMENT.querySelector(`.wizard-coat`);
const EYES_ELEMENT = WIZARD_ELEMENT.querySelector(`.wizard-eyes`);
const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_QUANTITY = 4;
const SIMILAR_LIST_ELEMENT = USER_DIALOG.querySelector(`.setup-similar-list`);
const SIMILAR_WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && SETUP_USER_NAME !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  USER_DIALOG.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  USER_DIALOG.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const onFireballClick = function () {
  let newColor = FIREBALL_COLORS[getRandomNumber(0, FIREBALL_COLORS.length)];
  FIREBALL_ELEMENT.querySelector(`input`).value = newColor;
  FIREBALL_ELEMENT.style.backgroundColor = newColor;
};

const onCoatClick = function () {
  let newColor = COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)];
  WIZARD_ELEMENT.querySelector(`input[name="coat-color"]`).value = newColor;
  WIZARD_ELEMENT.querySelector(`.wizard-coat`).style.fill = newColor;
};

const onEyesClick = function () {
  let newColor = EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)];
  WIZARD_ELEMENT.querySelector(`input[name="eyes-color"]`).value = newColor;
  WIZARD_ELEMENT.querySelector(`.wizard-eyes`).style.fill = newColor;
};

const getWizards = function () {
  const array = [];

  for (let i = 0; i < WIZARD_QUANTITY; i++) {
    array[i] = {
      name: NAMES[getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[getRandomNumber(0, NAMES.length)],
      coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)],
      eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
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

SETUP_OPEN.addEventListener(`click`, openPopup);

SETUP_OPEN.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

SETUP_CLOSE.addEventListener(`click`, closePopup);

SETUP_CLOSE.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

FIREBALL_ELEMENT.addEventListener(`click`, onFireballClick);
COAT_ELEMENT.addEventListener(`click`, onCoatClick);
EYES_ELEMENT.addEventListener(`click`, onEyesClick);

const WIZARDS = getWizards();

renderWizards(WIZARDS);

USER_DIALOG.querySelector(`.setup-similar`).classList.remove(`hidden`);
