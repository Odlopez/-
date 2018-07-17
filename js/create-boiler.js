'use strict';

(function () {
  const FORM_CLASS = 'form';
  const KEY_CODE = {
    ENTER: 13,
    ESC: 27
  };
  const options = {
    name: {
      type: 'text',
      label: 'Наименования котельной '
    },
    load: {
      type: 'number',
      label: 'Нагрузка котельной ',
      step: 0.001
    },
    loss: {
      type: 'number',
      label: 'Потери в сетях ',
      step: 0.1
    },
    specific: {
      type: 'number',
      label: 'Норма удельного расхода ',
      step: 0.1
    },
  }

  // Создает элемент input
  const creatInput = function (inputName, inputType, step) {
    const inputElement = document.createElement('input');

    inputElement.name = inputName;
    inputElement.type = inputType;

    if (step) {
      inputElement.step = step;
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
  window.createBoiler = function (func) {
    const form = document.createElement('form');
    const submit = document.createElement('button');

    // Обработчик события "клик" по сабмиту формы создания новой котельной 
    const onSubmitClick = function (evt) {
      evt.preventDefault();

      const isSuccess = func(form.elements);
      
      if (isSuccess) {
        deleteForm();
      }
    };

    submit.setAttribute('type', 'submit');
    submit.textContent = 'Сохранить';

    submit.addEventListener('click', onSubmitClick);

    for (let key in options) {
      let label = createLebel(options[key].label, creatInput(key, options[key].type, options[key].step));
      form.appendChild(label);   
    }
    
    form.appendChild(submit);
  
    form.classList.add(FORM_CLASS);
    document.body.appendChild(form);

    document.addEventListener('keydown', onDocumentKeydown);
  };
})();