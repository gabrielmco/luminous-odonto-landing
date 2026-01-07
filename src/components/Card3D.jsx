import React, { useRef, useEffect } from 'react';

const Card3D = ({ title, image, desc }) => {
    const cardWrapRef = useRef(null);
    const cardRef = useRef(null);
    const cardBgRef = useRef(null);

    // Refs for animation state
    const widthRef = useRef(0);
    const heightRef = useRef(0);
    const mouseXRef = useRef(0);
    const mouseYRef = useRef(0);
    const rafIdRef = useRef(null);

    // Lerp values (Current and Target)
    const targetXRef = useRef(0);
    const targetYRef = useRef(0);
    const currentXRef = useRef(0);
    const currentYRef = useRef(0);

    const LERP_FACTOR = 0.1; // Lower = smoother/slower, Higher = snappier

    useEffect(() => {
        const handleResize = () => {
            if (cardWrapRef.current) {
                widthRef.current = cardWrapRef.current.offsetWidth;
                heightRef.current = cardWrapRef.current.offsetHeight;
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Animation Loop
        const animate = () => {
            // Linear Interpolation: current = current + (target - current) * factor
            currentXRef.current += (targetXRef.current - currentXRef.current) * LERP_FACTOR;
            currentYRef.current += (targetYRef.current - currentYRef.current) * LERP_FACTOR;

            if (cardRef.current && cardBgRef.current) {
                // Apply rotation
                const rX = currentXRef.current * 30;
                const rY = currentYRef.current * -30;
                cardRef.current.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;

                // Apply parallax to bg
                const tX = currentXRef.current * -40;
                const tY = currentYRef.current * -40;
                cardBgRef.current.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
            }

            rafIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(rafIdRef.current);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!cardWrapRef.current) return;

        const rect = cardWrapRef.current.getBoundingClientRect();
        const cursorX = e.clientX - rect.left - widthRef.current / 2;
        const cursorY = e.clientY - rect.top - heightRef.current / 2;

        // Calculate target percentage (-0.5 to 0.5 approx)
        targetXRef.current = widthRef.current > 0 ? cursorX / widthRef.current : 0;
        targetYRef.current = heightRef.current > 0 ? cursorY / heightRef.current : 0;
    };

    const handleMouseEnter = () => {
        // No special action needed for smooth entry with lerp
    };

    const handleMouseLeave = () => {
        // Reset target to 0, lerp will handle the smooth return
        targetXRef.current = 0;
        targetYRef.current = 0;
    };

    return (
        <div
            className="group card-wrap relative flex-none w-full h-[400px] perspective-800 transform-style-3d cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cardWrapRef}
        >
            <div
                className="card relative w-full h-full bg-[#333] overflow-hidden rounded-[10px] shadow-2xl"
                ref={cardRef}
            >
                <div
                    className="card-bg absolute -top-[20px] -left-[20px] w-[calc(100%+40px)] h-[calc(100%+40px)] p-[20px] bg-no-repeat bg-center bg-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80 pointer-events-none"
                    style={{ backgroundImage: `url(${image})` }}
                    ref={cardBgRef}
                ></div>

                <div className="card-info p-[20px] absolute bottom-0 text-white z-10 w-full flex flex-col justify-end pb-8 transform transition-transform duration-500 translate-y-[15px] group-hover:translate-y-0">
                    {/* Title and Desc move together as a unit */}
                    <h1 className="text-[32px] font-bold text-shadow-lg font-serif mb-2 relative z-10">
                        {title}
                    </h1>

                    <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                        <p className="overflow-hidden text-shadow-sm relative z-10 text-sm leading-relaxed opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                            <span className="block pt-2">
                                {desc}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-0"></div>
            </div>
            <style jsx>{`
        .perspective-800 {
          perspective: 800px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .card-wrap:hover .card {
          box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, rgba(255, 255, 255, 1) 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px;
        }
        .text-shadow-lg {
            text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
        }
        .text-shadow-sm {
            text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
        }
      `}</style>
        </div>
    );
};

export default Card3D;
