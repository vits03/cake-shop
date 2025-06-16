'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { useEffect} from 'react';
import { useWindowSize } from "@react-hook/window-size";

function Model() {
  const gltf = useGLTF('/pawtisserie.glb');
  const modelRef = useRef<THREE.Group>(null);

  
 

  return   <primitive
  ref={modelRef}
  object={gltf.scene}
  position={[0, -1, 0]}
  scale={1}
/>

}



const ModelViewer = () => {
      const [width, height] = useWindowSize();
        
  return (
    <div className="w-[325px] lg:w-[400px] md:mt-20 mt-10 h-[500px]">
      <Canvas camera={{ position: [-3,2,-5], fov: width < 500 ?55:45 }}>
        <ambientLight intensity={0.1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false}   minPolarAngle={Math.PI / 3}  // lock vertical angle to straight-on
  maxPolarAngle={Math.PI / 4}
  minAzimuthAngle={Math.PI / 3}  // limit left
  maxAzimuthAngle={-Math.PI / 4} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
