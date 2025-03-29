import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-[500px] glass-effect p-4"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 text-white/70 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="pokemon-hollow text-lg mb-4 pokemon-glow text-center">COMING SOON</h2>

            <div className="w-full rounded-lg overflow-hidden flex justify-center">
              <video
                src="./SayHelloToGosu.mp4"
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="mt-4 text-center text-white/70 text-sm">
              This feature will be available in a future update. Stay tuned!
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonPopup;