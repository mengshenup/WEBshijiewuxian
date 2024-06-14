import * as THREE from 'three';
import { FBXLoader } from 'FBXLoader';
import { RGBELoader } from 'RGBELoader';

function logToPanel(message) {
    const logPanel = document.getElementById('log-panel');
    const logMessage = document.createElement('div');
    logMessage.textContent = message;
    logPanel.appendChild(logMessage);
    logPanel.scrollTop = logPanel.scrollHeight;
}

logToPanel("game.js - 1. game.js 脚本开始执行");

export function initGame() {
    logToPanel("game.js - 2. initGame 函数开始执行");

    // 初始化场景
    const scene = new THREE.Scene();
    logToPanel("game.js - 3. 场景已创建");

    // 初始化相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 5);
    logToPanel("game.js - 4. 相机已创建");

    // 初始化渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('game-container').appendChild(renderer.domElement);
    logToPanel("game.js - 5. 渲染器已创建");

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    logToPanel("game.js - 6. 环境光已添加");

    // 添加点光源
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    logToPanel("game.js - 7. 点光源已添加");

    // 加载HDR天空盒
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('./assets/skybox.hdr', function(texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
        logToPanel("game.js - 11. HDR 天空盒加载完成");
    });

    // 加载FBX模型
    const fbxLoader = new FBXLoader();
    
    const models = [
        'terrain.fbx',
        'cat.fbx',
        'tree.fbx',
        'house.fbx',
        'car.fbx',
        'rock.fbx',
        'bench.fbx',
        'lamp.fbx',
        'flower.fbx'
    ];

    models.forEach((model, index) => {
        fbxLoader.load(`./assets/${model}`, function(object) {
            scene.add(object);
            logToPanel(`game.js - ${12 + index}. ${model} 加载完成`);
        }, undefined, function(error) {
            logToPanel(`game.js - 加载 ${model} 出错: ${error.message}`);
            console.error(`game.js - 加载 ${model} 出错:`, error);
        });
    });

    // 渲染循环
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
    logToPanel("game.js - 17. 动画启动");
}
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./assets/your_texture.png', function(texture) {
    // 纹理加载成功
    logToPanel("game.js - 纹理加载成功");
}, undefined, function(error) {
    // 纹理加载失败
    logToPanel("game.js - 纹理加载失败: " + error.message);
    console.error("game.js - 纹理加载失败:", error);
});
