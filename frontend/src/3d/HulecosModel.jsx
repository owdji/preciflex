import React, { forwardRef, useRef, useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import useSmoothLookAt from '../hooks/UseSmoothLookAt';

const HulecosModel = forwardRef((props, ref) => {
  const { nodes } = useGLTF('/hulecos.glb');
  const texture = useTexture('/hulecosBaked3.png');
  const screenTexture = useTexture('/hulecosScreenBaked.png');
  const internalRef = useRef();

  texture.flipY = false;
  texture.repeat.set(1, 1);
  texture.offset.set(0, 0);

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.7,
    metalnessMap: texture,
  });

  const screenMaterial = new THREE.MeshStandardMaterial({
    map: screenTexture,
  });


  // Sync the internal ref with the forwarded ref
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(internalRef.current);
      } else {
        ref.current = internalRef.current;
      }
    }
  }, [ref]);

  return (
    <group {...props} dispose={null} ref={internalRef}>
      <group rotation={[0, 4.75, 0]} position={[0, -3, 0]}>
        <mesh geometry={nodes.Cube003.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Cube003_1.geometry} material={textureMaterial} />
        <mesh geometry={nodes.PIC.geometry} material={textureMaterial} position={[0.001, 2.492, 0]} />
        <mesh geometry={nodes.Plane002.geometry} material={screenTexture} position={[0.267, 0.919, 0.006]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.top.geometry} material={textureMaterial} position={[0.002, 2.02, 0]} scale={0.938} />
        <mesh geometry={nodes.vis.geometry} material={textureMaterial} position={[0.001, 1.918, 0.006]} rotation={[Math.PI / 2, 0, 0]} scale={0.938} />
      </group>
    </group>
  );
});

useGLTF.preload('/hulecos.glb');

export default HulecosModel;