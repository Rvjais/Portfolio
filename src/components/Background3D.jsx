import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import './Background3D.css';

function FloatingSphere({ position, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.3;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        wireframe
      />
    </Sphere>
  );
}

function FloatingRing({ position, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3 * speed;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5 * speed;
    meshRef.current.position.y = position[1] + Math.cos(state.clock.getElapsedTime() * speed * 0.8) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.5, 0.15, 16, 50]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        wireframe
      />
    </mesh>
  );
}

const Background3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="background-3d">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />

        {/* Floating shapes */}
        <FloatingSphere position={[-3, 1, -2]} color="#6366f1" speed={0.8} />
        <FloatingSphere position={[3, -1, -3]} color="#ec4899" speed={1.2} />
        <FloatingSphere position={[0, 2, -4]} color="#8b5cf6" speed={1} />

        <FloatingRing position={[-2, -2, -2]} color="#10b981" speed={0.6} />
        <FloatingRing position={[2, 1, -3]} color="#f59e0b" speed={0.9} />

        {/* Only enable OrbitControls on desktop to prevent scroll interference on mobile */}
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Background3D;
