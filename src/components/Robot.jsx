import { useControls } from 'leva'
import Arm from './Arm';
import TCP from './TCP';

export default function Robot(){
    let joint1 = useControls('joint1', {
        y: {value: 0, min:-1 * Math.PI, max: Math.PI, step: 0.02} 
    });
    let joint2 = useControls('joint2', {
        z: {value: 0, min:-1 * Math.PI, max: Math.PI, step: 0.02} 
    });
    let joint3 = useControls('joint3', {
        x: {value: 0, min:-1 * Math.PI, max: Math.PI, step: 0.02} 
    });
    let grip = useControls('Gripped', {
        isGripped: false
    });
    return(
        <Arm 
            position={[0, 0.5, 0]}
            subPosition={[0,2,0]}
            size={[1,3,1]}
            joint={joint1}
        >
            <Arm 
                position={[0,1, 1]}
                rotation={[0,0,0]}
                size={[0,0,0]}
                joint={joint2}
            >   
                <Arm
                    position={[1, 0, 0]}
                    subPosition={[0,1.25,0]}
                    size={[1,1.5,1]}
                    joint={joint3}
                >
                    <TCP grip={grip.isGripped} />
                </Arm>
            </Arm>
        </Arm>   
    )
}