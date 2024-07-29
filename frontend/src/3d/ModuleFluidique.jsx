import React, { useRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshTransmissionMaterial } from '@react-three/drei'
import useSmoothLookAt from '../hooks/UseSmoothLookAt'
import * as THREE from 'three'

export function ModuleFluidique({ color = 'blue', ...props }) {
  const { nodes, materials } = useGLTF('/module-fluidique-web-transformed.glb')
  const modelFluidiqueRef = useRef()
  useSmoothLookAt(modelFluidiqueRef, props.look)

  // Create a new material based on the chosen color
  const liquidMaterial = useMemo(() => {
    const newMaterial = materials['Material.002'].clone()
    newMaterial.color = new THREE.Color(color)
    return newMaterial
  }, [color, materials])

  return (
    <group {...props} dispose={null} ref={modelFluidiqueRef}>
      <mesh geometry={nodes.BASE001.geometry} material={materials['metal-web']} position={[0, -0.015, 0.002]} rotation={[Math.PI, -0.016, Math.PI]} scale={[0.003, 0.003, 0.007]} />
      <mesh geometry={nodes['cercle-tuyaux2001'].geometry} material={materials.black} position={[-0.002, -0.017, -0.005]} rotation={[Math.PI / 2, 0, 3.126]} scale={0.002} />
      <mesh geometry={nodes.liquide001.geometry} material={liquidMaterial} position={[0, 0.002, -0.006]} rotation={[1.564, -0.398, 3.124]} scale={0.00225} />
      <mesh geometry={nodes.Verre001.geometry} position={[0, 0.002, -0.006]} rotation={[Math.PI / 2, 0, 3.126]} scale={0.00224} >
        <MeshTransmissionMaterial transmissionSampler transmission={1} roughness={0}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/module-fluidique-web-transformed.glb')