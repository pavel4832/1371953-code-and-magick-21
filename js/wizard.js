'use strict';

const WIZARD_ELEMENT = document.querySelector(`.setup-wizard-appearance`);
const COAT_ELEMENT = WIZARD_ELEMENT.querySelector(`.wizard-coat`);
const EYES_ELEMENT = WIZARD_ELEMENT.querySelector(`.wizard-eyes`);
const COAT_COLORS = [`rgb(146, 100, 161)`, `rgb(215, 210, 55)`, `rgb(241, 43, 107)`, `rgb(101, 137, 164)`, `rgb(0, 0, 0)`, `rgb(215, 210, 55)`, `rgb(56, 159, 117)`, `rgb(241, 43, 107)`];
const EYES_COLORS = [`red`, `orange`, `yellow`, `green`, `lightblue`, `blue`, `purple`];

window.colorize.setColor(COAT_ELEMENT, COAT_COLORS);
window.colorize.setColor(EYES_ELEMENT, EYES_COLORS);
