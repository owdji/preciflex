
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Dial = (props) => {
  const { nodes, materials } = useGLTF('/aaa-test.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ressort2001.geometry}
        material={materials['metal-test']}
        position={[0.036, -0.01, 0.001]}
        rotation={[Math.PI, -0.016, Math.PI]}
        scale={[0.006, 0.005, 0.006]}
      />
    </group>
  )
}

useGLTF.preload('/aaa-test.glb')

export default Dial