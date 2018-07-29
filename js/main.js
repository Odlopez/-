'use strict';

(function () {
  const newBoilerButton = document.querySelector('button');
  window.boilers = {};

  // Создает объект новой котельной
  const makeNewBolierDataObj = function (arg) {
    const newBoiler = new window.Boiler(arg);
    const nameBoiler = newBoiler.name;

    const isNameRepeat = Object.keys(boilers).some(function (it) {
      return it === nameBoiler;
    });

    if (!isNameRepeat && nameBoiler) {
      window.boilers[nameBoiler] = newBoiler;
    } else {
      alert('Вы не ввели название котельной или же котельная с таким названием уже существует!');

      return false;
    }

    return window.boilers[nameBoiler];
  };

  // Обработчик события 'клик' для кнопки создания новой котельной
  const onNewBoilerButtonClick = function (evt) {
    evt.preventDefault();

    window.createBoiler(makeNewBolierDataObj, window.createBoilerTable);
  };

  newBoilerButton.addEventListener('click', onNewBoilerButtonClick);
})();