'use strict';

(function () {
  const boilers = {};
  const newBoilerButton = document.querySelector('button');

  // Создает объект новой котельной
  const makeNewBoiler = function (arg) {
    const newBoiler = new window.Boiler(arg);
    const nameBoiler = newBoiler.name;

    const isNameRepeat = Object.keys(boilers).some(function (it) {
      return it === nameBoiler;
    });

    if (!isNameRepeat && nameBoiler) {
      boilers[nameBoiler] = newBoiler;
    } else {
      alert('Вы не ввели название котельной или же котельная с таким названием уже существует!');

      return false;
    }

    return true;
  };



  // Обработчик события 'клик' для кнопки создания новой котельной
  const onNewBoilerButtonClick = function (evt) {
    evt.preventDefault();

    window.createBoiler(makeNewBoiler);
  };

  newBoilerButton.addEventListener('click', onNewBoilerButtonClick);

  window.boilers = boilers;
})();