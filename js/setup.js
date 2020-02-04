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

var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;

var getRandomName = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return NAMES[randomNumber] + ' ' + SURNAMES[randomNumber];
};

var getRandomCoat = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return COATS[randomNumber];
};

var getRandomEyes = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return EYES[randomNumber];
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
