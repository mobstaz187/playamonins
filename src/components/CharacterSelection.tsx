import React, { useState } from 'react';
import AnimatedPage from './AnimatedPage';
import ParticlesBackground from './ParticlesBackground';

interface Character {
  id: number;
  name: string;
  description: string;
  image: string;
  video: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "AKAI TSUKI",
    description: 'Guardian of the Blood Moon, wielding dark magic that grows stronger as night falls. Can sacrifice health for powerful abilities.',
    image: './Characters/Akai Tsuki.png',
    video: './Characters/Akai Tsuki.mp4'
  },
  {
    id: 2,
    name: "CATTO",
    description: 'A mystical feline sage with the power to heal allies and predict enemy movements. Masters both defensive and supportive tactics.',
    image: './Characters/Catto.png',
    video: './Characters/Catto.mp4'
  },
  {
    id: 3,
    name: "COOROGI",
    description: 'An agile insectoid warrior skilled in stealth and precision strikes. Can bypass enemy defenses with lightning-fast movements.',
    image: './Characters/Coorogi.png',
    video: './Characters/Coorogi.mp4'
  },
  {
    id: 4,
    name: "GOPEGI",
    description: 'A strategic mastermind who can reshape the battlefield. Specializes in creating opportunities and controlling enemy movement.',
    image: './Characters/Gopegi.png',
    video: './Characters/Gopegi.mp4'
  },
  {
    id: 5,
    name: "GOTSU",
    description: 'A battle-hardened warrior with unmatched strength. Specializes in breaking through enemy lines and disrupting formations.',
    image: './Characters/Gotsu.png',
    video: './Characters/Gotsu.mp4'
  },
  {
    id: 6,
    name: "HORICHI",
    description: 'A master of ancient martial arts who channels chi energy. Can chain together devastating combo attacks.',
    image: './Characters/Horichi.png',
    video: './Characters/Horichi.mp4'
  },
  {
    id: 7,
    name: "KANOPIO",
    description: 'A mischievous trickster with mastery over illusions. Can create duplicates and confuse enemies with phantom images.',
    image: './Characters/Kanopio.png',
    video: './Characters/Kanopio.mp4'
  },
  {
    id: 8,
    name: "KICHI",
    description: 'A legendary warrior fox with mastery over fire elements. Known for quick, devastating attacks that can turn the tide of battle in an instant.',
    image: './Characters/Kichi.png',
    video: './Characters/Kichi.mp4'
  },
  {
    id: 9,
    name: "KUMAMO",
    description: 'An ancient bear spirit with dominion over the elements. Commands respect through both wisdom and raw power.',
    image: './Characters/Kumamo.png',
    video: './Characters/Kumamo.mp4'
  },
  {
    id: 10,
    name: "RATIEZA",
    description: 'An ancient dragon spirit in feline form. Possesses the ability to manipulate cosmic energies and create dimensional rifts.',
    image: './Characters/Ratieza.png',
    video: './Characters/Ratieza.mp4'
  },
  {
    id: 11,
    name: "REZA",
    description: 'A swift assassin who moves like shadows. Excels at single-target elimination and strategic positioning.',
    image: './Characters/Reza.png',
    video: './Characters/Reza.mp4'
  },
  {
    id: 12,
    name: "SARUFFY",
    description: 'A cheerful adventurer with the power to harness nature\'s energy. Their presence boosts the morale of all allied cards.',
    image: './Characters/Saruffy.png',
    video: './Characters/Saruffy.mp4'
  },
  {
    id: 13,
    name: "SUKUSA",
    description: 'A mystical enchanter who weaves powerful spells. Can control the battlefield through area denial and status effects.',
    image: './Characters/Sukusa.png',
    video: './Characters/Sukusa.mp4'
  },
  {
    id: 14,
    name: "TOGUNE",
    description: 'A mysterious shapeshifter with the ability to mimic any creature\'s form and abilities. Masters the art of deception and adaptability.',
    image: './Characters/Togune.png',
    video: './Characters/Togune.mp4'
  },
  {
    id: 15,
    name: "TORO",
    description: 'A mighty guardian with impenetrable defenses. Specializes in protecting allies and absorbing devastating blows.',
    image: './Characters/Toro.png',
    video: './Characters/Toro.mp4'
  }
];

const CharacterSelection: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <AnimatedPage>
      <div className="min-h-screen relative overflow-hidden">
        <img 
          src="./logo-default-animon.png"
          alt="Default Animon Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${selectedCharacter ? 'opacity-0' : 'opacity-100'}`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent backdrop-blur-sm" />
        
        {!selectedCharacter && <ParticlesBackground />}

        <div className={`absolute inset-0 transition-opacity duration-1000 ${selectedCharacter ? 'opacity-100' : 'opacity-0'}`}>
          {selectedCharacter && (
            <video
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              src={selectedCharacter.video}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
            />
          )}
        </div>

        <div className="absolute left-32 top-48 z-10">
          <div className="grid grid-cols-3 gap-3">
            {characters.map(character => (
              <button
                key={character.id}
                onClick={() => {
                  setIsVideoLoaded(false);
                  setSelectedCharacter(character);
                }}
                className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110
                  ${selectedCharacter?.id === character.id 
                    ? 'ring-2 ring-white/50 scale-110' 
                    : 'opacity-70 hover:opacity-100'}`}
              >
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {selectedCharacter && (
          <div className="absolute top-24 right-12 z-10">
            <div className="bg-[#4a90e2]/30 backdrop-blur-sm rounded-lg p-6 w-[500px]">
              <div className="space-y-4">
                <h1 className="text-[72px] font-bold text-white leading-none tracking-wider"
                    style={{
                      fontFamily: "'Pokemon Solid', sans-serif",
                      textShadow: '2px 2px 0 #2563eb, -2px -2px 0 #2563eb, 2px -2px 0 #2563eb, -2px 2px 0 #2563eb'
                    }}>
                  {selectedCharacter.name}
                </h1>
                <p className="text-white/90 text-sm leading-relaxed">
                  {selectedCharacter.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
};

export default CharacterSelection;