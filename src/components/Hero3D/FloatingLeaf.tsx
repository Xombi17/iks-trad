import React from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function FloatingLeaf({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { mass: 2, tension: 170, friction: 12 }
  });

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.1;
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.001;
  });

  return (
    <animated.mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[0.5, 0.5]} />
      <meshStandardMaterial
        color="#78350f"
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </animated.mesh>
  );
}