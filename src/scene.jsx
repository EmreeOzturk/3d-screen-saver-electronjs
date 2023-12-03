import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React from "react";
import Pipe from "./pipe.jsx";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={45} position={[0, 0, 20]} />
      <directionalLight intensity={0.5} position={[1, 1, 11]} />
      <ambientLight intensity={0.5} />
      <Pipe />
    </>
  );
};

export default Scene;
