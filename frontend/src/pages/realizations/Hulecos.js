import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  DragControls,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PivotControls,
} from "@react-three/drei";
import HulecosModel from "../../3d/HulecosModel";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import cigar from "../../assets/cut-cigar.png";
import "../../styles/Hulecos.css";
import { gql, useQuery } from "@apollo/client";
import HulecosLogo from "../../assets/svgIcons/HulecosLogo";
import ContactSection from "../../components/ContactSection";
import ProductCards from "../../components/ProductCards";
import config from "../../config";

const HULECOS = gql`
  query getRealization {
    realization(id: 6) {
      data {
        attributes {
          banner {
            data {
              attributes {
                url
              }
            }
          }
          realizationPageContent
          moreRealizations {
            data {
              id
              attributes {
                title
                industry
                services
                competences
                productImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Hulecos = () => {
  const { data, error, loading } = useQuery(HULECOS);
  const dragControlsRef = useRef();
  const [realizationPageContent, setRealizationPageContent] = useState(null);
  const [customerImage, setCustomerImage] = useState(null);
  const matrix = new THREE.Matrix4();
  const objectRef = useRef();
  const initialPosition = useRef(new THREE.Vector3());
  const [bringToInitialPosition, setbringToInitialPosition] = useState(false);
  const gsapInitialPosition = useRef({ x: 0, y: 0, z: 0 });
  // Référence pour la position précédente
  const previousPosition = useRef(new THREE.Vector3());

  const handleDragStart = (origin) => {
    console.log("Drag Start", { origin });

    if (objectRef.current) {
      const initialPos = new THREE.Vector3();
      objectRef.current.getWorldPosition(initialPos);
      initialPosition.current.copy(initialPos);
      previousPosition.current.copy(initialPos); // Initialisez également la position précédente
    }
  };

  const handleDrag = (
    localMatrix,
    deltaLocalMatrix,
    worldMatrix,
    deltaWorldMatrix
  ) => {
    // Mettre à jour la matrice si autoTransform est désactivé
    matrix.copy(localMatrix);

    // Calculer la position actuelle de l'objet
    const position = new THREE.Vector3();
    position.setFromMatrixPosition(worldMatrix);

    gsapInitialPosition.current = position;
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
    if (position.x > -0.5 && position.x < 0.5 && position.y > 1.2) {
      console.log("HULECOS DANS LE CIGAR");
      //after 1sec scroll to hulecos content
      setTimeout(() => {
        document
          .getElementById("hulecosContent")
          .scrollIntoView({ behavior: "smooth" });
      }, 500);
      return;
    }
  };

  const handleDragEnd = () => {
    console.log("Drag End");
    setbringToInitialPosition(!bringToInitialPosition);
    console.log("OBJECT REF POSITION", objectRef.current.position);
  };

  useGSAP(() => {
    if (!objectRef.current && gsapInitialPosition) return;
    console.log("GSAP INITIAL POSITION", gsapInitialPosition);
    gsap.fromTo(
      objectRef.current.position,
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
        ease: "elastic.out(1, 0.9)",
      }
    );

    gsap.to(objectRef.current.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.5,
      ease: "power1.out",
    });
  }, [bringToInitialPosition]);

  useEffect(() => {
    //when i have data i setrealizationpagecontent to an array of the content divided by the paragraphs
    if (data) {
      setRealizationPageContent(
        data.realization.data.attributes.realizationPageContent.split("\n")
      );
      setCustomerImage(
        data.realization.data.attributes.banner.data.attributes.url
      );
    }
  }, [data]);

  if (!realizationPageContent) return <div>Loading...</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <img src={cigar} className="cigar" />
      <h1 className="text-[30px] text-center font-thin md:text-[50px]  hulecosTitle">
        Drag the pen in the cigar
      </h1>
      <div className="h-screen w-screen z-0">
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
            dragLimits={[undefined, [-10, 1.8], undefined]}
          >
            <HulecosModel ref={objectRef} scale={[1.4, 1.4, 1.4]} />
          </DragControls>
        </Canvas>
      </div>

      <div
        id="hulecosContent"
        className="homePage min-h-screen flex flex-col-reverse md:flex-row items-center"
      >
        <div className="md:w-1/2 h-full flex items-center p-8">
          <p className="p">{realizationPageContent[0]}</p>
        </div>
        <div className="h-[500px] md:h-[800px]">
          <Canvas style={{ width: "500px" }}>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <PerspectiveCamera />
            <HulecosModel scale={[1.3, 1.3, 1.3]} position={[0, 3, 0]} />
          </Canvas>
        </div>
      </div>
      <div
        className="w-full relative"
        style={{
          backgroundImage: `url(${config.apiUrl}${customerImage})`,
        }}
      >
        {/* NEW DIV HERE */}
        <div className="hulecosCustomer"></div>
        <div className=" md:w-1/2 p-[43px] relative z-30">
          <HulecosLogo />
          <div className="smallSpace"></div>
          <p className="p text-white">{realizationPageContent[1]}</p>
        </div>
      </div>

      <div className="homePage">
        <div className="sectionSpace"></div>

        <ContactSection />

        <div className="sectionSpace"></div>

        <ProductCards
          data={data.realization.data.attributes.moreRealizations.data}
        />
      </div>
    </div>
  );
};

export default Hulecos;
