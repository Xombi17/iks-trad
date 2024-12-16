import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingLeaf from './FloatingLeaf';
import Background from './Background';
import ParticleField from './ParticleField';
import FloatingSymbols from './FloatingSymbols';

export default function Scene() {
  const leaves = Array.from({ length: 20 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5
    ] as [number, number, number]
  }));

  return (
    <Canvas className="absolute inset-0 -z-10">
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#fcd34d" />
      
      <Suspense fallback={null}>
        <Background />
        <ParticleField />
        <FloatingSymbols />
        {leaves.map((leaf, i) => (
          <FloatingLeaf key={i} position={leaf.position} />
        ))}
      </Suspense>
    </Canvas>
  );
}