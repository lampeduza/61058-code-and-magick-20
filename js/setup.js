'use strict';

var NAMES = ['Хуан Себастьян', 'Кристоф', 'Люпита', 'Вашингтон'];
var SURNAMES = ['Да Марья', 'Мирабелла', 'Вальц', 'Нионго'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(146, 100, 161)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow'];

var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomArrayElement = function (array) {
  var randomValue = (Math.floor(Math.random() * array.length));

  return array[randomValue];
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: getRandomArrayElement(NAMES),
    surname: getRandomArrayElement(SURNAMES),
    coatColor: getRandomArrayElement(COAT_COLOR),
    eyesColor: getRandomArrayElement(EYES_COLOR)
  };
}

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);
