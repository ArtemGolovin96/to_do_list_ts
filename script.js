


// Кнопка сортировки
let sortImg = document.querySelector('.sortbutton');
let  delButton = document.querySelectorAll('.task-button');
let firstDeleteButton = document.querySelector('.task-button')

//Обработчики наведения мыши на кнопку сортировки
sortImg.addEventListener('mouseover', (event) => {
    event.preventDefault();
        if (sortImg.src.endsWith('/img/todo_down_svg.svg')) {
            sortImg.src = './img/sort_down_black.svg';
        } else if (sortImg.src.endsWith('/img/sort_up_svg.svg')) {
            sortImg.src = './img/sort_up_black.svg';
        }
});

sortImg.addEventListener('mouseout', (event) => {
        if (sortImg.src.endsWith('/img/sort_down_black.svg')) {
            sortImg.src = './img/todo_down_svg.svg';
        } else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
            sortImg.src = './img/sort_up_svg.svg';
        }
});

//Обработчик клика мыши на кнопку сортировки
function sorEventLisImg () {    
    if (sortImg.src.endsWith('/img/sort_down_black.svg')) {
        sortImg.src = './img/sort_up_black.svg';
        sortList();
    } else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
        sortImg.src = './img/sort_down_black.svg';
        sortListReverse();
    }
}
sortImg.addEventListener('click', sorEventLisImg);



// Кнопка удалить 
// "Вешаем" обработчик на кнопку удаления
function addEvListenerClickDelete (arg) {
    arg.addEventListener('click', (event) => {
        event.preventDefault();
        arg.parentNode.remove();
        if (sortImg.src.endsWith('/img/delete_off_svg.svg')) {
            sortImg.src = './img/delete_off_svg.svg';
        } else if (sortImg.src.endsWith('/img/sort_up_.svg')) {
            sortImg.src = './img/sort_up_.svg';
        }
    })
//Обработчик нажатия пробела для управления
    arg.addEventListener('keydown', (event) => {

        if ((event.keyCode == 32 && arg == document.activeElement) || (event.keyCode == 13 && arg == document.activeElement)) {
            event.preventDefault();
            arg.parentNode.remove();

        }
    })
}
addEvListenerClickDelete(firstDeleteButton); //"Вешаем" обработчик на первую кнопку удаления



// Кнопка добавить 
let addButton = document.querySelector('.append-button'); // Кнопка "Добавить"
let div = document.querySelector('.tasks'); // Копируемый элемент
let list = document.querySelector('.list');// Таблица с элементами
let input = document.querySelector('.task-text') // Инпут для текста
addEvListenerFocusBlurToDelButton (div); // Обработчик для первой кнопки удаления
//Обработчик клика для кнопки добавления
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        let cloneInput = div.cloneNode(true);
        cloneInput.firstElementChild.checked = '';
        cloneInput.lastElementChild.setAttribute('tabindex', ``);
        addEvListenerFocusBlurToDelButton(cloneInput);
        addEvListenerClickDelete(cloneInput.lastElementChild);
        addEventListenerCheckBox(cloneInput.firstElementChild);
        console.log(cloneInput.firstElementChild);
        list.append(cloneInput);
    });
//Управление с клавиатуры для кнопки "Добавить"
//Обработчик сработает при фокусе на кнопке и нажатии пробела
    addButton.addEventListener('keydown', (event) => {
        if ((event.keyCode == 32 && addButton == document.activeElement) || (event.keyCode == 13 && addButton == document.activeElement)) {
            let cloneInput = div.cloneNode(true);
            cloneInput.firstElementChild.value = '';
            addEvListenerFocusBlurToDelButton(cloneInput);
            addEvListenerClickDelete (cloneInput.lastElementChild);
            list.append(cloneInput);
        }
    });


// Сортировка списка задач по алфавиту в ПРЯМОМ порядке
function sortList() {
    let sortingList = document.querySelectorAll('.tasks');
    let list = document.querySelector('.list');
    let arr = Array.from(sortingList);
    arr.sort((a, b) => {
        let aa = a.firstElementChild.value;
        let bb = b.firstElementChild.value;
        if (aa < bb) {
            return -1;
        } 
        if (aa > bb) {
            return 1;
        }
        if (aa == bb) {
            return 0;
        }
    })
    arr.forEach((el) => {
        list.append(el)
    })
}

