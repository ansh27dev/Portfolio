import React from "react";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  var url = "/models/pc/scene.gltf";

  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

export default Model;
