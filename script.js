function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // 새로운 할 일 목록 항목을 생성
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // 삭제 버튼 추가
    const deleteButton = document.createElement('span');
    deleteButton.textContent = "❌";
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        taskItem.remove();
    };

    taskItem.appendChild(deleteButton);

    // 목록에 항목 추가
    document.getElementById('taskList').appendChild(taskItem);

    // 입력 필드 초기화
    taskInput.value = "";
}