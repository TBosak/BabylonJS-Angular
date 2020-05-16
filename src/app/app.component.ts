import { Component, OnInit } from '@angular/core';
import * as BABYLON from 'babylonjs';
import Renderer from './renderer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export default class AppComponent implements OnInit {
private canvas: HTMLCanvasElement;
private engine: BABYLON.Engine;
private scene: BABYLON.Scene;

constructor(){
// window.addEventListener('resize', function () {
//   this.engine.resize();
// });
}

ngOnInit(): void {
this.canvas = (document.getElementById("scenewindow") as HTMLCanvasElement);
this.engine = new BABYLON.Engine(this.canvas, true);
this.scene = new BABYLON.Scene(this.engine);
this.createScene(this.canvas, this.engine);
this.engine.runRenderLoop(() => {
    this.scene.render();
});


}

createScene(_canvas: HTMLCanvasElement, _engine: BABYLON.Engine, _function?: Function) {
  this.canvas = _canvas;
  this.engine = _engine;

  // This creates a basic Babylon Scene object (non-mesh)

  // This creates and positions a free camera (non-mesh)
  var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene);

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(this.canvas, true);

  // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
var sphere = BABYLON.Mesh.CreateSphere("sphere1", 100, 2, this.scene);

//Move the sphere upward 1/2 its height
sphere.position.y = 1;

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this.scene);
  
  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 1;


  // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
  // const ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
}
}