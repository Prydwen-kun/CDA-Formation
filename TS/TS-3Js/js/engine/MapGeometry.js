import * as THREE from "../../three.js-master/build/three.module";
import { GLTFLoader } from "../../three.js-master/examples/jsm/loaders/GLTFLoader";

class MapGeometry {
  constructor(
    x,
    y,
    z,
    material = new THREE.MeshLambertMaterial({ color: 0x55aa00 })
  ) {
    this.geometry = new THREE.BoxGeometry(x, y, z);
    this.material = material;
    this.object3D = new THREE.Mesh(this.geometry, this.material);
    this.object3D.castShadow = true;
    this.object3D.receiveShadow = true;
    this.object3D.position.y = -1;
    this.object3D.position.x = 0;

    //mesh GLTF loader
    this.GLTFLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
  }
  loadMesh(modelURL) {
    const gltfModel = new Promise((resolve, reject) => {
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

    this.object3D = gltfModel
      .then((gltf) => {
        return gltf.model.scene;
      })
      .catch((error) => {
        console.log("Error :", error);
      });
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
