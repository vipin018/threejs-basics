// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// // import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
// import GUI from 'lil-gui';





// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const highIntensityLight = new THREE.DirectionalLight(0xffffff, 1);
// highIntensityLight.position.set(10, 10, 10);
// scene.add(highIntensityLight);


// // Add studio lighting
// const ambientLight = new THREE.AmbientLight(0xffffff, 2);
// scene.add(ambientLight);

// const keyLight = new THREE.DirectionalLight(0xffffff, 1);
// keyLight.position.set(1, 1, 1);
// scene.add(keyLight);

// const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
// fillLight.position.set(-1, 0.5, -1);
// scene.add(fillLight);

// // const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
// // backLight.position.set(0, -1, -1);
// // scene.add(backLight);

// // Create light helpers
// // const highIntensityLightHelper = new THREE.DirectionalLightHelper(highIntensityLight, 1);
// // scene.add(highIntensityLightHelper);

// // const keyLightHelper = new THREE.DirectionalLightHelper(keyLight, 1);
// // scene.add(keyLightHelper);

// // const fillLightHelper = new THREE.DirectionalLightHelper(fillLight, 1);
// // scene.add(fillLightHelper);

// // texture adding

// let loader = new THREE.TextureLoader();
// let color = loader.load("./texture/color.jpg");
// let roughness = loader.load("./texture/roughness.jpg");
// let normal = loader.load("./texture/normal.png");
// // let height = loader.load("./texture/height.png");

// // const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
// // const material = new THREE.MeshBasicMaterial({ color: "#0bff01", wireframe: true, shininess:100 });
// const geometry = new THREE.BoxGeometry(3.5, 2, 2);
// const material = new THREE.MeshStandardMaterial({ map: color, roughnessMap: roughness, normalMap: normal });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// const canvas = document.querySelector("canvas");
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.z = 5;

// window.addEventListener("resize", onWindowResize, false);


// // Create GUI
// const gui = new GUI();

// // Light folder
// const lightFolder = gui.addFolder('Lights');

// // Ambient Light
// const ambientLightFolder = lightFolder.addFolder('Ambient Light');
// ambientLightFolder.add(ambientLight, 'intensity', 0, 1).name('Intensity');
// ambientLightFolder.addColor(ambientLight, 'color').name('Color');

// // Key Light
// const keyLightFolder = lightFolder.addFolder('Key Light');
// keyLightFolder.add(keyLight, 'intensity', 0, 2).name('Intensity');
// keyLightFolder.addColor(keyLight, 'color').name('Color');
// keyLightFolder.add(keyLight.position, 'x', -5, 5);
// keyLightFolder.add(keyLight.position, 'y', -5, 5);
// keyLightFolder.add(keyLight.position, 'z', -5, 5);

// // Fill Light
// const fillLightFolder = lightFolder.addFolder('Fill Light');
// fillLightFolder.add(fillLight, 'intensity', 0, 2).name('Intensity');
// fillLightFolder.addColor(fillLight, 'color').name('Color');
// fillLightFolder.add(fillLight.position, 'x', -5, 5);
// fillLightFolder.add(fillLight.position, 'y', -5, 5);
// fillLightFolder.add(fillLight.position, 'z', -5, 5);

// lightFolder.open();

// // Light Helpers
// const ambientLightHelper = new THREE.PointLightHelper(ambientLight, 0.5);
// scene.add(ambientLightHelper);

// const keyLightHelper = new THREE.PointLightHelper(keyLight, 0.5);
// scene.add(keyLightHelper);

// const fillLightHelper = new THREE.PointLightHelper(fillLight, 0.5);
// scene.add(fillLightHelper);

// // Light Helper Controls
// const helperFolder = lightFolder.addFolder('Light Helpers');
// helperFolder.add(ambientLightHelper, 'visible').name('Ambient Light Helper');
// helperFolder.add(keyLightHelper, 'visible').name('Key Light Helper');
// helperFolder.add(fillLightHelper, 'visible').name('Fill Light Helper');


// // Material folder
// const materialFolder = gui.addFolder('Material');
// materialFolder.add(material, 'wireframe');
// materialFolder.add(material, 'roughness', 0, 1);
// materialFolder.add(material, 'metalness', 0, 1);
// materialFolder.addColor(material, 'color');
// materialFolder.open();

// // Mesh folder
// const meshFolder = gui.addFolder('Mesh');
// meshFolder.add(cube.rotation, 'x', 0, Math.PI * 2);
// meshFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
// meshFolder.add(cube.rotation, 'z', 0, Math.PI * 2);
// meshFolder.add(cube.scale, 'x', 0.1, 2).name('Scale X');
// meshFolder.add(cube.scale, 'y', 0.1, 2).name('Scale Y');
// meshFolder.add(cube.scale, 'z', 0.1, 2).name('Scale Z');
// meshFolder.open();


// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }


// // Import GUI if not already imported
// // import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';




// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.autoRotate = false;
// controls.autoRotateSpeed = 5;

// function animate() {
//   window.requestAnimationFrame(animate);
//   renderer.render(scene, camera);
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;
//   // cube.rotation.z += 0.01;

//   controls.update();
// }
// animate();


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1,0);

// Create renderer
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const loader = new GLTFLoader();
loader.load('./bus.glb', function (gltf) {
  gltf.scene.position.y=-1

  scene.add(gltf.scene);
})

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Load HDRI environment map
new RGBELoader()
  //.setPath('path/to/hdri/') Update this path to your HDRI file location
  .load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/goegap_road_2k.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    // scene.background = texture;
    scene.environment = texture;

    // Add a simple cube to the scene
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
