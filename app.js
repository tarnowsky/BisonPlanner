

document.getElementsByClassName("new-task-btn-wrapper")[0].addEventListener("click", function () {
    const taskCard = document.createElement("div");
    taskCard.className = 'task-card';
    const taskCardTitle = document.createElement("div");
    taskCardTitle.className = 'task-card-title';
    taskCardTitle.textContent = "Kliknij, aby edytować...";
    const taskCardBody = document.createElement("div");
    taskCardBody.className = 'task-card-body';

    taskCard.appendChild(taskCardTitle);
    taskCard.appendChild(taskCardBody);
    
    taskCardTitle.addEventListener("click", function () {
        editBlock(taskCardTitle);
    });

    document.getElementsByClassName("tasks-wrapper")[0].appendChild(taskCard);
});

function editBlock(block) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = block.textContent === "Kliknij, aby edytować..." ? "" : block.textContent;
    block.textContent = "";
    block.appendChild(input);
    input.focus();

    input.addEventListener("blur", function () {
        block.textContent = input.value || "Kliknij, aby edytować...";
        block.addEventListener("click", function () {
            editBlock(block);
        });
    });

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            input.blur();
        }
    });
}