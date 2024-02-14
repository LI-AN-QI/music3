import { DirectionalLight } from "three";

export const addLight = () => {
    let light = new DirectionalLight(0xffffff, 3)
    light.position.set(-1,4.5,5)
    return light
}