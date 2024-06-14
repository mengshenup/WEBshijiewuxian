import * as THREE from 'three';
import { initScene } from './initScene.js';
import { loadModels } from './loadModels.js';
import { logToPanel } from './logPanel.js';

async function initGame() {
    logToPanel('game.js - 1. initGame 函数开始执行');
    const { scene, camera } = initScene();
    loadModels(scene);
    const renderer = new THREE.WebGLRenderer();
    document.body.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
    logToPanel('game.js - 17. 动画启动');
}

export { initGame };
