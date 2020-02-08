'use strict';

(function () {
  var COATS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var FIREBALLS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var EYES = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var setupWizardCoat = document.querySelector('.wizard-coat');
  var setupWizardEyes = document.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var coatInput = document.querySelector('input[name="coat-color"]');
  var eyesInput = document.querySelector('input[name="eyes-color"]');
  var fireballInput = document.querySelector('input[name="fireball-color"]');

  window.wizardCastomization = {
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomCoat: function (min, max) {
      return COATS[this.getRandomNumber(min, max)];
    },
    getRandomEyes: function (min, max) {
      return EYES[this.getRandomNumber(min, max)];
    },
    getRandomFireball: function (min, max) {
      return FIREBALLS[this.getRandomNumber(min, max)];
    }
  };

  var onCoatClick = function () {
    setupWizardCoat.style.fill = window.wizardCastomization.getRandomCoat(0, 5);
    coatInput.value = setupWizardCoat.style.fill;
  };

  var onEyesClick = function () {
    setupWizardEyes.style.fill = window.wizardCastomization.getRandomEyes(0, 4);
    eyesInput.value = setupWizardEyes.style.fill;
  };

  var onFireballClick = function () {
    setupFireballWrap.style.backgroundColor = window.wizardCastomization.getRandomFireball(0, 4);

    switch (setupFireballWrap.style.backgroundColor) {
      case 'rgb(92, 230, 192)':
        fireballInput.value = '#5ce6c0';
        break;
      case 'rgb(232, 72, 213)':
        fireballInput.value = '#e848d5';
        break;
      case 'rgb(230, 232, 72)':
        fireballInput.value = '#e6e848';
        break;
      case 'rgb(238, 72, 48)':
        fireballInput.value = '#ee4830';
        break;
      case 'rgb(48, 168, 238)':
        fireballInput.value = '#30a8ee';
        break;
    }
  };

  setupWizardCoat.addEventListener('click', onCoatClick);
  setupWizardEyes.addEventListener('click', onEyesClick);
  setupFireballWrap.addEventListener('click', onFireballClick);
})();
