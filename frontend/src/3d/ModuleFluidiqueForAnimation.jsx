import React, { forwardRef, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three'; 
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const ModuleFluidiqueForAnimation = ({color, ...props }) => {
  const { nodes, materials } = useGLTF('/module-fluidique-pres-transformed.glb');
  const modelRef = useRef();
  const liquidRef = useRef();

  // Créer un nouveau matériau basé sur la couleur choisie
  const liquidMaterial = useMemo(() => {
    const newMaterial = materials['blue-liquid'].clone();
    newMaterial.color = new THREE.Color(color);
    return newMaterial;
  }, [color, materials]);

  useGSAP(() => { 

      gsap.to(modelRef.current.position, {
        x: -5,
        y: 0,
        z: 0,
        duration: 5,
        scrollTrigger: {
          trigger: '.firstSection',
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5,
          markers: true,
        },
      });

      gsap.fromTo(modelRef.current.rotation, {
        y: Math.PI * 2,
      }, {
        y: 0.1,
        duration: 5,
        scrollTrigger: {
          trigger: '.firstSection',
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5,
          markers: true,
        },
      });

      gsap.fromTo(liquidRef.current.rotation, {
        y: 0.709,
      }, {
        y: -2.2,
        duration: 5,
        scrollTrigger: {
          trigger: '.secondSection',
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5,
          markers: true,
        },
      });
  },);  

  return ( 
    <group {...props} dispose={null} ref={modelRef}>
      <mesh 
        geometry={nodes['liquid-2'].geometry} 
        material={liquidMaterial} 
        position={[0, 0.002, -0.006]} 
        rotation={[Math.PI / 2, 0.709, 0]} 
        scale={0.021} 
      />
      <mesh 
        ref={liquidRef} 
        geometry={nodes['liquid-2'].geometry} 
        material={liquidMaterial} 
        position={[0, 0.002, -0.006]} 
        rotation={[Math.PI / 2, 0.709, 0]} 
        scale={0.021} 
      />
      <mesh 
        geometry={nodes['liquid-2'].geometry} 
        material={liquidMaterial} 
        position={[0, 0.002, -0.006]} 
        rotation={[Math.PI / 2, 0.709, 0]} 
        scale={0.021} 
      />
      <mesh geometry={nodes.BASE.geometry} material={materials['metal-web']} position={[0, -0.015, 0.002]} rotation={[Math.PI, -0.016, Math.PI]} scale={[0.003, 0.003, 0.007]} />
      <mesh geometry={nodes['cercle-tuyaux1001'].geometry} material={materials['black-attach']} position={[0.002, -0.017, -0.005]} rotation={[Math.PI / 2, 0, 3.126]} scale={0.002} />
      <mesh geometry={nodes.glass.geometry} position={[0, 0.002, -0.006]} rotation={[Math.PI / 2, 0, 3.126]} scale={0.00233}>
        <MeshTransmissionMaterial
          transmissionSampler
          transmission={1}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </group>
  )
};

export default ModuleFluidiqueForAnimation;