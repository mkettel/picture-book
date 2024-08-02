import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  return (
    <>
      <Float 
        rotation-x={-Math.PI / 4.0} // tilt the book a bit
        floatIntensity={0.6}
        speed={0.9}
        rotationIntensity={0.1}
      >
        <Book />
      </Float>
      <OrbitControls minDistance={4.5} maxDistance={4.5} minAzimuthAngle={-0.3} maxAzimuthAngle={0.3} minPolarAngle={0.9} maxPolarAngle={1.7} />
      <Environment preset="forest" environmentIntensity={0.46}></Environment>
      <directionalLight
        position={[1, 4, 2]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
