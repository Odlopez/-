'use strict';

(function () {
  // Конструктор для создания объекта котельной
  const Boiler = function (arg) {
    var x = this;
    Array.prototype.slice.apply(arg).forEach(function (it) {
      if (it.tagName.toLowerCase() === 'input') {
        x[it.getAttribute('name')] = it.value;
      }
   });
  };

  // Конструктор для создания объекта с данными по котельной для заданной даты
  const Day = function (parent, date) {
    this.parent = parent;
  };

  Boiler.prototype.makeNewDay = function (date) {
    this[date] = new Day(this, date);
  }

  window.Boiler = Boiler;
})();