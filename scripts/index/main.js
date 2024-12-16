import * as THREE from 'three';

const canvas = document.querySelector('#c');

canvas.Width = 300;
canvas.Height = 300;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.Width / canvas.Height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(canvas.Width, canvas.Height);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();
