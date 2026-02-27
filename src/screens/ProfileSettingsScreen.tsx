import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { COLORS, FONT_CLASSES, MOCK_USERS } from '../constants';
import { User, Map, PlusCircle, MessageCircle, Search, Settings, Tag, Award, TrendingUp, Star } from 'lucide-react';
import { SkillLevel } from '../types';

export default function ProfileSettingsScreen() {
  const navigate = useNavigate();
  const currentUser = MOCK_USERS[0]; // Using a mock user for demonstration

  const getSkillLevelColor = (level: SkillLevel) => {
    switch (level) {
      case SkillLevel.BEGINNER:
        return COLORS.freshLime;
      case SkillLevel.ENTHUSIAST:
        return COLORS.vibrantCoral;
      case SkillLevel.EXPERT:
        return COLORS.deepIndigo;
      default:
        return 'gray';
    }
  };

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
        className="p-6 pb-4 bg-white shadow-sm flex items-center justify-between"
      >
        <div>
          <h1 className={`text-3xl font-bold ${FONT_CLASSES.display}`} style={{ color: COLORS.deepIndigo }}>
            My Profile
          </h1>
          <p className="text-gray-600 text-sm mt-1">Manage your interests and settings.</p>
        </div>
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <Settings size={24} className="text-gray-600" />
        </button>
      </motion.header>

      <main className="flex-grow p-6 space-y-6 overflow-y-auto">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
        >
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-24 h-24 rounded-full object-cover ring-4 ring-offset-2" style={{ ringColor: COLORS.vibrantCoral }}
            referrerPolicy="no-referrer"
          />
          <h2 className={`text-2xl font-bold mt-4 ${FONT_CLASSES.display}`} style={{ color: COLORS.deepIndigo }}>
            {currentUser.name}
          </h2>
          <p className="text-gray-600 text-sm">{currentUser.location.city}</p>
          <div className="flex items-center mt-3 space-x-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: getSkillLevelColor(currentUser.skillLevel), color: 'white' }}
            >
              {currentUser.skillLevel}
            </span>
            <div className="flex items-center text-sm text-gray-700">
              <TrendingUp size={16} className="mr-1" style={{ color: COLORS.freshLime }} />
              <span>{currentUser.activityStreaks} Streaks</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Star size={16} className="mr-1" style={{ color: COLORS.vibrantCoral }} />
              <span>{currentUser.reputationScore} Rep</span>
            </div>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h3 className="text-xl font-semibold" style={{ color: COLORS.deepIndigo }}>My Interests</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {currentUser.interests.map((hobby) => (
              <span
                key={hobby.id}
                className="flex items-center px-3 py-1 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: COLORS.softLavender, color: COLORS.deepIndigo }}
              >
                <Tag size={16} className="mr-1" /> {hobby.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Settings Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h3 className="text-xl font-semibold" style={{ color: COLORS.deepIndigo }}>Account Settings</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-700">Edit Profile</span>
              <ChevronRight size={20} className="text-gray-400" />
            </li>
            <li className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-700">Notifications</span>
              <ChevronRight size={20} className="text-gray-400" />
            </li>
            <li className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-700">Privacy</span>
              <ChevronRight size={20} className="text-gray-400" />
            </li>
            <li className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-red-500">Log Out</span>
              <ChevronRight size={20} className="text-gray-400" />
            </li>
          </ul>
        </motion.div>
      </main>

      {/* Bottom Navigation (re-used) */}
      <nav className="bg-white shadow-lg border-t border-gray-100 p-4 flex justify-around items-center sticky bottom-0 w-full">
        <button onClick={() => navigate('/feed')} className="flex flex-col items-center text-xs font-medium text-gray-500">
          <Search size={24} />
          <span>Discover</span>
        </button>
        <button onClick={() => navigate('/map')} className="flex flex-col items-center text-xs font-medium text-gray-500">
          <Map size={24} />
          <span>Map</span>
        </button>
        <button onClick={() => navigate('/create-meetup')} className="flex flex-col items-center text-xs font-medium text-gray-500">
          <PlusCircle size={32} />
          <span className="-mt-1">Create</span>
        </button>
        <button onClick={() => navigate('/chat')} className="flex flex-col items-center text-xs font-medium text-gray-500">
          <MessageCircle size={24} />
          <span>Chat</span>
        </button>
        <button onClick={() => navigate('/profile')} className="flex flex-col items-center text-xs font-medium" style={{ color: COLORS.deepIndigo }}>
          <User size={24} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}
