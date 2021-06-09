"use strict";
const sortImg = document.querySelector('.sortbutton');
const delButton = document.querySelector('.task-buton');
const firstDeleteButton = document.querySelector('.task-button');
sortImg.addEventListener('mouseover', function (e) {
    e.preventDefault();
    if (sortImg.src.endsWith('/img/todo_down_svg.svg')) {
        sortImg.src = './img/sort_down_black.svg';
    }
    else if (sortImg.src.endsWith('/img/sort_up_svg.svg')) {
        sortImg.src = './img/sort_up_black.svg';
    }
});
sortImg.addEventListener('mouseout', function (e) {
    e.preventDefault();
    if (sortImg.src.endsWith('/img/sort_down_black.svg')) {
        sortImg.src = './img/todo_down_svg.svg';
    }
    else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
        sortImg.src = './img/sort_up_svg.svg';
    }
});
//Обработчик клика мыши на кнопку сортировки
function sorEventLisImg() {
    if (sortImg.src.endsWith('/img/sort_down_black.svg')) {
        sortImg.src = './img/sort_up_black.svg';
        sortList();
    }
    else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
        sortImg.src = './img/sort_down_black.svg';
        sortListReverse();
    }
}
sortImg.addEventListener('click', sorEventLisImg);
function addEvListenerClickDelete(arg) {
    arg.addEventListener('click', function (e) {
        var _a;
        e.preventDefault();
        (_a = arg.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        if (sortImg.src.endsWith('/img/delete_off_svg.svg')) {
            sortImg.src = './img/delete_off_svg.svg';
        }
        else if (sortImg.src.endsWith('/img/sort_up_.svg')) {
            sortImg.src = './img/sort_up_.svg';
        }
    });
    //Обработчик нажатия пробела для управления
    arg.addEventListener('keydown', function (e) {
        var _a;
        if ((e.keyCode === 32 && arg === document.activeElement) || (e.keyCode === 13 && arg === document.activeElement)) {
            e.preventDefault();
            (_a = arg.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        }
    });
}
//Кнопка добавить
const addButton = document.querySelector('.append-button');
const div = document.querySelector('.tasks');
const list = document.querySelector('.list');
const input = document.querySelector('.task-text');
addEvListenerFocusBlurToDelButton(div);
function addEvListenerFocusBlurToDelButton(argument) {
    var _a;
    (_a = argument.lastElementChild) === null || _a === void 0 ? void 0 : _a.addEventListener('focus', (e) => {
        argument.lastElementChild.style.background = 'url("img/delete_on_svg.svg")';
        argument.lastElementChild.style.backgroundSize = '97%';
    });
    argument.lastElementChild.addEventListener('blur', (e) => {
        argument.lastElementChild.style.background = 'none';
        argument.lastElementChild.src = './img/delete_off_svg.svg';
    });
}
addButton.addEventListener('click', (e) => {
    let cloneInput = div.cloneNode(true);
    cloneInput.firstElementChild.value = '';
    addEvListenerFocusBlurToDelButton(cloneInput);
    addEvListenerClickDelete(cloneInput.lastElementChild);
    list.append(cloneInput);
});
//Управление с клавиатуры для кнопки "Добавить"
//Обработчик сработает при фокусе на кнопке и нажатии пробела
addButton.addEventListener('keydown', (e) => {
    if ((e.keyCode == 32 && addButton == document.activeElement) || (e.keyCode == 13 && addButton == document.activeElement)) {
        let cloneInput = div.cloneNode(true);
        cloneInput.firstElementChild.value = '';
        addEvListenerFocusBlurToDelButton(cloneInput);
        addEvListenerClickDelete(cloneInput.lastElementChild);
        list.append(cloneInput);
    }
});
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
    });
    arr.forEach((el) => {
        list.append(el);
    });
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
    });
    arr.forEach((el) => {
        list.append(el);
    });
}
