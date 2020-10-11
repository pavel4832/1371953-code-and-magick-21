'use strict';

(function () {
  const USER_DIALOG = document.querySelector(`.setup`);
  const DIALOG_HANDLE = USER_DIALOG.querySelector('.upload');
  const SETUP_OPEN = document.querySelector(`.setup-open`);
  const SETUP_CLOSE = document.querySelector(`.setup-close`);
  const FORM = document.querySelector(`.setup-wizard-form`);
  const SETUP_USER_NAME = document.querySelector(`.setup-user-name`);
  const WIZARD_ELEMENT = document.querySelector(`.setup-wizard-appearance`);
  const FIREBALL_ELEMENT = document.querySelector(`.setup-fireball-wrap`);
  const COAT_ELEMENT = WIZARD_ELEMENT.querySelector(`.wizard-coat`);
  const EYES_ELEMENT = WIZARD_ELEMENT.querySelector(`.wizard-eyes`);
  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  const START_X_POSITION = 50;
  const START_Y_POSITION = 80;

  const onPopupEscPress = function (evt) {
    if (SETUP_USER_NAME !== document.activeElement) {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  const openPopup = function () {
    USER_DIALOG.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const closePopup = function () {
    USER_DIALOG.classList.add(`hidden`);
    USER_DIALOG.style.top = START_Y_POSITION + `px`;
    USER_DIALOG.style.left = START_X_POSITION + `%`;

    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  SETUP_OPEN.addEventListener(`click`, openPopup);

  SETUP_OPEN.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  SETUP_CLOSE.addEventListener(`click`, closePopup);

  SETUP_CLOSE.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  DIALOG_HANDLE.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    let dragged = false;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      dragged = true;

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      USER_DIALOG.style.top = (USER_DIALOG.offsetTop - shift.y) + `px`;
      USER_DIALOG.style.left = (USER_DIALOG.offsetLeft - shift.x) + `px`;
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          DIALOG_HANDLE.removeEventListener(`click`, onClickPreventDefault);
        };

        DIALOG_HANDLE.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });

  window.colorize(FIREBALL_ELEMENT, FIREBALL_COLORS);
  window.colorize(COAT_ELEMENT, COAT_COLORS);
  window.colorize(EYES_ELEMENT, EYES_COLORS);

  FORM.addEventListener(`submit`, function (evt) {
    window.backend.upload(new FormData(FORM), function () {
      USER_DIALOG.classList.add(`hidden`);
    });
    evt.preventDefault();
  });
})();
