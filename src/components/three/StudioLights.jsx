import { Environment, Lightformer, SpotLight } from '@react-three/drei'
import React from 'react'


const StudioLights = () => {
    return (
        <group name="Studio Lights">
            <ambientLight intensity={0.4} />
            <directionalLight position={[0, 10, 10]} intensity={0.5} />
            <Environment preset="city" environmentIntensity={0.8} resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[-10, 5, -10]}
                        scale={10}
                        rotation={[0, Math.PI / 2, 0]}

                    />

                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[10, 0, 1]}
                        scale={10}
                        rotation={[0, Math.PI / 2, 0]}

                    />
                </group>
            </Environment>
            <SpotLight
                position={[-2, 10, 5]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.5}
            />
            <SpotLight
                position={[0, -25, 10]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.8}
            />

            <SpotLight
                position={[0, 15, 5]}
                angle={0.15}
                decay={0.1}
                intensity={Math.PI * 1}
            />

        </group>
    )
}

export default StudioLights;