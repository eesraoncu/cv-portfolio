import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

    return (
        <motion.div
            style={{ scaleX, transformOrigin: '0%' }}
            className="fixed top-0 left-0 right-0 h-0.5 bg-blue-600 z-[200]"
        />
    );
};

export default ScrollProgressBar;
