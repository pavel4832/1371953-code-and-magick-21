'use strict';

const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];
const FILE_CHOOSER = document.querySelector('.upload input[type=file]');
const PREVIEW = document.querySelector('.setup-user-pic');

FILE_CHOOSER.addEventListener(`change`, function () {
  const FILE = FILE_CHOOSER.files[0];
  const FILE_NAME = FILE.name.toLowerCase();

  const MATCHES = FILE_TYPES.some(function (it) {
    return FILE_NAME.endsWith(it);
  });

  if (MATCHES) {
    const READER = new FileReader();

    READER.addEventListener(`load`, function () {
      PREVIEW.src = READER.result;
    });

    READER.readAsDataURL(FILE);
  }
});
