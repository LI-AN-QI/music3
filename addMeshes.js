import {  MeshPhysicalMaterial, Mesh, TextureLoader,BoxGeometry,SphereGeometry,TorusGeometry } from "three";


const loader = new TextureLoader()


export const rainbow = () =>{
    const color = loader.load('public/textures/rainbow2.jpg')
    const rainbowGeometry = new BoxGeometry(6,0.5,50)
    const rainbowMaterial = new MeshPhysicalMaterial({
        map: color
    })
    const rainbowMesh = new Mesh(rainbowGeometry,rainbowMaterial)
    rainbowMesh.position.set(0,0,0)
    return rainbowMesh 
}

export const ball1 = () =>{
    const color = loader.load('public/textures/rainbow2.jpg')
    const ball1Geometry = new SphereGeometry(1, 20, 20)
    const ball1Material = new MeshPhysicalMaterial({
        //color: "rgb(211, 82, 250)",
        map: color,
        reflectivity: 1,
        roughness:0,
    })
    const ball1Mesh = new Mesh(ball1Geometry,ball1Material)
    ball1Mesh.position.set(0,2,0)
    return ball1Mesh 
}

export const ball2 = () =>{

    const ball2Geometry = new SphereGeometry(0.5, 20, 20)
    const ball2Material = new MeshPhysicalMaterial({
        color: "rgb(250, 236, 82)",
        reflectivity: 1,
        roughness:0,
        
    })
    const ball2Mesh = new Mesh(ball2Geometry,ball2Material)
    ball2Mesh.position.set(0,2,0)
    return ball2Mesh 
}

export const ball3 = () =>{

    const ball3Geometry = new SphereGeometry(1.5, 20, 20)
    const ball3Material = new MeshPhysicalMaterial({
        color: "rgb(82, 250, 230)",
        reflectivity: 1,
        roughness:0,
        
    })
    const ball3Mesh = new Mesh(ball3Geometry,ball3Material)
    ball3Mesh.position.set(0,2,0)
    return ball3Mesh 
}


export const pipe = () =>{
    const color = loader.load('public/textures/rainbow2.jpg')
    //const pipeGeometry = new TorusGeometry( 5.5, 4, 16, 100 ); 
    const pipeGeometry = new TorusGeometry( 4.5, 2.5, 16, 100 ); 
    const pipeMaterial = new MeshPhysicalMaterial( { 
        map: color
     } ); 
    const pipeMesh = new Mesh( pipeGeometry, pipeMaterial ); 
    return pipeMesh
}