import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TogunePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TogunePopup: React.FC<TogunePopupProps> = ({ isOpen, onClose }) => {
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

            <div className="space-y-4">
              <h2 className="pokemon-hollow text-2xl pokemon-glow text-center">TOGUNE</h2>
              
              <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
                <video
                  src="./Characters/Togune.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              <div className="space-y-2">
                <p className="text-white/90 text-sm leading-relaxed">
                  A mysterious shapeshifter with the ability to mimic any creature's form and abilities. 
                  Masters the art of deception and adaptability.
                </p>
                
                <div className="space-y-1">
                  <h3 className="pokemon-hollow text-sm pokemon-glow">ABILITIES</h3>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>• Mimic Form: Copy the appearance and abilities of any character</li>
                    <li>• Shadow Step: Move undetected through the shadows</li>
                    <li>• Deceptive Strike: Deal bonus damage while disguised</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TogunePopup;