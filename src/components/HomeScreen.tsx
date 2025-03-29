import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from './AnimatedPage';
import ComingSoonPopup from './ComingSoonPopup';
import TogunePopup from './TogunePopup';

interface AnimonInfo {
  name: string;
  description: string;
}

const animonDescriptions: Record<string, AnimonInfo> = {
  'Ratiza': {
    name: 'RATIZA',
    description: 'A fierce warrior with exceptional combat abilities. Ratiza excels in close-quarters combat, using agility and precision to overwhelm opponents.'
  },
  'Reza': {
    name: 'REZA',
    description: 'A master tactician who controls the battlefield with calculated precision. Reza\'s strategic mind allows for complex maneuvers and team coordination.'
  },
  'Gotsu': {
    name: 'GOTSU',
    description: 'A powerful controller who manipulates the flow of battle. Gotsu\'s abilities create advantageous positions and deny enemy movement.'
  },
  'kumamo': {
    name: 'KUMAMO',
    description: 'A steadfast defender with impenetrable defenses. Kumamo specializes in area control and protecting allies.'
  },
  'Sukusa': {
    name: 'SUKUSA',
    description: 'An agile fighter who excels in rapid strikes and quick repositioning. Sukusa\'s mobility makes them unpredictable in combat.'
  },
  'Catto': {
    name: 'CATTO',
    description: 'A stealthy operative who gathers crucial intelligence. Catto\'s reconnaissance abilities provide valuable information to the team.'
  },
  'Gopegi': {
    name: 'GOPEGI',
    description: 'A strategic mastermind who can reshape the battlefield. Gopegi\'s control abilities create opportunities for the team.'
  },
  'Coorogi': {
    name: 'COOROGI',
    description: 'A defensive specialist who excels at holding positions. Coorogi\'s utility abilities secure objectives effectively.'
  },
  'Kichi': {
    name: 'KICHI',
    description: 'A dynamic fighter with explosive potential. Kichi\'s aggressive playstyle creates space for the team to operate.'
  }
};

