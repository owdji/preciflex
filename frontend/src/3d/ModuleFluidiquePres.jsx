import React, { forwardRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshTransmissionMaterial } from '@react-three/drei'

const ModuleFluidiquePres = forwardRef((props, moduleFluidiqueRef) => {
    const { nodes, materials } = useGLTF('/module-fluidique-web-transformed.glb');
  
    return (
      <group {...props} dispose={null} ref={moduleFluidiqueRef}>
        <mesh geometry={nodes.BASE001.geometry} material={materials['metal-web']} position={[0, -0.015, 0.002]} rotation={[Math.PI, -0.016, Math.PI]} scale={[0.003, 0.003, 0.007]} />
        <mesh geometry={nodes['cercle-tuyaux2001'].geometry} material={materials.black} position={[-0.002, -0.017, -0.005]} rotation={[Math.PI / 2, 0, 3.126]} scale={0.002} />
        {/* i wanna access the bottom mesh too, from the parent how to do it ?  */}
        <mesh geometry={nodes.liquide001.geometry} material={materials['Material.002']} position={[0, 0.002, -0.006]} rotation={[1.564, -0.398, 3.124]} scale={0.00224} />
        <mesh geometry={nodes.Verre001.geometry} position={[0, 0.002, -0.006]} rotation={[Math.PI / 2, 0, 3.126]} scale={0.00225}>
          <MeshTransmissionMaterial transmissionSampler transmission={1} roughness={0} />
        </mesh>
      </group>
    );
  });
  
  export default ModuleFluidiquePres;

useGLTF.preload('/module-fluidique-web-transformed.glb')
