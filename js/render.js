'use strict';

const MAX_WIZARD_QUANTITY = 4;
const SIMILAR = document.querySelector(`.setup-similar`);
const SIMILAR_LIST_ELEMENT = document.querySelector(`.setup-similar-list`);
const SIMILAR_WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const renderWizard = function (wizard) {
  const WIZARD_ELEMENT = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
  WIZARD_ELEMENT.querySelector(`.setup-similar-label`).textContent = wizard.name;
  WIZARD_ELEMENT.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
  WIZARD_ELEMENT.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

  return WIZARD_ELEMENT;
};

window.render = function (wizards) {
  let wizardQuantity = wizards.length > MAX_WIZARD_QUANTITY ? MAX_WIZARD_QUANTITY : wizards.length;

  SIMILAR_LIST_ELEMENT.innerHTML = ``;
  for (let i = 0; i < wizardQuantity; i++) {
    SIMILAR_LIST_ELEMENT.appendChild(renderWizard(wizards[i]));
  }
  SIMILAR.classList.remove(`hidden`);
};
