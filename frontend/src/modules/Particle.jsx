import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("Initializing particles...");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded", container);
  };

  return (
    <>
      {init && (
        <div className="particle-container">
          <Particles
            className="particles"
            particlesLoaded={particlesLoaded}
            options={{
              autoPlay: true,
              fpsLimit: 150,
              detectRetina: true,
              fullScreen: { enable: false }, 
              interactivity: {
                detectsOn: "window",
                events: {
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    links: { opacity: 1 },
                  },
                  push: { quantity: 2 },
                  repulse: { distance: 100, duration: 0.7 },
                },
              },
              particles: {
                color: { value: "#ffffff" },
                links: {
                  color: "#ffffff",
                  distance: 100,
                  enable: true,
                  opacity: 0.9,
                  width: 2.5,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "out" },
                  random: false,
                  speed: 3.0,
                  straight: false,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 100,
                },
                opacity: { value: 0.9 },
                shape: { type: "polygon" },
                size: { value: { min: 1, max: 4 } },
              },
              background: {
                color: { value: "#2b5482" },
              },
              motion: {
                reduce: { factor: 4, value: true },
              },
            }}
          />
        </div>
      )}
    </>
  );
}
