'use strict';

(function () {
  var SETUP_DEFAULT_TOP = '80px';
  var SETUP_DEFAULT_LEFT = '50%';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var dialogHandle = setup.querySelector('.upload');
  var form = setup.querySelector('.setup-wizard-form');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setup.style.top = SETUP_DEFAULT_TOP;
    setup.style.left = SETUP_DEFAULT_LEFT;
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onButtonClick = function () {
    openPopup();
  };

  var onCloseButtonClick = function () {
    closePopup();
  };

  var onIconKeydown = function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  };

  var onCloseButtonKeydown = function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  };

  var onDialogHandleMove = function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  setupOpen.addEventListener('click', onButtonClick);
  setupClose.addEventListener('click', onCloseButtonClick);
  setupOpenIcon.addEventListener('keydown', onIconKeydown);
  setupClose.addEventListener('keydown', onCloseButtonKeydown);
  dialogHandle.addEventListener('mousedown', onDialogHandleMove);

  var onSaveSuccess = function () {
    setup.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSaveSuccess, window.setup.errorHandler);

    evt.preventDefault();
  });
})();
