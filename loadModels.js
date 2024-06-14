import * as THREE from 'three';
import { FBXLoader } from 'FBXLoader';
import { logToPanel } from './logPanel.js';

const defaultTexturePath = './assets/default_texture.png';

function loadModels(scene) {
    const fbxLoader = new FBXLoader();
    const models = [
        'rock.fbx', 'bench.fbx', 'flower.fbx', 'cat.fbx',
        'lamp.fbx', 'terrain.fbx', 'tree.fbx', 'house.fbx', 'car.fbx'
    ];

    for (let i = 0; i < models.length; i++) {
        loadModel(fbxLoader, scene, `./assets/${models[i]}`);
    }
}

function loadModel(fbxLoader, scene, modelPath) {
    fbxLoader.load(modelPath, function (object) {
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

export { loadModels };
