'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomName = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return names[randomNumber] + ' ' + surnames[randomNumber];
};

var getRandomCoat = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return coats[randomNumber];
};

var getRandomEyes = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return eyes[randomNumber];
};

var wizards = [];

for (var i = 0; i < 4; i++) {
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

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

// var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];
//
// var wizards = [
//   {
//     name: WIZARD_NAMES[0],
//     coatColor: 'rgb(241, 43, 107)'
//   },
//   {
//     name: WIZARD_NAMES[1],
//     coatColor: 'rgb(215, 210, 55)'
//   },
//   {
//     name: WIZARD_NAMES[2],
//     coatColor: 'rgb(101, 137, 164)'
//   },
//   {
//     name: WIZARD_NAMES[3],
//     coatColor: 'rgb(127, 127, 127)'
//   }
// ];
//
// var getWizard = function (wizard) {
//   var similarWizard = similarWizardTemplate.cloneNode(true);
//   var wizardText = similarWizard.querySelector('.setup-similar-label');
//   var wizardCoat = similarWizard.querySelector('.wizard-coat');
//   wizardText.textContent = wizard.name;
//   wizardCoat.style.fill = wizard.coatColor;
//
//   return similarWizard;
// };
//
// var fragment = document.createDocumentFragment();
// for (var i = 0; i < wizards.length; i++) {
//   fragment.appendChild(getWizard(wizards[i]));
// }
// similarList.appendChild(fragment);
