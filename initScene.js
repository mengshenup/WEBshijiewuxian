import * as THREE from 'three';
import { RGBELoader } from 'RGBELoader';
import { logToPanel } from './logPanel.js';

function initScene() {
    const scene = new THREE.Scene();
    logToPanel('initScene.js - 2. 场景已创建');

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 2);

    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('./assets/royal_esplanade_1k.hdr', function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
        logToPanel('initScene.js - 11. HDR 天空盒加载完成');
    });

    return { scene, camera };
}

export { initScene };
