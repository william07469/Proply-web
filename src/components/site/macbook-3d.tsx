"use client";
import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import heroSite from "@/assets/hero-site.webp";

// ─── Scroll tracker ──────────────────────────────────────────────────────────
// Reads scroll progress (0–1) relative to the document height.
// Written to a ref so reads inside useFrame never cause re-renders.
function useScrollProgress() {
  const progress = useRef(0);   // current smooth value (lerped)
  const raw      = useRef(0);   // raw scroll 0-1

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      raw.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { progress, raw };
}

// ─── MacBook model ───────────────────────────────────────────────────────────
function MacBookModel({ scrollRef }: { scrollRef: { progress: React.MutableRefObject<number>; raw: React.MutableRefObject<number> } }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/macbook.gltf");

  // Apply hero screenshot to screen mesh — once only
  useEffect(() => {
    const texture = new THREE.TextureLoader().load(heroSite);
    texture.flipY = false;
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const name = child.name.toLowerCase();
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
  }, [scene]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Smooth-lerp the progress value — cinematic, never snappy
    // Lower factor = slower/smoother catch-up
    const lerpFactor = 1 - Math.pow(0.04, delta); // ~4% per frame @ 60fps
    scrollRef.progress.current = THREE.MathUtils.lerp(
      scrollRef.progress.current,
      scrollRef.raw.current,
      lerpFactor,
    );

    const p = scrollRef.progress.current;

    // Y rotation: full 2π over the entire scroll range
    // Starts at a pleasant -15° intro angle, rotates forward as user scrolls
    const targetY = -0.26 + p * Math.PI * 2;

    // X rotation: subtle wave — slight forward tilt at mid-scroll for depth
    // sin curve so it gently rocks forward then back
    const targetX = Math.sin(p * Math.PI) * 0.18 - 0.05;

    // Directly assign (lerp already applied to progress, no double-lerp needed)
    groupRef.current.rotation.y = targetY;
    groupRef.current.rotation.x = targetX;
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

// ─── Camera ──────────────────────────────────────────────────────────────────
function CameraSetup() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0.5, 4);
    camera.lookAt(0, -0.2, 0);
  }, [camera]);
  return null;
}

// ─── Public component ────────────────────────────────────────────────────────
export function MacBook3D() {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useScrollProgress();

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
        // frameloop="always" ensures scroll updates are picked up every frame
        frameloop="always"
      >
        <CameraSetup />

        {/* Lighting — unchanged from original */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]}  intensity={1.2} castShadow />
        <directionalLight position={[-5, 3, -2]} intensity={0.4} />
        <pointLight position={[0, 2, 3]} intensity={0.6} color="#ff8c42" />

        <Suspense fallback={null}>
          <MacBookModel scrollRef={scrollRef} />
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

// Preload GLTF asset immediately
useGLTF.preload("/macbook.gltf");
