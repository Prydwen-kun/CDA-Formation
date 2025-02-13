import * as THREE from "../../three.module";

class Lighting {
  constructor() {
    // LIGHT DIRECTIONAL
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(0, 50, 60);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.width = 2048;
    this.directionalLight.shadow.mapSize.height = 2048;
    this.directionalLight.shadow.camera.near = 0.5;
    this.directionalLight.shadow.camera.far = 500;
    this.directionalLight.shadow.camera.top = 60;
    this.directionalLight.shadow.camera.bottom = -60;
    this.directionalLight.shadow.camera.left = -60;
    this.directionalLight.shadow.camera.right = 60;
    //AMBIENT LIGHT
    this.ambientLight = new THREE.AmbientLight(0xcccccc); // soft white light
  }

  addToScene(scene) {
    scene.add(this.ambientLight);
    scene.add(this.directionalLight);
  }
}

export { Lighting };
