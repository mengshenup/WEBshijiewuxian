// 导入Three.js库和FBXLoader
import * as THREE from './libs/three.js-r165/build/three.module.js';
import { FBXLoader } from './libs/three.js-r165/examples/jsm/loaders/FBXLoader.js';
import { RGBELoader } from './libs/three.js-r165/examples/jsm/loaders/RGBELoader.js';
import { logToPanel } from './logPanel.js';

// 定义默认纹理路径
const defaultTexturePath = './assets/default_texture.png';

// 初始化游戏
async function initGame() {
    // 创建场景
    const scene = new THREE.Scene();
    logToPanel('game.js - 2. 场景已创建');

    // 加载HDR天空盒
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('./assets/royal_esplanade_1k.hdr', function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
        logToPanel('game.js - 11. HDR 天空盒加载完成');
    });

    // 加载模型
    const fbxLoader = new FBXLoader();
    const models = [
        'rock.fbx', 'bench.fbx', 'flower.fbx', 'cat.fbx',
        'lamp.fbx', 'terrain.fbx', 'tree.fbx', 'house.fbx', 'car.fbx'
    ];

    for (let i = 0; i < models.length; i++) {
        loadModel(fbxLoader, scene, `./assets/${models[i]}`);
    }

    // 渲染循环
    const renderer = new THREE.WebGLRenderer();
    document.body.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    // 启动动画循环
    animate();
    logToPanel('game.js - 17. 动画启动');
}

// 加载模型函数
function loadModel(fbxLoader, scene, modelPath) {
    fbxLoader.load(modelPath, function (object) {
        // 遍历模型的材质并设置默认纹理
        object.traverse(function (child) {
            if (child.isMesh) {
                if (!child.material.map) {
                    child.material.map = new THREE.TextureLoader().load(defaultTexturePath);
                    logToPanel(`loadModels.js - 模型 ${modelPath} 的材质 map 没有纹理，已设置为默认纹理`);
                }
                if (!child.material.normalMap) {
                    child.material.normalMap = new THREE.TextureLoader().load(defaultTexturePath);
                    logToPanel(`loadModels.js - 模型 ${modelPath} 的材质 normalMap 没有纹理，已设置为默认纹理`);
                }
            }
        });
        scene.add(object);
        logToPanel(`loadModels.js - ${modelPath} 加载完成`);
    }, undefined, function (error) {
        logToPanel(`loadModels.js - 加载 ${modelPath} 出错: ${error.message}`);
        console.error(`加载 ${modelPath} 出错:`, error);
    });
}

// 导出initGame函数
export { initGame };
