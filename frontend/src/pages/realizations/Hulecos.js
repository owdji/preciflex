import React, {useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls, DragControls, Environment, OrbitControls, PerspectiveCamera, PivotControls } from '@react-three/drei';
import HulecosModel from '../../3d/HulecosModel'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import cigar from '../../assets/cut-cigar.png'
import '../../styles/Hulecos.css'

const Hulecos = () => {
  const dragControlsRef = useRef();
  const matrix = new THREE.Matrix4();
  const objectRef = useRef();
  const initialPosition = useRef(new THREE.Vector3());
  const [bringToInitialPosition, setbringToInitialPosition] = useState(false)
  const [hulecosIsInCigar, setHulecosIsInCigar] = useState(false)
  const gsapInitialPosition = useRef(null)
  const yLimit = useRef(1.7)
  // Référence pour la position précédente
  const previousPosition = useRef(new THREE.Vector3());
  
  const handleDragStart = (origin) => {
    console.log('Drag Start', { origin });
    
    if (objectRef.current) {
      const initialPos = new THREE.Vector3();
      objectRef.current.getWorldPosition(initialPos);
      initialPosition.current.copy(initialPos);
      previousPosition.current.copy(initialPos); // Initialisez également la position précédente
    }
  };
  
  const handleDrag = (localMatrix, deltaLocalMatrix, worldMatrix, deltaWorldMatrix) => {
  
    // Mettre à jour la matrice si autoTransform est désactivé
    matrix.copy(localMatrix);
  
    // Calculer la position actuelle de l'objet
    const position = new THREE.Vector3();
    position.setFromMatrixPosition(worldMatrix);  
    
    gsapInitialPosition.current = position
    // Calculer la direction du mouvement
    const movementDirection = position.x - previousPosition.current.x;
    previousPosition.current.copy(position); // Mettre à jour la position précédente pour le prochain calcul

    // //DRAG LITMIS (NOT WORKING) 
    // console.log('X POSITION', position.x)
    // console.log('Y LIMIT', yLimit.current)
    // if(position.x < -1 || position.x > 1){
    //   yLimit.current = 10
    // } else {
    //   yLimit.current = 0.4
    // }
    

    // Appliquer une rotation en fonction de la direction du mouvement
    if (objectRef.current) {
      const rotationAmount = movementDirection * 0.2; // Ajustez l'échelle pour la rotation
      objectRef.current.rotation.y -= rotationAmount;
    }

    //détection si hulecos est dans le cigar
    if(position.x > - 0.5  && position.x < 0.5 && position.y > 1.2){
      console.log('HULECOS DANS LE CIGAR')
      //after 1sec scroll to hulecos content
      setTimeout(() => {
        document.getElementById('hulecosContent').scrollIntoView({behavior: 'smooth'})
      }, 500)
      return;
    }
  };

  const handleDragEnd = () => {
    console.log('Drag End');
    setbringToInitialPosition(!bringToInitialPosition)
    console.log('OBJECT REF POSITION', objectRef.current.position)
  };

  useGSAP(() => {
    if(!objectRef.current) return;
    console.log('GSAP INITIAL POSITION', gsapInitialPosition)
    //OKAY MON PROBLEME EST QUE LA POSITION INITALE EST 0
    gsap.fromTo(objectRef.current.position, 
    {
        x: gsapInitialPosition.current.x,
        y: gsapInitialPosition.current.y, 
        z: gsapInitialPosition.current.z,

    },
    {
      x: 0,
      y: 0, 
      z: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.9)', 
    })

    gsap.to(objectRef.current.rotation, {
      x: 0,
      y: 0, 
      z: 0,
      duration: 0.5,
      ease: 'power1.out',
    })
  }, [bringToInitialPosition])

  return (
    <div>
      <img src={cigar} className='cigar' />
      <h1 className='title1 hulecosTitle'>Drag the pen in the cigar</h1>
      <div className='h-screen w-screen z-0'>
        <Canvas>
          {/* <Environment preset="studio" environmentIntensity={0.1} /> */}
          <ambientLight intensity={1} />
          <PerspectiveCamera makeDefault position={[0, 0, 8]} /> 

          <DragControls
            ref={dragControlsRef}
            matrix={matrix}
            autoTransform={true}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            dragLimits={
              [
                undefined,
                [-10, 1.8],
                undefined
              ]
            }
          >
            <HulecosModel ref={objectRef} scale={[1.4, 1.4, 1.4]}/>
          </DragControls>
        </Canvas>
      </div>

      <div id='hulecosContent' className='homePage h-screen grid grid-cols-6 gap-4'>
        <p className='col-span-3'>Nulla amet facilisi sagittis faucibus. Odio ipsum pharetra feugiat viverra mi. Ut quis elementum pretium condimentum ac consequat senectus gravida sit. Aliquam ullamcorper ipsum convallis quam senectus nec vitae leo vitae. Laoreet duis vel fermentum habitasse in at. </p>
        <div className='col-span-3'>
          <Canvas>
            <ambientLight intensity={1}/>
            <OrbitControls enableZoom={false}/>
            <PerspectiveCamera/> 
                <HulecosModel  scale={[0.9, 0.9, 0.9]} position={[0, 3, 0]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hulecos