"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import type { Mesh } from "three";

function Duck() {
  const { scene } = useGLTF("/thar_4x4.glb");
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive ref={meshRef} object={scene} scale={0.5} position={[0, -1, 0]} />
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[70vh]">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Duck />
        <OrbitControls enableZoom={true} /> <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
