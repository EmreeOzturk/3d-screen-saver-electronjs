import React from "react";
import Scene from "./scene.jsx";
import { Canvas } from "@react-three/fiber";
const App = () => {
  return (
    <Canvas>
      <Scene />;
    </Canvas>
  );
};

export default App;
