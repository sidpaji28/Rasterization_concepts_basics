import * as THREE from 'https://unpkg.com/three@0.160.1/build/three.module.js';

// scene
const scene = new THREE.Scene();
//object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color : 0xff0000})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight) 
camera.position.x=2
scene.add(camera)
//canvas
const canvas = document.querySelector('.webgl')
// size
const sizes = {
    width : 800,
    height : 600
}

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas : canvas })
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)