export function initControls() {
    const logPanel = document.getElementById('log-panel');
    const logMessage = document.createElement('div');
    logMessage.textContent = "14.1 初始化 controls...";
    logPanel.appendChild(logMessage);
    console.log("14.1 初始化 controls...");

    // Your controls initialization code here

    const logMessageInitialized = document.createElement('div');
    logMessageInitialized.textContent = "14.2 controls 初始化完成";
    logPanel.appendChild(logMessageInitialized);
    console.log("14.2 controls 初始化完成");
}
