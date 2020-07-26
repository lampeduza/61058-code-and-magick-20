'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');


var onPopupEscPress = function (evt) {
  console.log(evt);
  if (evt.key === 'Escape' && evt.target.className !== 'setup-user-name') {
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

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener ('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// Задание № 2. Валидация ввода имени персонажа

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {

});

console.log(userNameInput.validity);





















