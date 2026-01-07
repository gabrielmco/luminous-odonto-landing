import { useRef, useState, useEffect } from 'react';

const SpotlightTitle = ({
    children,
    className = "",
    overlayContent,
    baseClassName = "text-slate-900",
    overlayClassName = "text-blue-700 drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]"
}) => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const maskX = useRef(0);
    const maskY = useRef(0);
    const rafId = useRef(null);

    useEffect(() => {
        const animate = () => {
            // Lerp for smooth "Apple-like" delay
            maskX.current += (mouseX.current - maskX.current) * 0.1;
            maskY.current += (mouseY.current - maskY.current) * 0.1;

            if (containerRef.current) {
                containerRef.current.style.setProperty('--mask-x', `${maskX.current}px`);
                containerRef.current.style.setProperty('--mask-y', `${maskY.current}px`);
            }
            rafId.current = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(rafId.current);
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.current = e.clientX - rect.left;
        mouseY.current = e.clientY - rect.top;
    };

    return (
        <div
            ref={containerRef}
            className={`relative cursor-default select-none inline-block ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Layer 1: Base (Visible by default) */}
            <h2 className={`relative z-10 ${baseClassName}`}>
                {children}
            </h2>

            {/* Layer 2: Overlay (Revealed by Mask) */}
            <h2
                className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 ${overlayClassName}`}
                style={{
                    opacity: isHovered ? 1 : 0,
                    WebkitMaskImage: `radial-gradient(circle 120px at var(--mask-x) var(--mask-y), black 20%, transparent 100%)`,
                    maskImage: `radial-gradient(circle 120px at var(--mask-x) var(--mask-y), black 20%, transparent 100%)`
                }}
            >
                {overlayContent || children}
            </h2>
        </div>
    );
};

export default SpotlightTitle;
