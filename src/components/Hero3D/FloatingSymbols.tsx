import React from 'react';
import { useSpring, animated } from '@react-spring/three';
import { Text } from '@react-three/drei';
import { use3DAnimation } from '../../utils/hooks/use3DAnimation';

export default function FloatingSymbols() {
  const meshRef = use3DAnimation();
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { mass: 1, tension: 170, friction: 8 }
  });

  const symbols = ['ॐ', '☘', '🌿', '⚕', '🍃', '🌱'];

  return (
    <group>
      {symbols.map((symbol, index) => (
        <animated.group
          key={index}
          position={[
            Math.sin(index * (Math.PI / 3)) * 4,
            Math.cos(index * (Math.PI / 3)) * 4,
            0
          ]}
          scale={scale}
        >
          <Text
            ref={meshRef}
            fontSize={1.2}
            color="#fcd34d"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.05}
            outlineColor="#78350f"
          >
            {symbol}
          </Text>
        </animated.group>
      ))}
    </group>
  );
}