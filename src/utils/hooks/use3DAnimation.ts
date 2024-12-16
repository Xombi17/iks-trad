import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export const use3DAnimation = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.1;
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.001;
  });

  return meshRef;
};