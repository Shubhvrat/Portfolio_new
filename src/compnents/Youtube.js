import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function PersonAtComputer() {
  return (
    <>
      {/* Desk */}
      <mesh position={[0, -0.2, 0]} scale={[2, 0.15, 1.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="brown" />
      </mesh>

      {/* Monitor */}
      <mesh position={[0, 0.5, 0]} scale={[1.6, 1.2, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.5, 0.05]} scale={[1.5, 1, 0.05]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.1, 0.8]} scale={[1.4, 0.1, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>

      {/* Chair */}
      <mesh position={[0, -0.5, -0.5]} scale={[1, 0.8, 0.8]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="darkblue" />
      </mesh>

      {/* Person */}
      <mesh position={[0, 0, -0.6]} scale={[0.7, 0.7, 0.7]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="lightpink" />
      </mesh>
    </>
  );
}

function TechSavyAnimation() {
  return (
    <section id="tech-animation" className="relative h-96 md:h-120 bg-gray-900 text-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <PersonAtComputer />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}

export default TechSavyAnimation;
