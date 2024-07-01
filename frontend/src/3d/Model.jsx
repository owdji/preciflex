import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


export function Model(props) {
  const { nodes, materials } = useGLTF('/model-transformed.glb')
  const dialRef = useRef()
    // Smoothed target position variables
    const targetX = useRef(0);
    const targetY = useRef(0);

  // useFrame(({ pointer, viewport }) => {
  //   const x = (pointer.x * viewport.width) / 2.5
  //   const y = (pointer.y * viewport.height) / 2.5
    
  //       // Update smoothed target position gradually
  //       targetX.current += (x - targetX.current) * 0.05;
  //       targetY.current += (y - targetY.current) * 0.05;
    
  //       // Update lookAt based on smoothed target position
  //       if (dialRef.current) {
  //         dialRef.current.lookAt(targetX.current, targetY.current, 1);
  //       }
  // })

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.ressort2001.geometry} ref={dialRef} material={materials['metal-test']} position={[0, 0, 0]} rotation={[Math.PI, -0.016, Math.PI]} scale={[1.3, 1.3, 1.3]} />
    </group>
  )
}

useGLTF.preload('/model-transformed.glb')
