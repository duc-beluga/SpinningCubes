// Create a new scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube and add it to the scene
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a light and add it to the scene
var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 5);
scene.add(light);

// Add interactivity
document.addEventListener('mousemove', onDocumentMouseMove);
window.addEventListener('resize', onWindowResize);

function onDocumentMouseMove(event) {
    // Rotate the cube based on mouse position
    var mouseX = event.clientX - window.innerWidth / 2;
    var mouseY = event.clientY - window.innerHeight / 2;
    cube.rotation.x = mouseY / 200;
    cube.rotation.y = mouseX / 200;
}

function onWindowResize() {
    // Update the camera aspect ratio when the window is resized
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();