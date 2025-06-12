'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { useEffect} from 'react';
function Model() {
  const gltf = useGLTF('/pawtisserie.glb');
  const modelRef = useRef<THREE.Group>(null);

  
 

  return   <primitive
  ref={modelRef}
  object={gltf.scene}
  position={[0, -2, 0]}
  scale={1}
/>

}



const ModelViewer = () => {
  return (
    <div className="w-[325px] lg:w-[400px] h-[500px]">
      <Canvas camera={{ position: [-5,2,-5], fov:50 }}>
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
