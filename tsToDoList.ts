
const sortImg = document.querySelector('.sortbutton') as HTMLImageElement;
const delButton = document.querySelector('.task-buton') as HTMLImageElement;
const firstDeleteButton = document.querySelector('.task-button') as HTMLImageElement;
sortImg.addEventListener('mouseover', function (e: Event): void {
    e.preventDefault();
    if (sortImg.src.endsWith('/img/todo_down_svg.svg')) {
        sortImg.src = './img/sort_down_black.svg';
    }
    else if (sortImg.src.endsWith('/img/sort_up_svg.svg')) {
        sortImg.src = './img/sort_up_black.svg';
    }
});
sortImg.addEventListener('mouseout', function (e: Event): void {
    e.preventDefault();
    if (sortImg.src.endsWith('/img/sort_down_black.svg')) {
        sortImg.src = './img/todo_down_svg.svg';
    }
    else if (sortImg.src.endsWith('/img/sort_up_black.svg')) {
        sortImg.src = './img/sort_up_svg.svg';
    }
});
//Обработчик клика мыши на кнопку сортировки
function sorEventLisImg(): void {
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
function addEvListenerClickDelete(arg: HTMLImageElement): void {
    arg.addEventListener('click', function (e: Event) {
        e.preventDefault();
        arg.parentElement?.remove();
        if (sortImg.src.endsWith('/img/delete_off_svg.svg')) {
            sortImg.src = './img/delete_off_svg.svg';
        }
        else if (sortImg.src.endsWith('/img/sort_up_.svg')) {
            sortImg.src = './img/sort_up_.svg';
        }
    });
    //Обработчик нажатия пробела для управления
    arg.addEventListener('keydown', function (e: KeyboardEvent): void {
        if ((e.keyCode === 32 && arg === document.activeElement) || (e.keyCode === 13 && arg === document.activeElement)) {
            e.preventDefault();
            arg.parentElement?.remove();
        }
    });
}


//Кнопка добавить

const addButton = document.querySelector('.append-button') as HTMLImageElement;
const div = document.querySelector('.tasks') as HTMLDivElement;
const list = document.querySelector('.list') as HTMLTableSectionElement;
const input = document.querySelector('.task-text') as HTMLInputElement;

addEvListenerFocusBlurToDelButton (div);

function addEvListenerFocusBlurToDelButton (argument: any): void {
    argument.lastElementChild?.addEventListener('focus', (e: Event) => {
            argument.lastElementChild.style.background = 'url("img/delete_on_svg.svg")';
            argument.lastElementChild.style.backgroundSize = '97%';
          });
    argument.lastElementChild.addEventListener('blur', (e: Event) => {
        argument.lastElementChild.style.background = 'none';
        argument.lastElementChild.src = './img/delete_off_svg.svg';
        });

}


addButton.addEventListener('click', (e: Event) => {
    let cloneInput = div.cloneNode(true) as HTMLDivElement;
    (cloneInput.firstElementChild as HTMLInputElement).value = '';
    addEvListenerFocusBlurToDelButton(cloneInput);
    addEvListenerClickDelete (cloneInput.lastElementChild as HTMLImageElement);
    list.append(cloneInput);
});
//Управление с клавиатуры для кнопки "Добавить"
//Обработчик сработает при фокусе на кнопке и нажатии пробела
addButton.addEventListener('keydown', (e: KeyboardEvent) => {
    if ((e.keyCode == 32 && addButton == document.activeElement) || (e.keyCode == 13 && addButton == document.activeElement)) {
        let cloneInput = div.cloneNode(true) as HTMLDivElement;
        (cloneInput.firstElementChild as HTMLInputElement).value = '';
        addEvListenerFocusBlurToDelButton(cloneInput);
        addEvListenerClickDelete (cloneInput.lastElementChild as HTMLImageElement);
        list.append(cloneInput);
    }
});



function sortList(): void {
    let sortingList = document.querySelectorAll('.tasks');
    let list = document.querySelector('.list') as HTMLTableElement;
    let arr: Element[] = Array.from(sortingList);
    arr.sort((a, b) => {
        let aa = (a.firstElementChild as HTMLInputElement).value;
        let bb = (b.firstElementChild as HTMLInputElement).value;
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
    arr.forEach((el: Element) => {
        list.append(el)
    })

}

// Сортировка списка задач по алфавиту в ОБРАТНОМ порядке
function sortListReverse(): void {
    let sortingList = document.querySelectorAll('.tasks');
    let list = document.querySelector('.list') as HTMLDivElement;
    let arr: Element[] = Array.from(sortingList);
    arr.sort((a, b) => {
        let aa = (a.firstElementChild as HTMLInputElement).value;
        let bb = (b.firstElementChild as HTMLInputElement).value;
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
    arr.forEach((el: Element) => {
        list.append(el)
    })

}   