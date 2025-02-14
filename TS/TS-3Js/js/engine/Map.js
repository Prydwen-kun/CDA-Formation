import * as THREE from "../../three.js-master/build/three.module";
import * as MapGeometry from "../engine/MapGeometry";

class Map {
  constructor() {
    this.floor = new MapGeometry.MapGeometry(100, 1, 100);
    this.floor.setPosition(0, -1, 0);
    this.gltfModel = this.floor
      .loadMesh("/assets/sup_mario_bomb_field/scene.gltf")
      .then(
        (gltf) => {
          this.floor.setObject3D(gltf.model.scene);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

export { Map };
