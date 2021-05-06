var geometry = new THREE.BoxGeometry(3, 3, 3, 3, 3, 3);
var material = new THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true});
var cube = new THREE.Mesh(geometry, material);
const translation = new THREE.Matrix4();
translation.set(
    1, 0, 0, 0.02,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
);
const scala = new THREE.Matrix4();
scala.set(
    1.002, 0, 0, 0,
    0, 1.002, 0, 0,
    0, 0, 1.002, 0,
    0, 0, 0, 1
);
const rotaX = new THREE.Matrix4();
rotaX.set(
    1, 0, 0, 0,
    0, Math.cos(0.01), -Math.sin(0.01), 0,
    0, Math.sin(0.01), Math.cos(0.01), 0,
    0, 0, 0, 1
);
const rotaY = new THREE.Matrix4();
rotaY.set(
    Math.cos(0.01), 0, -Math.sin(0.01), 0,
    0, 1, 0, 0,
    Math.sin(0.01), 0, Math.cos(0.01), 0,
    0, 0, 0, 1
);
var ejer07 = translation.multiply(scala).multiply(rotaY).multiply(rotaX);
var scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
scene.add(cube);
var camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(20, 20, 20);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.minDistance = 5;
controls.maxDistance = 100;
var animate = function () {
    requestAnimationFrame(animate);
    cube.geometry.applyMatrix4(ejer07);
    renderer.render(scene, camera);
}
animate();