import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        loader.load(
          "/models/character.glb",
          async (gltf) => {
            const character = gltf.scene;

            await renderer.compileAsync(character, camera, scene);

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });

            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();

            // Safely reposition feet — supporting both original and RPM bone names
            const footRNames = ["footR", "RightFoot", "mixamorigRightFoot"];
            const footLNames = ["footL", "LeftFoot", "mixamorigLeftFoot"];
            for (const name of footRNames) {
              const bone = character.getObjectByName(name);
              if (bone) { bone.position.y = 3.36; break; }
            }
            for (const name of footLNames) {
              const bone = character.getObjectByName(name);
              if (bone) { bone.position.y = 3.36; break; }
            }

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
