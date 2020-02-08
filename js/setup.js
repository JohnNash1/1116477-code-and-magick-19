'use strict';

(function () {
  var similarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupSimilar = document.querySelector('.setup-similar');

  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var WIZARDS_AMOUNT = 4;

  var getRandomName = function (min, max) {
    return NAMES[window.wizardCastomization.getRandomNumber(min, max)] + ' ' + SURNAMES[window.wizardCastomization.getRandomNumber(min, max)];
  };

  var wizards = [];

  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    wizards[i] = {
      name: getRandomName(0, 7),
      coatColor: window.wizardCastomization.getRandomCoat(0, 5),
      eyesColor: window.wizardCastomization.getRandomEyes(0, 4)
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
})();
