'use strict';

(function () {
  const CLASSES = {
    TEMPLATE: 'template',
    BOILER_TABLE: 'boiler-talbe',
    BOILER_NAME: 'boiler-talbe__name',
    LOSS: 'boiler-talbe__loss',
    LOAD: 'boiler-talbe__load',
    SPECIFIC: 'boiler-talbe__specific'
  };
  const template = document.querySelector('.' + CLASSES.TEMPLATE);

  // Создает и отрисовывает таблицу с данными по котельной
  window.createBoilerTable = function (boilerInfo) {
    const table = template.content.querySelector('.' + CLASSES.BOILER_TABLE).cloneNode(true);
    const caption = table.querySelector('.' + CLASSES.BOILER_NAME);
    const loss = table.querySelector('.' + CLASSES.LOSS);
    const load = table.querySelector('.' + CLASSES.LOAD);
    const specific = table.querySelector('.' + CLASSES.SPECIFIC);

    caption.textContent = boilerInfo.name;
    
    if (boilerInfo.loss) {
      loss.children[1].querySelector('.value').textContent = boilerInfo.loss;
    }

    if (boilerInfo.load) {
      load.children[1].querySelector('.value').textContent = boilerInfo.load;
    }

    if (boilerInfo.specific) {
      specific.children[1].querySelector('.value').textContent = boilerInfo.specific;
    }

    document.body.appendChild(table);
  }

})();