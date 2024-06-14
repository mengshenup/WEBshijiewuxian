export function initPanel() {
    const logPanel = document.getElementById('log-panel');
    const logMessage = document.createElement('div');
    logMessage.textContent = "16.1 初始化 panel...";
    logPanel.appendChild(logMessage);
    console.log("16.1 初始化 panel...");

    // Your panel initialization code here

    const logMessageInitialized = document.createElement('div');
    logMessageInitialized.textContent = "16.2 panel 初始化完成";
    logPanel.appendChild(logMessageInitialized);
    console.log("16.2 panel 初始化完成");
}
