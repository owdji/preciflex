import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshTransmissionMaterial } from '@react-three/drei'
import useSmoothLookAt from '../hooks/UseSmoothLookAt'
import { useThree } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export function ModuleFluidiqueHero(props) {
  const { nodes, materials } = useGLTF('/module-fluidique-web-transformed.glb')
  const moduleFluidiqueRef = useRef()

    useGSAP(() => { 
      gsap.to(moduleFluidiqueRef.current.rotation, {
        y: Math.PI,
        scrollTrigger: {
          trigger: '.hytContainer',
          start: 'center center',
          end: 'bottom center',
          scrub: 0.5,
          markers: false,
        },
      });

      gsap.fromTo(moduleFluidiqueRef.current.position, {
          x: -10,
          y: 0,
          z: 0,
        },
        {
          x: 10,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: '.hytContainer',
            start: 'center center',
            end: 'bottom center',
            scrub: 0.5,
          },
        }
      );
  },);  
 

  return (
    <group {...props} dispose={null} ref={moduleFluidiqueRef}>
      {/* <mesh geometry={nodxes.BASE001.geometry} material={materials['metal-web']} position={[0, -0.015, 0.002]} rotation={[Math.PI, -0.016, Math.PI]} scale={[0.003, 0.003, 0.007]} /> */}
      <mesh geometry={nodes.BASE001.geometry} material={materials['metal-web']} position={[0, -0.015, 0.002]} rotation={[Math.PI, -0.016, Math.PI]} scale={[0.003, 0.003, 0.007]} />


      <mesh geometry={nodes['cercle-tuyaux2001'].geometry} material={materials.black} position={[-0.002, -0.017, -0.005]} rotation={[Math.PI / 2, 0, 3.126]} scale={0.002} />
      <mesh geometry={nodes.liquide001.geometry} material={materials['Material.002']} position={[0, 0.002, -0.006]} rotation={[1.564, -0.398, 3.124]} scale={0.00201} />
      {/* <mesh geometry={nodes.Verre001.geometry} material={materials['Glass.001']} position={[0, 0.002, -0.006]} rotation={[Math.PI / 2, 0, 3.126]} scale={0.002} /> */}
      <mesh geometry={nodes.Verre001.geometry} position={[0, 0.002, -0.006]} rotation={[Math.PI / 2, 0, 3.126]} scale={0.002} >
        <MeshTransmissionMaterial transmissionSampler transmission={1} roughness={0}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/module-fluidique-web-transformed.glb')
