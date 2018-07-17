'use strict';

(function () {
  // Возвращает дату в условленном формате
  window.getDate = function() {
    const today = new Date();
    const year = ('' + today.getFullYear()).slice(2);
    const month = (today.getMonth() + 1 + '').length === 2 ? (today.getMonth() + 1 + '') : '0' + (today.getMonth() + 1 + '');
    const day = today.getDate();

    return '' + day + '.' + month + '.' + year;
  };
})();