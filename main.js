import { initGame } from './initGame.js';
import { logToPanel } from './logPanel.js';

logToPanel("4. main.js - main.js 脚本开始执行");

window.addEventListener('load', () => {
    logToPanel("5. main.js - Window 加载事件触发");
    logToPanel("6. main.js - 调用 initGame...");
    initGame();
    logToPanel("7. main.js - initGame 调用成功");
});
