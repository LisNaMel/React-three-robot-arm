import {PerspectiveCamera, OrbitControls} from '@react-three/drei';


import { Suspense, useState } from 'react';
import Ground from './Ground';
import Robot from './Robot';

export default function Scene() {
    return (
        <Suspense fallback={null}>
            <ambientLight />
            {/* <directionalLight 
                // ref={directionalLightRef}
                position={[100,100,50]} 
                args={['#ffffff', 1]}
            /> */}
            <PerspectiveCamera makeDefault position={[20, 10, 0]} fov={50} />
            <OrbitControls target={[0, 0, 0]} />
            <Ground />
            <Robot />
            {/* <mesh position={[2,2,0]}>
                <boxGeometry args={[1,1,1]}/>
                <meshBasicMaterial color={'green'} />
            </mesh> */}
        </Suspense>
    )
}