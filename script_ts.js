var sortImg = document.querySelector('.sortbutton');
var delButton = document.querySelector('.task-buton');
var firstDeleteButton = document.querySelector('.task-button');
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
        // sortList();
    }
    else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
        sortImg.src = './img/sort_down_black.svg';
        // sortListReverse();
    }
}
sortImg.addEventListener('click', sorEventLisImg);
function addEvListenerClickDelete(arg) {
    arg.addEventListener('click', function (e) {
        e.preventDefault();
        arg.parentElement.remove();
        if (sortImg.src.endsWith('/img/delete_off_svg.svg')) {
            sortImg.src = './img/delete_off_svg.svg';
        }
        else if (sortImg.src.endsWith('/img/sort_up_.svg')) {
            sortImg.src = './img/sort_up_.svg';
        }
    });
    //Обработчик нажатия пробела для управления
    arg.addEventListener('keydown', function (e) {
        if ((e.keyCode == 32 && arg == document.activeElement) || (e.keyCode == 13 && arg == document.activeElement)) {
            e.preventDefault();
            arg.parentElement.remove();
        }
    });
}
