"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import type { Mesh } from "three";

// Consider renaming Duck to TharModel if it makes more sense
function Duck() {
  const { scene } = useGLTF("/mthar.glb"); // Make SURE thar.glb is in /public
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Keep rotation for now
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      // --- MODIFIED SCALE --- (Try 1 or 0.5 or smaller if needed)
      scale={1}
      // --- MODIFIED POSITION (Optional - try 0,0,0 if needed) ---
      position={[0, -1, 0]}
    />
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
        <OrbitControls enableZoom={true} />{" "}
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
