const rotaZ = new THREE.Matrix4();
rotaZ.set(
    Math.cos(0.01), -Math.sin(0.01), 0, 0,
    Math.sin(0.01), Math.cos(0.01), 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
);
const rotaX = new THREE.Matrix4();
rotaX.set(
    1, 0, 0, 0,
    0, Math.cos(0.02), -Math.sin(0.02), 0,
    0, Math.sin(0.02), Math.cos(0.02), 0,
    0, 0, 0, 1
);
const transformation = rotaZ.multiply(rotaX);
var cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
var cubeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true });
var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
cube.position.x = 2
cube.position.y = 2
cube.position.z = 2
var camera = new THREE.PerspectiveCamera(30,window.innerWidth/window.innerHeight);
camera.position.z = 30;
camera.position.y = 30;
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
scene.add(cube);
axesHelper = new THREE.AxesHelper( 100 );
scene.add( axesHelper );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
var animate = () => {
    requestAnimationFrame(animate)
    cube.geometry.applyMatrix4( transformation )
    controls.update()
    renderer.render( scene, camera)
}
animate()