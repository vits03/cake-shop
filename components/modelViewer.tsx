'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useWindowSize } from '@react-hook/window-size';

function Model() {
  const gltf = useGLTF('/compressedh.glb');
  const modelRef = useRef<THREE.Group>(null);

  // Rotate model slowly on Y axis
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  // Optional: Fix material to render both sides if needed
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.side = THREE.DoubleSide;
          child.material.transparent = false;
        }
      });
    }
  }, [gltf]);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      position={[0, 0, 0]}
      scale={1}
    />
  );
}

const ModelViewer = () => {
  const [width] = useWindowSize();

  return (
    <div className="w-[325px] lg:w-[400px] md:mt-20 mt-10 h-[500px]">
      <Canvas camera={{ position: [-12,-3, -5], fov: width < 500 ? 25 :20}}>
        {/* Lighting */}
            <ambientLight intensity={1} />

    {/* Hemisphere light for overall softness */}
    <hemisphereLight skyColor="#ffffff" groundColor="#bbbbbb" intensity={0.6} />

    {/* Directional lights from all sides */}
    <directionalLight position={[0, 10, 0]} intensity={1} />
    <directionalLight position={[10, 5, 0]} intensity={1} />
    <directionalLight position={[-10, 5, 0]} intensity={1} />
    <directionalLight position={[0, -5, 10]} intensity={1} />
    <directionalLight position={[0, 0, -10]} intensity={1} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 4}
          minAzimuthAngle={Math.PI / 3}
          maxAzimuthAngle={-Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
