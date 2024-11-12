// modules/taskManager.js

// 할 일 추가 함수
export function addTask(taskText, taskListElement) {
    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    // 새로운 할 일 목록 항목 생성
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
    taskListElement.appendChild(taskItem);
}
