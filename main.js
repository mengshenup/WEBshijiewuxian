import { initGame } from './game.js';

function logToPanel(message) {
    const logPanel = document.getElementById('log-panel');
    const logMessage = document.createElement('div');
    logMessage.textContent = message;
    logPanel.appendChild(logMessage);
    logPanel.scrollTop = logPanel.scrollHeight;
}

logToPanel("4. main.js - main.js 脚本开始执行");

window.addEventListener('load', () => {
    logToPanel("5. main.js - Window 加载事件触发");
    logToPanel("6. main.js - 调用 initGame...");
    initGame();
    logToPanel("7. main.js - initGame 调用成功");
});
