import * as BABYLON from 'babylonjs';

export default class Renderer {
    private canvas: HTMLCanvasElement;
    private engine: BABYLON.Engine;
    private scene: BABYLON.Scene;

    createScene(_canvas: HTMLCanvasElement, _engine: BABYLON.Engine) {
        this.canvas = _canvas;

        this.engine = _engine;

        // This creates a basic Babylon Scene object (non-mesh)
        const _scene = new BABYLON.Scene(this.engine);
        this.scene = _scene;

        // This creates and positions a free camera (non-mesh)
        const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene);

        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // This attaches the camera to the canvas
        camera.attachControl(this.canvas, true);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this.scene);
        
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 1;


        // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
        // const ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    }

    initialize(_canvas: HTMLCanvasElement, _engine: BABYLON.Engine) {
        this.createScene(_canvas, _engine);

        _engine.runRenderLoop(() => {
            this.scene.render();
        });

        window.addEventListener('resize', function () {
            _engine.resize();
        });
    }
}