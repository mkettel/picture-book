import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";

function App() {
  return (
    <>
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [-0.1, 0.9, 4.2], fov: 45 }}>
        <group position-y={0.2}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default App;
