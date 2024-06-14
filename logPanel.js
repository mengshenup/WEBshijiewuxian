function logToPanel(message) {
    const logPanel = document.getElementById('log-panel');
    const logMessage = document.createElement('div');
    logMessage.textContent = message;
    logPanel.appendChild(logMessage);
    logPanel.scrollTop = logPanel.scrollHeight;
}

export { logToPanel };
