// script.js

// 모듈 가져오기
import { addTask } from './modules/taskManager.js';
import { getDomElements } from './modules/domUtils.js';

document.addEventListener('DOMContentLoaded', () => {
    const { taskInput, addButton, taskList } = getDomElements();

    addButton.addEventListener('click', () => {
        addTask(taskInput.value, taskList);
        taskInput.value = "";  // 입력 필드 초기화
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value, taskList);
            taskInput.value = "";  // 입력 필드 초기화
        }
    });
});
