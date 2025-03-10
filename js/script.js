const tasksWrapper = document.querySelector(".tasks-wrapper");
const newTaskBtn = document.querySelector('.new-task-btn-wrapper');
const body = document.body;
const tasksDone = document.querySelector('.tasks-done-num');
const toDo = document.querySelector('.tasks-todo-num');


let windowWidth = window.innerWidth;
console.log(windowWidth);

const emptyCardsNum = ((windowWidth*0.8)/280)*2;

for (let i = 0; i < emptyCardsNum; i++) {
    const emptyCard = document.createElement('div');
    emptyCard.className = 'task-card-empty';

    tasksWrapper.appendChild(emptyCard);
}

let tasksDoneNum = 1;

const editCardTitle = (_taskCardTitle) => {
    const input = document.createElement('input');

    input.addEventListener('focus', () => {
        input.style.backgroundColor = input.value.length == input.maxLength ? 'rgba(245, 245, 220, 1)' : 'var(--font-color)';
    });

    input.type = 'text';
    input.maxLength = 16;
    input.value = _taskCardTitle.textContent === 'Click to edit...' ? '' : _taskCardTitle.textContent;
    _taskCardTitle.textContent = '';
    _taskCardTitle.appendChild(input);
    input.focus();

    

    input.addEventListener('input', () => {
        input.style.backgroundColor = input.value.length == input.maxLength ? 'rgba(245, 245, 220, 1)' : 'var(--font-color)';
    });

    input.addEventListener('blur', () => {
        _taskCardTitle.textContent = input.value || 'Click to edit...';
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            input.blur();
        }
    })
}


let toDoNum = 0;
const createCard = () => {
    toDoNum++
    toDo.innerText = toDoNum;

    const emptyCards = document.querySelectorAll('.task-card-empty');
    if (emptyCards.length !== 1)
        emptyCards[0].remove();
    

    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';


    const taskCardTitle = document.createElement('div');
    taskCardTitle.className = 'task-card-title';
    const taskCardTitleText = document.createElement('p');
    taskCardTitleText.innerText = 'Click to edit...';
    taskCardTitle.appendChild(taskCardTitleText);
    taskCardTitle.addEventListener('click', () => {
        editCardTitle(taskCardTitleText);
    });

    const taskCardBody = document.createElement('div');
    taskCardBody.className = 'task-card-body';
    const taskCardBodyText = document.createElement('p');
    taskCardBody.appendChild(taskCardBodyText);

    const taskCardDoneWrapper = document.createElement('div');
    taskCardDoneWrapper.className = 'task-card-done-wrapper';
    const taskCardButtonDone = document.createElement('button');
    taskCardButtonDone.innerText = 'Done';
    taskCardButtonDone.className = 'task-card-done-btn';

    taskCardButtonDone.addEventListener('click', () => {
        taskCard.remove();

        if (toDoNum-1 <= emptyCardsNum) {
            const emptyCard = document.createElement('div');
            emptyCard.className = 'task-card-empty';
            tasksWrapper.appendChild(emptyCard);
        }
        
        tasksDone.innerText = tasksDoneNum++;
        toDoNum--;
        toDo.innerText = toDoNum;

    });

    taskCardDoneWrapper.appendChild(taskCardButtonDone);

    taskCard.appendChild(taskCardTitle);
    taskCard.appendChild(taskCardBody);
    taskCard.appendChild(taskCardDoneWrapper);

    tasksWrapper.insertBefore(taskCard, tasksWrapper.querySelector('.task-card-empty'));

    

    
}

newTaskBtn.addEventListener('click', () => {
    createCard();
})

const creationYear = document.querySelector('.creation-year');
let year = new Date().getFullYear();
creationYear.innerHTML = year;

