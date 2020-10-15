'use strict';

(function () {
  const FIREBALL_ELEMENT = document.querySelector(`.setup-fireball-wrap`);
  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  let wizards = [];
  let coatColor = `rgb(101, 137, 164)`;
  let eyesColor = `black`;

  const getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.colorize.setEyesChangeHandler(window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  }));

  window.colorize.setCoatChangeHandler(window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  }));

  const errorHandler = function (errorMessage) {
    window.util.createErrorMessage(errorMessage);
  };

  const successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.colorize.setColor(FIREBALL_ELEMENT, FIREBALL_COLORS);

  window.backend.load(successHandler, errorHandler);
})();
