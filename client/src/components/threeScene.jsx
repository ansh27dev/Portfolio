import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import Model from "./model";

const ThreeScene = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 50, 100], fov: 60 }}
        style={{ height: "50vh" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Model />
        <OrbitControls autoRotate autoRotateSpeed={5} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
