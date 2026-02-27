import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { COLORS, FONT_CLASSES, MOCK_MEETUPS } from '../constants';
import { MapPin, Search, PlusCircle, MessageCircle, User, Map as MapIcon } from 'lucide-react';

export default function LocalMapViewScreen() {
  const navigate = useNavigate();
  const [radius, setRadius] = useState(5); // Default radius in miles

  return (
    <div
      className={`min-h-screen flex flex-col ${FONT_CLASSES.sans}`}
      style={{ backgroundColor: COLORS.lightBackground }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 pb-4 bg-white shadow-sm"
      >
        <h1 className={`text-3xl font-bold ${FONT_CLASSES.display}`} style={{ color: COLORS.deepIndigo }}>
          Local Map
        </h1>
        <p className="text-gray-600 text-sm mt-1">Find meetups and hobbyists near you.</p>
      </motion.header>

      <main className="flex-grow relative">
        {/* Placeholder Map */}
        <img
          src="https://picsum.photos/seed/mapview/1000/800?blur=3"
          alt="Interactive Map Placeholder"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Search and Filter Overlay */}
        <div className="absolute top-4 left-0 right-0 p-4 flex flex-col items-center space-y-4">
          <div className="w-full max-w-md flex bg-white rounded-full shadow-lg p-2">
            <Search size={20} className="text-gray-400 ml-2 my-auto" />
            <input
              type="text"
              placeholder="Search location or hobby..."
              className="flex-grow px-3 py-2 outline-none rounded-full"
            />
          </div>
          <div className="flex items-center bg-white rounded-full shadow-lg px-4 py-2 text-sm text-gray-700">
            <MapPin size={16} className="mr-2" style={{ color: COLORS.vibrantCoral }} />
            <span>Radius: {radius} miles</span>
            <input
              type="range"
              min="1"
              max="20"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="ml-3 w-24 accent-current"
              style={{ accentColor: COLORS.freshLime }}
            />
          </div>
        </div>

        {/* Meetup Hotspots (simulated) */}
        {MOCK_MEETUPS.map((meetup) => (
          <motion.div
            key={meetup.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: Math.random() * 0.5, duration: 0.3 }}
            className="absolute p-2 rounded-full shadow-md text-white text-xs font-medium flex items-center justify-center"
            style={{
              backgroundColor: COLORS.vibrantCoral,
              left: `${30 + Math.random() * 40}%`, // Simulate random positions
              top: `${20 + Math.random() * 60}%`,
              width: '40px', height: '40px'
            }}
          >
            {meetup.attendees.length}
          </motion.div>
        ))}
      </main>

      {/* Bottom Navigation (re-used from DiscoveryFeedScreen) */}
      <nav className="bg-white shadow-lg border-t border-gray-100 p-4 flex justify-around items-center sticky bottom-0 w-full">
        <button onClick={() => navigate('/feed')} className="flex flex-col items-center text-xs font-medium text-gray-500">
          <Search size={24} />
          <span>Discover</span>
        </button>
        <button onClick={() => navigate('/map')} className="flex flex-col items-center text-xs font-medium" style={{ color: COLORS.deepIndigo }}>
          <MapIcon size={24} />
          <span>Map</span>
        </button>
        <button onClick={() => navigate('/create-meetup')} className="flex flex-col items-center text-xs font-medium" style={{ color: COLORS.vibrantCoral }}>
          <PlusCircle size={32} />
          <span className="-mt-1">Create</span>
        </button>
        <button onClick={() => navigate('/chat')} className="flex flex-col items-center text-xs font-medium text-gray-500">
          <MessageCircle size={24} />
          <span>Chat</span>
        </button>
        <button onClick={() => navigate('/profile')} className="flex flex-col items-center text-xs font-medium text-gray-500">
          <User size={24} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}
