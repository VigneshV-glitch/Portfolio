import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import workerLogo from '../assets/images/Worker_LOGO.png';
import { EDITORIAL_EASE } from './MotionPrimitives';

interface PageLoaderProps {
  isVisible: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="page-loader"
          role="status"
          aria-live="polite"
          aria-label="Crafting..."
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: EDITORIAL_EASE } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0D0E] select-none"
        >
          {/* Subtle ambient indigo glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute w-56 h-56 rounded-full bg-indigo-600/15 blur-[90px]"
          />

          <div className="relative flex flex-col items-center gap-5">
            {/* 3D Perspective container for horizontal Y-axis spin */}
            <div style={{ perspective: '900px' }}>
              <motion.img
                src={workerLogo}
                alt="Vignesh V Logo"
                animate={{ rotateY: [0, 360] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_24px_rgba(79,57,246,0.35)]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
              className="text-xs sm:text-sm font-mono font-medium tracking-[0.22em] text-indigo-300"
            >
              Crafting...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
