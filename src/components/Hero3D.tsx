import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

function DataNodes() {
  const group = useRef<THREE.Group>(null);
  
  // Generate random nodes
  const [nodes] = useState(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      temp.push(new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      ));
    }
    return temp;
  });

  // Generate lines between close nodes
  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 4) {
          temp.push([nodes[i], nodes[j]]);
        }
      }
    }
    return temp;
  }, [nodes]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.15, 16, 16]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} />
        </Sphere>
      ))}
      {lines.map((pts, i) => (
        <Line key={i} points={pts as [THREE.Vector3, THREE.Vector3]} color="#2563eb" lineWidth={1} transparent opacity={0.3} />
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] cursor-grab active:cursor-grabbing relative z-10">
      <Canvas camera={{ position: [0, 0, 18], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <DataNodes />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