// Сортировка списка задач по алфавиту в ОБРАТНОМ порядке
function sortListReverse() {
    let sortingList = document.querySelectorAll('.tasks');
    let list = document.querySelector('.list');
    let arr = Array.from(sortingList);
    arr.sort((a, b) => {
        let aa = a.firstElementChild.value;
        let bb = b.firstElementChild.value;
        if (aa < bb) {
            return 1;
        } 
        if (aa > bb) {
            return -1;
        }
        if (aa == bb) {
            return 0;
        }
    })
    arr.forEach((el) => {
        list.append(el)
    })

}   

//Управление с клавиатуры для кнопки сортировки и кнопки удаления
//Анимация при выборе клавишей TAB
function addEvListenerFocusBlurToDelButton (argument) {
        argument.lastElementChild.addEventListener('focus', (event) => {
            event.preventDefault();
                argument.lastElementChild.style.background = 'url("img/delete_on_svg.svg")';
                argument.lastElementChild.style.backgroundSize = '97%';
              });
        argument.lastElementChild.addEventListener('blur', (event) => {
            event.preventDefault();
            argument.lastElementChild.style.background = 'none';
            argument.lastElementChild.src = './img/delete_off_svg.svg';
            });

}

sortImg.addEventListener('focus', (event) => {
    event.preventDefault(); 
    if (sortImg.src.endsWith('/img/todo_down_svg.svg')) {
        sortImg.src = './img/sort_down_black.svg';
    } else if (sortImg.src.endsWith('/img/sort_up_svg.svg')) {
        sortImg.src = './img/sort_up_black.svg';
    }
  });

sortImg.addEventListener('blur', (event) => {
    event.preventDefault();  
    if (sortImg.src.endsWith('/img/sort_down_black.svg')) {
        sortImg.src = './img/todo_down_svg.svg';
    } else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
        sortImg.src = './img/sort_up_svg.svg';
    }
  });



//"Ловим" все события клавиатуры

function keyPress(e) {
    let keyNum;
    if (window.event) {
        keyNum = window.event.keyCode;
    }
    else if (e) {
        keyNum = e.which;
    }
}
document.onkeydown = keyPress;

document.onkeydown = function(event){
    if ((event.keyCode == 32 && sortImg == document.activeElement) || (event.keyCode == 13 && sortImg == document.activeElement)) {
        event.preventDefault();
        sorEventLisImg ()
    }

    delButton.forEach((el) => {

    })
};

//Drag n Drop
const tasksListElement = document.querySelector(`.list`);
const taskElements = tasksListElement.querySelectorAll(`.tasks`);

// Перебираем все элементы списка и присваиваем нужное значение
for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
  })
  
  tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
  });

  tasksListElement.addEventListener(`dragover`, (evt) => {
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
  
    // Находим перемещаемый элемент
    const activeElement = tasksListElement.querySelector(`.selected`);
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    // Проверяем, что событие сработало:
    // 1. не на том элементе, который мы перемещаем,
    // 2. именно на элементе списка
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`tasks`);
  
    // Если нет, прерываем выполнение функции
    if (!isMoveable) {
      return;
    }
  
    // Находим элемент, перед которым будем вставлять
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  
    // Вставляем activeElement перед nextElement
    tasksListElement.insertBefore(activeElement, nextElement);
  });

  const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
  
    return nextElement;
  };

  tasksListElement.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();
  
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`tasks`);
  
    if (!isMoveable) {
      return;
    }
  
    // evt.clientY — вертикальная координата курсора в момент,
    // когда сработало событие
    const nextElement = getNextElement(evt.clientY, currentElement);
  
    // Проверяем, нужно ли менять элементы местами
    if (
      nextElement && 
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
    ) {
      // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
      return;
    }
  
    tasksListElement.insertBefore(activeElement, nextElement);
  });



//   Источник - https://habr.com/ru/company/htmlacademy/blog/541972/


//Дополнение от преподавателя

let doneList = document.querySelector('.donelist');
let firstCheckBox = document.querySelector('.tasks');

function addEventListenerCheckBox (argument) {
    argument.addEventListener('click', (event) => {
        console.log(argument)
        if(!argument.checked) {
            tasksListElement.append(argument.parentElement);
        } else {
            doneList.append(argument.parentElement);
        }
    })
}
addEventListenerCheckBox(firstCheckBox);




