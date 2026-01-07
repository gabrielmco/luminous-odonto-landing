import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';
import SpotlightTitle from './SpotlightTitle';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
    const blur = useTransform(scrollYProgress, [0, 0.8], ["0px", "10px"]);
    const filter = useTransform(blur, (v) => `blur(${v})`);

    const handleMouseMove = (e) => {
        // No-op or remove if not needed elsewhere
    };

    return (
        <div ref={containerRef} className="relative h-[200vh]">
            <div className="sticky top-0 h-[100dvh] overflow-hidden bg-white">
                <motion.div
                    style={{ opacity, scale, filter }}
                    className="w-full h-full flex items-start pt-40 md:items-center md:pt-0 justify-center relative container mx-auto px-6"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-8 z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="text-blue-700 font-bold tracking-widest text-xs md:text-sm uppercase mb-4">
                                    Fórmula 1 da Odontologia
                                </h2>

                                <SpotlightTitle
                                    className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight"
                                    baseClassName="text-slate-900"
                                    overlayContent={
                                        <>
                                            <span className="text-blue-600">Sorriso de</span>{" "}
                                            <span className="text-slate-900">Alta Performance</span>
                                        </>
                                    }
                                >
                                    Sorriso de <span className="text-blue-700">Alta Performance</span>
                                </SpotlightTitle>

                                <p className="text-lg text-slate-600 mt-6 max-w-lg">
                                    Tecnologia de ponta, velocidade e precisão milimétrica. Experimente o novo padrão em tratamentos odontológicos.
                                </p>

                                <div className="mt-8 flex gap-4">
                                    <MagneticButton onClick={() => window.location.href = '#contact'}>
                                        Agendar Avaliação
                                    </MagneticButton>
                                    <MagneticButton className="!bg-white !text-blue-700 border border-blue-200 shadow-none hover:bg-blue-50">
                                        Conheça a Tecnologia
                                    </MagneticButton>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative h-full min-h-[500px] flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-200"
                            >
                                {/* Placeholder image from unsplash source requiring no auth */}
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                                    alt="Dentista Sorrindo"
                                    className="w-full h-full object-cover"
                                />

                                {/* Glass overlay details */}
                                <div className="absolute bottom-6 left-6 glass p-4 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <p className="text-sm font-semibold text-slate-800">Clínica Aberta Agora</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-[100px] -z-10 opacity-50" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
