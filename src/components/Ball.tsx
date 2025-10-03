"use client";

import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type BallProps = {
  text: string;
  position: [number, number, number];
  color?: string;
  radius?: number;
};

function createTextTexture(
  text: string,
  size = 512,
  bg = "transparent",
  textColor = "#000"
): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, size, size);

  // background circle (opcjonalne, dla czytelności)
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.arc(size / 2, size / 2, size * 1, 0, Math.PI * 2);
  ctx.fill();

  // text
  ctx.fillStyle = textColor;
  const fontSize = Math.floor(size / Math.max(10, text.length / 1.5));
  ctx.font = `${fontSize}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, size / 2, size / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  texture.anisotropy = 4;
  return texture;
}

export default function Ball({
  text,
  position,
  color = "#1565c0",
  radius = 0.9,
}: BallProps) {
  const mesh = React.useRef<THREE.Mesh>(null);
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null);

  // utwórz teksturę tylko na kliencie
  React.useEffect(() => {
    const tex = createTextTexture(text, 4048, "transparent", "#111");
    setTexture(tex);
  }, [text]);

  // animacja rotacji
  useFrame((_, delta) => {
    if (mesh.current) {
    //   mesh.current.rotation.y += delta * 0.25;
    //   mesh.current.rotation.x += delta * 0.05;
    }
  });

  if (!texture) return null; // SSR fallback, zanim tekstura powstanie

  return (
    <mesh 
        ref={mesh} 
        position={position}
        rotation={[0, -Math.PI / 2, 0]} // [x, y, z] w radianach
    >
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial map={texture} color={color} />
    </mesh>
  );
}
