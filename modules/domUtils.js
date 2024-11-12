// modules/domUtils.js

// 입력 필드, 버튼, 할 일 목록 요소를 가져오는 함수
export function getDomElements() {
    return {
        taskInput: document.getElementById('taskInput'),
        addButton: document.getElementById('addButton'),
        taskList: document.getElementById('taskList')
    };
}
