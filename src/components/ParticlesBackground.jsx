import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

export default function ParticlesBackground() {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async container => {
        await console.log(container)
    }, [])
    
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            window.location.reload();
        });
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: isDarkMode ? "#1a1a1a" : "#ffffff"
                    }
                },
                fpsLimit: 120,
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                particles: {
                    color: {
                        value: isDarkMode ? "#ffffff" : "#364459",
                    },
                    links: {
                        color: isDarkMode ? "#ffffff" : "#364459",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
            }}
        ></Particles>
    )
}