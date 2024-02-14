import './style.css'
import * as THREE from 'three'

import { addLight } from './addLights'
import { rainbow, ball1, ball2, ball3, pipe } from './addMeshes'



const renderer = new THREE.WebGL1Renderer()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100)//+ camera
const scene = new THREE.Scene()
const meshes = {} 
const lights = {}
const clock = new THREE.Clock()




const listener = new THREE.AudioListener();
camera.add( listener );

const sound = new THREE.Audio( listener );
const audioLoader = new THREE.AudioLoader();
audioLoader.load( '/sounds/music3.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});



init()//call init

//setup
function init(){
   
    renderer.setSize(window.innerWidth,window.innerHeight)
    document.body.appendChild(renderer.domElement)
    
    //meshes.rainbow = rainbow()
    meshes.ball1 = ball1()
    //meshes.ball2 = ball2()
    //meshes.ball3 = ball3()
    meshes.pipe = pipe()
 

    lights.default = addLight()

    scene.add(lights.default)
    //scene.add(meshes.rainbow)
    scene.add(meshes.ball1)
    //scene.add(meshes.ball2)
    //scene.add(meshes.ball3)
    scene.add(meshes.pipe)


    //initial position
    // meshes.rainbow.rotation.y = 3.2
    // meshes.rainbow.rotation.x = 0.5
    // meshes.rainbow.rotation.z = -0.4

    meshes.ball1.position.x = -1
    //meshes.ball2.position.z = -1
    //meshes.ball3.position.z = -2

    meshes.pipe.rotation.x = -1
    meshes.pipe.position.y = 3.5
    meshes.pipe.rotation.y = -3.5
    meshes.pipe.rotation.z = 1.2

    
    


    camera.position.set(0.2,3,3)

    resize()
    animate()
}

function resize(){
    window.addEventListener('resize',()=>{
        renderer.setSize(window.innerWidth,window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
}

//animation
function animate(){
    requestAnimationFrame(animate)
    const tick = clock.getElapsedTime()
    
    // meshes.rainbow.position.x = Math.sin(tick*5) * 0.1
    // meshes.rainbow.position.y = Math.cos(tick*5)* 0.1

    //purple
    // meshes.ball1.position.x = Math.sin(tick*-2)* 5.5
    // meshes.ball1.position.y = Math.cos(tick*-2)* 5.5
    
    meshes.ball1.position.y = Math.cos(tick*-5)*0.5 +3
    meshes.ball1.rotation.y += 0.08
    meshes.ball1.position.x = Math.sin(tick*-3)* 1.5 - 0.6
 
    //yellow
    //meshes.ball2.position.x = Math.sin(tick*2.3)* 4.5
    //meshes.ball2.position.y = Math.cos(tick*2.3)* 4.5

    //blue
    //meshes.ball3.position.x = Math.sin(tick*1.9)* 5
    //meshes.ball3.position.y = Math.cos(tick*1.9)* 5

    //pipe
    meshes.pipe.rotation.z += 0.1
    meshes.pipe.position.x = Math.sin(tick*5)*0.2 
    meshes.pipe.position.y = Math.cos(tick*5)*0.2 +1.5


    renderer.render(scene,camera)//scene+camera->renderer
}