'use strict';

(function () {
  const USER_DIALOG = document.querySelector(`.setup`);
  const MAX_WIZARD_QUANTITY = 4;
  const SIMILAR_LIST_ELEMENT = USER_DIALOG.querySelector(`.setup-similar-list`);
  const SIMILAR_WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  let wizardQuantity;

  const renderWizard = function (wizard) {
    const WIZARD_ELEMENT = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
    WIZARD_ELEMENT.querySelector(`.setup-similar-label`).textContent = wizard.name;
    WIZARD_ELEMENT.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    WIZARD_ELEMENT.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return WIZARD_ELEMENT;
  };

  const errorHandler = function (errorMessage) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  const successHandler = function (wizards) {
    const FRAGMENT = document.createDocumentFragment();

    if (wizards.length < MAX_WIZARD_QUANTITY) {
      wizardQuantity = wizards.length;
    } else {
      wizardQuantity = MAX_WIZARD_QUANTITY;
    }

    for (let i = 0; i < wizardQuantity; i++) {
      FRAGMENT.appendChild(renderWizard(wizards[i]));
    }
    SIMILAR_LIST_ELEMENT.appendChild(FRAGMENT);

    USER_DIALOG.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  window.backend.load(successHandler, errorHandler);
})();
