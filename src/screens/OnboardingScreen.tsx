import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS, FONT_CLASSES, MOCK_HOBBIES } from '../constants';
import { Hobby } from '../types';
import { MapPin, Sparkles, ChevronRight } from 'lucide-react';

export default function OnboardingScreen() {
  const [selectedInterests, setSelectedInterests] = useState<Hobby[]>([]);
  const navigate = useNavigate();

  const toggleInterest = (hobby: Hobby) => {
    setSelectedInterests((prev) =>
      prev.some((h) => h.id === hobby.id)
        ? prev.filter((h) => h.id !== hobby.id)
        : [...prev, hobby]
    );
  };

  const handleProceed = () => {
    // In a real app, save interests and location, then navigate
    console.log('Selected Interests:', selectedInterests);
    // For now, just navigate to the feed
    navigate('/feed');
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-6 ${FONT_CLASSES.sans}`}
      style={{ backgroundColor: COLORS.lightBackground }}
    >
      <div className="w-full max-w-md text-center mt-12">
        <Sparkles size={48} className="mx-auto" style={{ color: COLORS.vibrantCoral }} />
        <h1
          className={`text-4xl font-bold mt-4 ${FONT_CLASSES.display}`}
          style={{ color: COLORS.deepIndigo }}
        >
          Discover Your Hive
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Connect with local hobbyists and explore micro-communities near you.
        </p>
      </div>

      <div className="w-full max-w-md mt-10">
        <h2 className="text-xl font-semibold" style={{ color: COLORS.deepIndigo }}>
          What are you passionate about?
        </h2>
        <p className="text-sm text-gray-500 mb-4">Select at least 3 interests.</p>
        <div className="grid grid-cols-2 gap-4">
          {MOCK_HOBBIES.map((hobby) => (
            <button
              key={hobby.id}
              className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-sm transition-all duration-200
                ${selectedInterests.some((h) => h.id === hobby.id)
                  ? 'ring-2 ring-offset-2' : 'bg-white hover:shadow-md'}
              `}
              style={{
                borderColor: selectedInterests.some((h) => h.id === hobby.id) ? COLORS.vibrantCoral : 'transparent',
                backgroundColor: selectedInterests.some((h) => h.id === hobby.id) ? COLORS.softLavender : 'white',
                color: selectedInterests.some((h) => h.id === hobby.id) ? COLORS.deepIndigo : COLORS.deepIndigo,
                boxShadow: selectedInterests.some((h) => h.id === hobby.id) ? `0 0 0 2px ${COLORS.vibrantCoral}` : '0 1px 2px 0 rgba(0,0,0,0.05)'
              }}
              onClick={() => toggleInterest(hobby)}
            >
              {/* Placeholder for actual hobby icons */}
              <span className="text-4xl">{hobby.icon === 'bee' ? '🐝' : hobby.icon === 'plant' ? '🌱' : hobby.icon === 'dice' ? '🎲' : hobby.icon === 'camera' ? '📸' : hobby.icon === 'coffee' ? '☕' : hobby.icon === 'pen' ? '✍️' : hobby.icon === 'beer' ? '🍺' : hobby.icon === 'star' ? '✨' : hobby.icon === 'code' ? '💻' : hobby.icon === 'yoga' ? '🧘‍♀️' : '❓'}</span>
              <span className="mt-2 text-sm font-medium">{hobby.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md mt-8">
        <h2 className="text-xl font-semibold" style={{ color: COLORS.deepIndigo }}>
          Where are you located?
        </h2>
        <p className="text-sm text-gray-500 mb-4">We use this to find nearby communities.</p>
        <button
          className="w-full flex items-center justify-center p-4 rounded-xl shadow-sm bg-white text-gray-700 hover:shadow-md transition-all duration-200"
        >
          <MapPin size={20} style={{ color: COLORS.vibrantCoral }} />
          <span className="ml-2 font-medium">Detect My Location</span>
        </button>
      </div>

      <button
        className={`mt-12 w-full max-w-md flex items-center justify-center py-4 px-6 rounded-full text-white font-semibold text-lg
          ${selectedInterests.length >= 3 ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}
        `}
        style={{ background: `linear-gradient(to right, ${COLORS.vibrantCoral}, ${COLORS.deepIndigo})` }}
        onClick={handleProceed}
        disabled={selectedInterests.length < 3}
      >
        Proceed to Discovery
        <ChevronRight size={20} className="ml-2" />
      </button>

      <div className="h-20"></div> {/* Spacer for bottom content */}
    </div>
  );
}