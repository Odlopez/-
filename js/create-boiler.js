'use strict';

(function () {
  const FORM_CLASS = 'form';
  const KEY_CODE = {
    ENTER: 13,
    ESC: 27
  };
  const options = {
    name: {
      name: 'name',
      type: 'text',
      label: 'Наименования котельной '
    },
    load: {
      name: 'load',
      type: 'number',
      label: 'Нагрузка котельной ',
      step: 0.001,
      min: 0
    },
    loss: {
      name: 'loss',
      type: 'number',
      label: 'Потери в сетях ',
      step: 0.1,
      min: 0,
      max: 100
    },
    specific: {
      name: 'specific',
      type: 'number',
      label: 'Норма удельного расхода ',
      step: 0.1,
      min: 142.8
    },
  };
  let newBolierDataObj;
  const newBoilerButton = document.querySelector('button');

  // Создает элемент input
  const creatInput = function (inputOptions) {
    const inputElement = document.createElement('input');

    for (let key in inputOptions) {
      inputElement[key] = inputOptions[key];
    }

    return inputElement;
  };

  // Создает элемент label
  const createLebel = function (text, input) {
    const label = document.createElement('label');
    label.textContent = text;
    label.appendChild(input);

    return label;
  }; 

  // Удаляет форму создания новой котельной
  const deleteForm = function () {
    const form = document.querySelector('.form');

    document.body.removeChild(form);
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  const onDocumentKeydown = function (evt) {
    if (evt.keyCode === KEY_CODE.ESC) {
      deleteForm();
    }
  };

  // Создает форму для регистрации новой котельной
  window.createBoiler = function (createDataObj, createNodeElement) {
    const form = document.createElement('form');
    const submit = document.createElement('button');

    // Обработчик события "клик" по сабмиту формы создания новой котельной 
    const onSubmitClick = function (evt) {
      evt.preventDefault();

      newBolierDataObj = createDataObj(form.elements);
      
      if (newBolierDataObj) {
        deleteForm();
        createNodeElement(newBolierDataObj);
      }
    };

    submit.setAttribute('type', 'submit');
    submit.textContent = 'Сохранить';

    submit.addEventListener('click', onSubmitClick);

    for (let key in options) {
      let label = createLebel(options[key].label, creatInput(options[key]));
      form.appendChild(label);   
    }
    
    form.appendChild(submit);
  
    form.classList.add(FORM_CLASS);
    newBoilerButton.insertAdjacentElement('afterend', form);

    document.addEventListener('keydown', onDocumentKeydown);
  };
})();