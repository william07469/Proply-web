"use client";
import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import heroSite from "@/assets/hero-site.webp";

function MacBookModel({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/macbook.gltf");

  // Apply screen texture to the screen mesh
  useEffect(() => {
    const texture = new THREE.TextureLoader().load(heroSite);
    texture.flipY = false;
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const name = child.name.toLowerCase();
        // Target screen/display meshes
        if (
          name.includes("screen") ||
          name.includes("display") ||
          name.includes("monitor") ||
          name.includes("lcd") ||
          name.includes("bcjq") ||
          child.name === "BcjQsesUEBYnKoM_0"
        ) {
          child.material = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.1,
            metalness: 0.0,
          });
        }
      }
    });
  }, [scene, heroSite]);

  // Smooth mouse-driven rotation
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = mouseX * 0.4;
    const targetX = -mouseY * 0.15;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      delta * 3,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      delta * 3,
    );
  });

  return (
    <group ref={groupRef} dispose={null}>
      <primitive
        object={scene}
        scale={0.012}
        position={[0, -0.8, 0]}
      />
    </group>
  );
}

function CameraSetup() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0.5, 4);
    camera.lookAt(0, -0.2, 0);
  }, [camera]);
  return null;
}

export function MacBook3D() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 2);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* Skeleton while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-72 animate-pulse border border-foreground/10 bg-surface" />
        </div>
      )}
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setIsLoaded(true)}
        style={{ background: "transparent" }}
      >
        <CameraSetup />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
        />
        <directionalLight position={[-5, 3, -2]} intensity={0.4} />
        <pointLight position={[0, 2, 3]} intensity={0.6} color="#ff8c42" />

        <Suspense fallback={null}>
          <MacBookModel mouseX={mouseX} mouseY={mouseY} />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.4}
            scale={8}
            blur={2}
            far={2}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload
useGLTF.preload("/macbook.gltf");
