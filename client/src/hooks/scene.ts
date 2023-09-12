import { ref, onMounted } from "vue"
import {
  Engine,
  Scene,
  Vector3,
  FreeCamera,
  Mesh,
  MeshBuilder,
  HemisphericLight,
} from "@babylonjs/core"
import { createMenu } from '@/core/object'

export const useGameScene = () => {
  const cvsRef = ref<HTMLCanvasElement>()
  let engine: Engine
  let scene: Scene
  const createScene = () => {
    engine = new Engine(cvsRef.value!, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    })
    scene = new Scene(engine)
    var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene)
    camera.setTarget(Vector3.Zero())

    camera.attachControl(cvsRef.value, false)

    var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene)
    scene.addLight(light)
    var sphere = MeshBuilder.CreateSphere(
      "sphere1",
      { segments: 16, diameter: 2, sideOrientation: Mesh.FRONTSIDE },
      scene
    )
    // Move the sphere upward 1/2 of its height
    sphere.position.y = 1
    // Create a built-in "ground" shape;
    var ground = MeshBuilder.CreateGround(
      "ground1",
      { width: 6, height: 6, subdivisions: 2, updatable: false },
      scene
    )
    scene.addMesh(ground)
    // Return the created scene
    return scene
  }
  onMounted(() => {
    const { btn1 } = createMenu()
    const scene = createScene()
    engine.runRenderLoop(function () {
      scene.render()
    })
    window.addEventListener("resize", function () {
      engine.resize()
    })
  })
  return {
    cvsRef,
    // engine,
  }
}
