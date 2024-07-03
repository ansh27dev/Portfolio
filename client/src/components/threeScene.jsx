import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const ThreeScene = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 50, 100], fov: 60 }}
        style={{ height: "50vh" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model url="/models/pc/scene.gltf" />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={5} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
