'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { useEffect} from 'react';
function Model() {
  const gltf = useGLTF('/pawtisserie.glb');
  const modelRef = useRef<THREE.Group>(null);

  const [rotationProgress, setRotationProgress] = useState(0);
  const rotationSpeed = 0.015;

  useFrame(() => {
    if (modelRef.current && rotationProgress < Math.PI) {
      modelRef.current.rotation.y += rotationSpeed;
      setRotationProgress(prev => Math.min(prev + rotationSpeed, Math.PI));
    }
  });

  return <primitive ref={modelRef}   position={[0, -1, 0]} // Shift it up into view
 object={gltf.scene} scale={1} />;
}

function CameraZoomIn() {
  const { camera } = useThree();
  const targetZ =6;
  const speed = 0.1;

  useFrame(() => {
    if (camera.position.z > targetZ) {
      camera.position.z -= speed;
      camera.updateProjectionMatrix();
    }
  });

  return null;
}

const ModelViewer = () => {
  return (
    <div className="w-[325px] lg:w-[400px] h-[500px]">
      <Canvas camera={{ position: [4, 2,15], fov:50 }}>
        <ambientLight intensity={0.1} />
        <Suspense fallback={null}>
          <Model />
          <CameraZoomIn />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
