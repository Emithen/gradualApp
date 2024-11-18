// modules/taskManager.js

// 로컬 스토리지에 할 일 목록 저장
function saveTasks(taskListElement) {
    const tasks = [];
    taskListElement.querySellectorAll('li').forEach((taskItem) => {
        tasks.push(taskItem.textContent.replace("❌", "").trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 로컬 스토리지에서 할 일 목록 불러오기
export function loadTasks(taskListElement){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => addTask(taskText, taskListElement));
}

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
        saveTasks(taskListElement);
    };

    taskItem.appendChild(deleteButton);
    taskListElement.appendChild(taskItem);
}
