export default function Arm(props){
    let {
        position=[0,0,0],
        rotation=[0,0,0],
        subPosition=[0,0,1.5],
        jointColor='red',
        armColor='blue',
        ...restProps} = props;
    return(
        <group 
            position={props.position}
            rotation={props.rotation}
        >
            <mesh 
                position={[0,0,0]}
                rotation={[props.joint.x||0,props.joint.y||0,props.joint.z||0]}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color={jointColor}/>
                <mesh 
                    position={props.subPosition}
                    rotation={[0,0,0]}
                >
                    <boxGeometry args={props.size}  />
                    <meshBasicMaterial color={armColor}/>
                    {props.children}
                </mesh>
            </mesh> 
        </group>  
    )
}