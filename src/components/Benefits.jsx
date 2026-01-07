import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, Scan } from 'lucide-react';
import Reveal from './Reveal';
import SpotlightTitle from './SpotlightTitle';

const Benefits = () => {
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

    const cards = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Rapidez Extrema",
            description: "Tratamentos otimizados para quem não tem tempo a perder. Resultados visíveis em tempo recorde."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Segurança Total",
            description: "Protocolos de esterilização hospitalar e procedimentos minimamente invasivos. Zero dor."
        },
        {
            icon: <Scan className="w-8 h-8" />,
            title: "Tecnologia 3D",
            description: "Escaneamento digital e planejamento virtual do seu sorriso antes mesmo de começar."
        }
    ];

    return (
        <section ref={sectionRef} className="relative h-auto md:h-[200vh] bg-slate-50 z-20">
            <div className="sticky md:sticky top-0 md:top-0 relative md:h-screen flex items-center overflow-visible md:overflow-hidden py-12 md:py-0">
                <motion.div style={isMobile ? {} : { opacity, scale, filter }} className="container mx-auto px-6">
                    <Reveal>
                        <div className="text-center mb-16">
                            <SpotlightTitle
                                className="text-3xl md:text-5xl font-bold mb-6 block mx-auto w-fit"
                                baseClassName="text-blue-900"
                                overlayClassName="text-blue-500"
                            >
                                Por que Luminous?
                            </SpotlightTitle>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Unimos a precisão da tecnologia com a arte da odontologia estética.</p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cards.map((card, index) => (
                            <Reveal key={index} delay={index * 0.2}>
                                <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 text-blue-700 group-hover:text-white">
                                        <div className="transition-colors duration-300">
                                            {card.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{card.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Benefits;
