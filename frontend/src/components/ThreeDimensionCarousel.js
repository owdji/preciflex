import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
 

function RotatingBox() {
    const meshRef = useRef();
    // const gltf = useLoader(GLTFLoader, '../assets/3d/module-fluidique.glb')

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[3,3,3]}/>
            <meshStandardMaterial color="orange" metalness={0.6} roughness={0.4} />
        </mesh>
    );
}

export default function ThreeDimensionCarousel() {
    return (
        <div>
            <h1>---carousel 3d---</h1>
            {/* <Canvas> */}
                {/* <ambientLight /> */}
                {/* <pointLight position={[5, 5, 5]} intensity={10}/>
                <pointLight position={[10, 5, 5]} intensity={10}/>
                <RotatingBox /> */}

            {/* </Canvas> */}
        </div>
    );
}
