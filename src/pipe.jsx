import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const Pipe = () => {
  return (
    <>
      <mesh>
        <cylinderGeometry args={[1, 1, 1, 20]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </>
  );
};

export default Pipe;
