'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilar = document.querySelector('.setup-similar');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupUserName = document.querySelector('.setup-user-name');
var setupWizardCoat = document.querySelector('.wizard-coat');
var setupWizardEyes = document.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var coatInput = document.querySelector('input[name="coat-color"]');
var eyesInput = document.querySelector('input[name="eyes-color"]');
var fireballInput = document.querySelector('input[name="fireball-color"]');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target !== setupUserName) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
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
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
};

var onCloseButtonKeydown = function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
};

var onCoatClick = function () {
  setupWizardCoat.style.fill = getRandomCoat(0, 5);
  coatInput.value = setupWizardCoat.style.fill;
};

var onEyesClick = function () {
  setupWizardEyes.style.fill = getRandomEyes(0, 4);
  eyesInput.value = setupWizardEyes.style.fill;
};

var onFireballClick = function () {
  setupFireballWrap.style.backgroundColor = getRandomFireball(0, 4);

  if (setupFireballWrap.style.backgroundColor === 'rgb(92, 230, 192)') {
    fireballInput.value = '#5ce6c0';
  }
  if (setupFireballWrap.style.backgroundColor === 'rgb(232, 72, 213)') {
    fireballInput.value = '#e848d5';
  }
  if (setupFireballWrap.style.backgroundColor === 'rgb(230, 232, 72)') {
    fireballInput.value = '#e6e848';
  }
  if (setupFireballWrap.style.backgroundColor === 'rgb(238, 72, 48)') {
    fireballInput.value = '#ee4830';
  }
  if (setupFireballWrap.style.backgroundColor === 'rgb(48, 168, 238)') {
    fireballInput.value = '#30a8ee';
  }
};


var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

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

var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomFireball = function (min, max) {
  return FIREBALLS[getRandomNumber(min, max)];
};

var getRandomName = function (min, max) {
  return NAMES[getRandomNumber(min, max)] + ' ' + SURNAMES[getRandomNumber(min, max)];
};

var getRandomCoat = function (min, max) {
  return COATS[getRandomNumber(min, max)];
};

var getRandomEyes = function (min, max) {
  return EYES[getRandomNumber(min, max)];
};

var wizards = [];

for (var i = 0; i < WIZARDS_AMOUNT; i++) {
  wizards[i] = {
    name: getRandomName(0, 7),
    coatColor: getRandomCoat(0, 5),
    eyesColor: getRandomEyes(0, 4)
  };
}

var getWizard = function (wizard) {
  var similarWizard = similarWizardTemplate.cloneNode(true);
  var wizardText = similarWizard.querySelector('.setup-similar-label');
  var wizardCoat = similarWizard.querySelector('.wizard-coat');
  var wizardEyes = similarWizard.querySelector('.wizard-eyes');

  wizardText.textContent = wizard.name;
  wizardCoat.style.fill = wizard.coatColor;
  wizardEyes.style.fill = wizard.eyesColor;

  return similarWizard;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(getWizard(wizards[j]));
}

similarList.appendChild(fragment);
setupSimilar.classList.remove('hidden');

setupOpen.addEventListener('click', onButtonClick);
setupClose.addEventListener('click', onCloseButtonClick);
setupOpenIcon.addEventListener('keydown', onIconKeydown);
setupClose.addEventListener('keydown', onCloseButtonKeydown);
setupWizardCoat.addEventListener('click', onCoatClick);
setupWizardEyes.addEventListener('click', onEyesClick);
setupFireballWrap.addEventListener('click', onFireballClick);
