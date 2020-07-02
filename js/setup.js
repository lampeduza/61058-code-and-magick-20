'use strict';

var NAMES = ['Хуан Себастьян', 'Кристоф', 'Люпита', 'Вашингтон'];
var SURNAMES = ['Да Марья', 'Мирабелла', 'Вальц', 'Нионго'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(146, 100, 161)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow'];

var wizards = [
  {
    name: NAMES[0],
    surname: SURNAMES[0],
    coatColor: COAT_COLOR[0],
    eyesColor: EYES_COLOR[0]
  },

  {
    name: NAMES[1],
    surname: SURNAMES[1],
    coatColor: COAT_COLOR[1],
    eyesColor: EYES_COLOR[1]
  },

  {
    name: NAMES[2],
    surname: SURNAMES[2],
    coatColor: COAT_COLOR[2],
    eyesColor: EYES_COLOR[2]
  },

  {
    name: NAMES[3],
    surname: SURNAMES[3],
    coatColor: COAT_COLOR[3],
    eyesColor: EYES_COLOR[3]
  }
];

var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.setup-similar-label').insertAdjacentHTML('beforeend', '<p>' + wizards[i].surname + '</p>');
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
};

 // Как Случайно сгенерировать имя персонажа и фамилию? Как это сделать случайным образом?
 // При желании имя и фамилию можно в случайном порядке менять местами (как понять?)
 // как генерировать случайных волшебников?
 /* 4) Отрисуйте сгенерированные DOM - элементы в блок .setup-similar-list.
 Для вставки элементов используйте documentFragment? Так вроде же с тегом template работаем? */
 // Код должен быть разделен на отдельные функции?
 /* Стоит отдельно объявить функцию генерации случайных данных,
 функцию создания DOM - элемента на основе JS-объекта, функцию заполнения блока DOM-элементами на основе массива JS-объектов. */












