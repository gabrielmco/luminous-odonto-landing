import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';
import Card3D from './Card3D';
import SpotlightTitle from './SpotlightTitle';

const Treatments = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0.9]);
    const blur = useTransform(scrollYProgress, [0.7, 1], ["0px", "10px"]);
    const filter = useTransform(blur, (v) => `blur(${v})`);

    const treatments = [
        {
            title: "Implantes Suíços",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
            desc: "Reabilitação oral completa com materiais de classe mundial."
        },
        {
            title: "Lentes de Contato",
            image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop",
            desc: "Transformação do sorriso com facetas ultrafinas de porcelana."
        },
        {
            title: "Invisalign",
            image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
            desc: "Ortodontia invisível. Alinhamento perfeito sem metais."
        },
        {
            title: "Clareamento Laser",
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf4722e51?q=80&w=1974&auto=format&fit=crop",
            desc: "Até 4 tons mais branco em uma única sessão de 45 minutos."
        }
    ];

    return (
        <section ref={sectionRef} className="relative h-auto md:h-[200vh] bg-white z-20">
            <div className="sticky md:sticky top-0 md:top-0 relative md:h-screen flex items-center overflow-visible md:overflow-hidden py-12 md:py-0">
                <motion.div style={isMobile ? {} : { opacity, scale, filter }} className="container mx-auto px-6">
                    <Reveal>
                        <div className="flex flex-col items-center text-center mb-16">
                            <SpotlightTitle
                                className="text-4xl md:text-5xl font-bold mb-4 block w-fit"
                                baseClassName="text-blue-900"
                                overlayClassName="text-blue-500"
                            >
                                Nossas Especialidades
                            </SpotlightTitle>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Tecnologia de ponta para transformar seu sorriso com precisão e estética.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {treatments.map((item, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <Card3D title={item.title} image={item.image} desc={item.desc} />
                            </Reveal>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Treatments;
