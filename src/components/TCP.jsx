import {useRef, useEffect} from 'react';

export default function TCP(props){
    let isGripped = props.grip;
    let box = useRef();

    useEffect(()=>{
        console.log(box.current);
    }, [])
    return( 
        <>
        {isGripped ?(
        <mesh ref={box} position={[0,1.25,0]}>
            <boxGeometry args={[1,1,1]}/>
            <meshBasicMaterial color={'green'} />
        </mesh>
        ):(
        <mesh position={[0,1.5,0]}>
            <sphereGeometry args={[0.4, 15, 16]}/>
            <meshBasicMaterial color={'yellow'} />
        </mesh>
        )}
        </>      
    )
};