const HomeScreen: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [selectedMode, setSelectedMode] = useState('story');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showTogunePopup, setShowTogunePopup] = useState(false);
  const [onlinePlayers] = useState(() => Math.floor(Math.random() * (37 - 23 + 1) + 23));
  
  const featuredVideos = [
    'Ratiza', 'Reza', 'Gotsu', 'kumamo', 'Sukusa',
    'Catto', 'Gopegi', 'Coorogi', 'Kichi'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % featuredVideos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleModeClick = (mode: string) => {
    setSelectedMode(mode);
    setShowComingSoon(true);
  };

  return (
    <AnimatedPage>
      <div className="fixed inset-0 w-full h-full">
        {/* Background */}
        <div className="fixed inset-0">
          <img
            src="./Splash/Gif-Animon.gif"
            alt="Animon Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent backdrop-blur-sm" />
        </div>

        {/* Top Navigation Bar */}
        <div className="fixed top-0 left-0 right-0 h-12 glass-effect px-4 flex items-center justify-between z-30">
          <motion.div className="relative" whileHover={{ scale: 1.05 }}>
            <img 
              src="./logo-default-animon.png" 
              alt="Animon Logo" 
              className="h-7 w-auto drop-shadow-lg"
            />
          </motion.div>

          <div className="flex items-center gap-6">
            <Link to="/characters" className="pokemon-text text-lg hover-scale">
              ANIMONS
            </Link>
          </div>
        </div>

        {/* New Release Banner */}
        <div className="fixed top-12 left-0 right-0 h-8 bg-gradient-to-r from-blue-600/20 to-transparent flex items-center px-4 z-20">
          <div className="flex items-center gap-2">
            <span className="pokemon-hollow text-xs pokemon-glow text-yellow-400">
              Togune is now available!
            </span>
            <button 
              onClick={() => setShowTogunePopup(true)}
              className="px-2 py-0.5 text-xs bg-yellow-400/20 text-yellow-400 rounded hover:bg-yellow-400/30 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="fixed top-20 bottom-8 left-0 right-0 flex gap-2 p-2">
          {/* Left Column */}
          <div className="w-56 space-y-2">
            {/* Event Available */}
            <div className="glass-effect p-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 animate-pulse rounded-full" />
                <div className="space-y-0.5">
                  <h3 className="pokemon-hollow text-sm pokemon-glow text-yellow-400">
                    EVENT AVAILABLE
                  </h3>
                  <p className="text-[10px] text-white/70">
                    Release coming in 3 days
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Reward */}
            <div className="glass-effect p-2 space-y-1.5">
              <div className="flex items-center justify-between">
                <h3 className="pokemon-hollow text-sm pokemon-glow">DAILY REWARD</h3>
              </div>
              <button className="w-full glass-effect rounded px-2 py-1 text-[10px] text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Claim Reward
              </button>
              <p className="text-[10px] text-white/50">Click to claim your daily reward!</p>
            </div>

            {/* Game Modes */}
            <div className="glass-effect p-2 space-y-1.5">
              <h3 className="pokemon-hollow text-sm pokemon-glow">GAME MODES</h3>
              <div className="space-y-1">
                <button
                  onClick={() => handleModeClick('story')}
                  className={`w-full p-1.5 rounded-lg flex items-center gap-2 transition-all duration-300
                    ${selectedMode === 'story' 
                      ? 'neon-border bg-white/20' 
                      : 'glass-effect hover:bg-white/10'}`}
                >
                  <div className="w-1.5 h-1.5 rounded-none bg-white pixelated-circle" />
                  <div className="text-left">
                    <div className="pokemon-hollow text-xs pokemon-glow">Story Mode</div>
                    <div className="text-[10px] text-white/70">0/5 Chapters</div>
                  </div>
                </button>

                <button
                  onClick={() => handleModeClick('battle')}
                  className={`w-full p-1.5 rounded-lg flex items-center gap-2 transition-all duration-300
                    ${selectedMode === 'battle' 
                      ? 'neon-border bg-white/20' 
                      : 'glass-effect hover:bg-white/10'}`}
                >
                  <div className="w-1.5 h-1.5 rounded-none bg-white pixelated-circle" />
                  <div className="text-left">
                    <div className="pokemon-hollow text-xs pokemon-glow">Battle Arena</div>
                    <div className="text-[10px] text-white/70">0/10 Matches</div>
                  </div>
                </button>

                <button
                  onClick={() => handleModeClick('alliance')}
                  className={`w-full p-1.5 rounded-lg flex items-center gap-2 transition-all duration-300
                    ${selectedMode === 'alliance' 
                      ? 'neon-border bg-white/20' 
                      : 'glass-effect hover:bg-white/10'}`}
                >
                  <div className="w-1.5 h-1.5 rounded-none bg-white pixelated-circle" />
                  <div className="text-left">
                    <div className="pokemon-hollow text-xs pokemon-glow">Alliance</div>
                    <div className="text-[10px] text-white/70">Team Battles</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="glass-effect p-2 space-y-1.5">
              <h3 className="pokemon-hollow text-sm pokemon-glow">STATS</h3>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Total Animons</span>
                  <span className="pokemon-hollow text-[10px] pokemon-glow">14</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Online Players</span>
                  <span className="pokemon-hollow text-[10px] pokemon-glow">{onlinePlayers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Achievement Points</span>
                  <span className="pokemon-hollow text-[10px] pokemon-glow">0</span>
                </div>
              </div>
            </div>

            {/* Daily Missions */}
            <div className="glass-effect p-2 space-y-1.5">
              <div className="flex items-center justify-between">
                <h3 className="pokemon-hollow text-sm pokemon-glow">DAILY MISSIONS</h3>
                <span className="text-[10px] text-white/70">0/2</span>
              </div>
              <div className="space-y-1">
                <div className="glass-effect rounded p-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/70">Win Battles</span>
                    <span className="text-[10px] pokemon-hollow">0/3</span>
                  </div>
                </div>
                <div className="glass-effect rounded p-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/70">Complete Chapter</span>
                    <span className="text-[10px] pokemon-hollow">0/1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex-1 glass-effect overflow-hidden">
            {/* Featured Collection Title */}
            <div className="p-2 border-b border-white/10">
              <div className="flex items-center justify-center">
                <h2 className="pokemon-hollow text-sm pokemon-glow">FEATURED COLLECTION</h2>
              </div>
            </div>

            {/* Featured Content */}
            <div className="relative w-full h-[calc(100%-2.5rem)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <video
                    src={`./Featured/${featuredVideos[currentVideo]}.mp4`}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="pokemon-hollow text-lg pokemon-glow mb-2">
                        {animonDescriptions[featuredVideos[currentVideo]]?.name || featuredVideos[currentVideo]}
                      </h3>
                      <p className="text-sm text-white/80">
                        {animonDescriptions[featuredVideos[currentVideo]]?.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {featuredVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${currentVideo === index 
                        ? 'bg-white w-4' 
                        : 'bg-white/50 hover:bg-white/70'}`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <button
                onClick={() => setCurrentVideo(prev => 
                  prev === 0 ? featuredVideos.length - 1 : prev - 1
                )}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 
                  hover:bg-black/70 transition-colors flex items-center justify-center"
                aria-label="Previous video"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentVideo(prev => 
                  (prev + 1) % featuredVideos.length
                )}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 
                  hover:bg-black/70 transition-colors flex items-center justify-center"
                aria-label="Next video"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 h-6 glass-effect px-4 flex justify-start items-center">
          <div className="pokemon-hollow text-[10px]">© 2025 Animon. The Ultimate Battle Arena. All rights reserved.</div>
        </div>

        {/* Patch Notes */}
        <div className="fixed bottom-6 left-0 right-0 h-6 glass-effect px-4 flex items-center justify-between">
          <span className="text-[10px] text-white/70">PATCH NOTES</span>
          <span className="text-[10px] text-white/70">NEW</span>
        </div>

        {/* Popups */}
        <ComingSoonPopup 
          isOpen={showComingSoon} 
          onClose={() => setShowComingSoon(false)} 
        />
        <TogunePopup 
          isOpen={showTogunePopup}
          onClose={() => setShowTogunePopup(false)}
        />
      </div>
    </AnimatedPage>
  );
};

export default HomeScreen;