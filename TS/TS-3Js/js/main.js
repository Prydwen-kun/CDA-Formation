// import * as THREE from "../three.cjs";
// const THREE = require('../three.cjs') // NODE
import * as THREE from "../three.js-master/build/three.module"; // non mais WTF ????
import * as Lighting from "../js/engine/Lighting";
import * as Scene from "../js/engine/Scene";
import * as Map from "../js/engine/Map";

const app = document.getElementById("app");

//CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//SCENE//RENDERER
//APPEND RENDERER
const MainScene = new Scene.Scene(window);
MainScene.appendRenderer(app);

//MAP//FLOOR
const Map0 = new Map.Map();
MainScene.scene.add(Map0.floor.object3D);

//DIRECTIONAL LIGHT + AMBIENT
const MainLight = new Lighting.Lighting();
MainLight.addToScene(MainScene.scene);

// ROTATING CUBE
const geometry = new THREE.BoxGeometry(1, 3, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xcccc00 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = false;
MainScene.scene.add(cube);
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
  MainScene.renderer.render(MainScene.scene, camera);
}
animate();

//IN CASE OF WINDOW RESIZE//
onresize = (event) => {
  MainScene.renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
};
