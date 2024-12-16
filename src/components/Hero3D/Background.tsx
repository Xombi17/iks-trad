import React from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Background() {
  const { scene } = useThree();
  
  React.useEffect(() => {
    const texture = new THREE.TextureLoader().load(
      'https://cdn.pixabay.com/photo/2023/12/21/05/55/black-8461280_640.jpg'
    );
    
    const geometry = new THREE.PlaneGeometry(20, 20);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      opacity: 0.2,
      transparent: true
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -5;
    scene.add(mesh);
    
    return () => {
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, [scene]);

  return null;
}