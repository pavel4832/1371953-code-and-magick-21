'use strict';

(function () {
  const UPLOAD_URL = `https://21.javascript.pages.academy/code-and-magick`;

  window.upload = function (data, onSuccess) {
    const XHR = new XMLHttpRequest();
    XHR.responseType = `json`;

    XHR.addEventListener(`load`, function () {
      onSuccess(XHR.response);
    });

    XHR.open(`POST`, UPLOAD_URL);
    XHR.send(data);
  };
})();
