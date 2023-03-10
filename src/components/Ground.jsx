export default function Ground() {
    return(
        <mesh 
            position={[0, 0, 0]}
            rotation={[-Math.PI/2, 0, 0]}
        >
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial color={'lightblue'} />
        </mesh>
    )
};