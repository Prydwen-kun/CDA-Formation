// import * as THREE from "../three.cjs";
// const THREE = require('../three.cjs') // NODE
import * as THREE from "../three.module"; // non mais WTF ????

const app = document.getElementById("app");

//CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1c1c1c);
scene.fog = new THREE.Fog(0xbbbbbb, 10, 500);
scene.updateWorldMatrix(true, true);
//RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
//APPEND RENDERER
app.appendChild(renderer.domElement);

//AMBIENT LIGHT
const light = new THREE.AmbientLight(0xcccccc); // soft white light
scene.add(light);

//FLOOR
const geometryFloor = new THREE.BoxGeometry(100, 1, 100);
const materialFloor = new THREE.MeshLambertMaterial({ color: 0x55aa00 });
const floor = new THREE.Mesh(geometryFloor, materialFloor);
floor.castShadow = true;
floor.receiveShadow = true;
scene.add(floor);
floor.position.y = -1;
floor.position.x = 0;

// LIGHT DIRECTIONAL
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 50, 60);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 500;
directionalLight.shadow.camera.top = 60;
directionalLight.shadow.camera.bottom = -60;
directionalLight.shadow.camera.left = -60;
directionalLight.shadow.camera.right = 60;
scene.add(directionalLight);

// ROTATING CUBE
const geometry = new THREE.BoxGeometry(1, 3, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xcccc00 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = false;
scene.add(cube);
cube.position.y = 1.5;
cube.position.x = 0;

//camera position
camera.position.z = 5;
camera.position.x = 10;
camera.position.y = 10;
camera.lookAt(0, 0, 0);

//MAIN LOOP
function animate() {
  requestAnimationFrame(animate);
  //ANIM

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  //RENDER
  renderer.render(scene, camera);
}
animate();

//IN CASE OF WINDOW RESIZE//
onresize = (event) => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
};
