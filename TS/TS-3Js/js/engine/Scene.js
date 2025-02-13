import * as THREE from "../../three.js-master/build/three.module";

class Scene {
  constructor(window) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1c1c1c);
    this.scene.fog = new THREE.Fog(0xbbbbbb, 10, 500);
    this.scene.updateWorldMatrix(true, true);
    //RENDERER
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  appendRenderer(appAnchor) {
    //APPEND RENDERER
    appAnchor.appendChild(this.renderer.domElement);
  }

}

export { Scene };
