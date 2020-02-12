'use strict';

(function () {
  var similarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupSimilar = document.querySelector('.setup-similar');

  // var NAMES = [
  //   'Иван',
  //   'Хуан Себастьян',
  //   'Мария',
  //   'Кристоф',
  //   'Виктор',
  //   'Юлия',
  //   'Люпита',
  //   'Вашингтон'
  // ];
  //
  // var SURNAMES = [
  //   'да Марья',
  //   'Верон',
  //   'Мирабелла',
  //   'Вальц',
  //   'Онопко',
  //   'Топольницкая',
  //   'Нионго',
  //   'Ирвинг'
  // ];

  var WIZARDS_AMOUNT = 4;

  // var getRandomName = function (min, max) {
  //   return NAMES[window.wizardCastomization.getRandomNumber(min, max)] + ' ' + SURNAMES[window.wizardCastomization.getRandomNumber(min, max)];
  // };

  // var wizards = [];
  //
  // for (var i = 0; i < WIZARDS_AMOUNT; i++) {
  //   wizards[i] = {
  //     name: getRandomName(0, 7),
  //     coatColor: window.wizardCastomization.getRandomCoat(0, 5),
  //     eyesColor: window.wizardCastomization.getRandomEyes(0, 4)
  //   };
  // }

  var getWizard = function (wizard) {
    var similarWizard = similarWizardTemplate.cloneNode(true);
    var wizardText = similarWizard.querySelector('.setup-similar-label');
    var wizardCoat = similarWizard.querySelector('.wizard-coat');
    var wizardEyes = similarWizard.querySelector('.wizard-eyes');

    wizardText.textContent = wizard.name;
    wizardCoat.style.fill = wizard.colorCoat;
    wizardEyes.style.fill = wizard.colorEyes;

    return similarWizard;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var j = 0; j < WIZARDS_AMOUNT; j++) {
      fragment.appendChild(getWizard(wizards[j]));
    }

    similarList.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  window.setup = {
    errorHandler: errorHandler
  };
})();
