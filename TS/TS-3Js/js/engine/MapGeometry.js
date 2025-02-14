import * as THREE from "../../three.js-master/build/three.module";
import { GLTFLoader } from "../../three.js-master/examples/jsm/loaders/GLTFLoader";

class MapGeometry {
  constructor(
    x,
    y,
    z,
    textureURL = "/Placeholder/oldWood.avif",
    material = new THREE.MeshLambertMaterial({ color: 0x55aa00 })
  ) {
    //mesh GLTF loader
    this.GLTFLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();

    this.geometry = new THREE.BoxGeometry(x, y, z);
    this.material = material;
    this.texture = this.textureLoader.load(textureURL);
    if (typeof this.texture !== "undefined") {
      this.material = new THREE.MeshLambertMaterial({ map: this.texture });
    }
    //object meshing
    this.object3D = new THREE.Mesh(this.geometry, this.material);
    //3D object properties
    this.object3D.castShadow = true;
    this.object3D.receiveShadow = true;
    this.object3D.position.y = -1;
    this.object3D.position.x = 0;
  }
  loadMesh(modelURL) {
    return new Promise((resolve, reject) => {
      this.GLTFLoader.load(
        modelURL,
        (gltf) => {
          resolve(gltf);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          console.log("Error loading meshes !");
          reject(error);
        }
      );
    });
  }

  setObject3D(gltfScene) {
    this.object3D = gltfScene;
  }

  setPosition(x, y, z) {
    this.object3D.position.x = x;
    this.object3D.position.y = y;
    this.object3D.position.z = z;
  }

  setCastShadow(flag) {
    this.object3D.castShadow = flag;
  }
  setReceiveShadow(flag) {
    this.object3D.receiveShadow = flag;
  }
}

export { MapGeometry };
