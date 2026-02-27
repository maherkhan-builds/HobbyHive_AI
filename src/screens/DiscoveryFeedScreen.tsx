import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { COLORS, FONT_CLASSES, MOCK_HOBBIES, MOCK_MEETUPS } from '../constants';
import { Hobby, Meetup } from '../types';
import { Flame, Map, PlusCircle, MessageCircle, User, Search } from 'lucide-react';

interface MeetupCardProps {
  meetup: Meetup;
}

const MeetupCard = ({ meetup }: MeetupCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
  >
    <img
      src={meetup.image || `https://picsum.photos/seed/${meetup.id}/400/200?blur=2`}
      alt={meetup.name}
      className="w-full h-32 object-cover"
      referrerPolicy="no-referrer"
    />
    <div className="p-4 flex-grow">
      <h3 className="font-semibold text-lg" style={{ color: COLORS.deepIndigo }}>{meetup.name}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{meetup.description}</p>
      <div className="flex items-center text-xs text-gray-500 mt-2">
        <Map size={14} className="mr-1" />
        <span>{meetup.location.address || meetup.location.city}</span>
        <span className="ml-auto">{new Date(meetup.dateTime).toLocaleDateString()}</span>
      </div>
    </div>
    <div className="p-4 border-t border-gray-100 flex justify-between items-center">
      <div className="flex -space-x-2 overflow-hidden">
        {meetup.attendees.slice(0, 3).map((attendee) => (
          <img
            key={attendee.id}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src={attendee.avatar}
            alt={attendee.name}
            referrerPolicy="no-referrer"
          />
        ))}
        {meetup.attendees.length > 3 && (
          <span className="flex h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 items-center justify-center text-xs text-gray-600">
            +{meetup.attendees.length - 3}
          </span>
        )}
      </div>
      <button
        className="px-4 py-2 rounded-full text-white text-sm font-medium"
        style={{ backgroundColor: COLORS.vibrantCoral }}
      >
        RSVP
      </button>
    </div>
  </motion.div>
);

interface TrendingHobbyCardProps {
  hobby: Hobby;
}

const TrendingHobbyCard = ({ hobby }: TrendingHobbyCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm"
  >
    <span className="text-3xl">{hobby.icon === 'bee' ? '🐝' : hobby.icon === 'plant' ? '🌱' : hobby.icon === 'dice' ? '🎲' : hobby.icon === 'camera' ? '📸' : hobby.icon === 'coffee' ? '☕' : hobby.icon === 'pen' ? '✍️' : hobby.icon === 'beer' ? '🍺' : hobby.icon === 'star' ? '✨' : hobby.icon === 'code' ? '💻' : hobby.icon === 'yoga' ? '🧘‍♀️' : '❓'}</span>
    <p className="mt-2 text-sm font-medium text-center" style={{ color: COLORS.deepIndigo }}>{hobby.name}</p>
  </motion.div>
);

export default function DiscoveryFeedScreen() {
  const navigate = useNavigate();
  const trendingHobbies = MOCK_HOBBIES.filter((h) => h.trending);

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
          HobbyHive
        </h1>
        <p className="text-gray-600 text-sm mt-1">Discover your next passion.</p>
      </motion.header>

      <main className="flex-grow p-6 space-y-8 overflow-y-auto">
        {/* Trending Hobbies */}
        <section>
          <div className="flex items-center mb-4">
            <Flame size={20} style={{ color: COLORS.vibrantCoral }} />
            <h2 className="text-xl font-semibold ml-2" style={{ color: COLORS.deepIndigo }}>Trending Hobbies</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {trendingHobbies.map((hobby) => (
              <TrendingHobbyCard key={hobby.id} hobby={hobby} />
            ))}
          </div>
        </section>

        {/* Nearby Meetups */}
        <section>
          <div className="flex items-center mb-4">
            <Map size={20} style={{ color: COLORS.freshLime }} />
            <h2 className="text-xl font-semibold ml-2" style={{ color: COLORS.deepIndigo }}>Nearby Meetups</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_MEETUPS.map((meetup) => (
              <MeetupCard key={meetup.id} meetup={meetup} />
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white shadow-lg border-t border-gray-100 p-4 flex justify-around items-center sticky bottom-0 w-full">
        <button onClick={() => navigate('/feed')} className="flex flex-col items-center text-xs font-medium" style={{ color: COLORS.deepIndigo }}>
          <Search size={24} />
          <span>Discover</span>
        </button>
        <button onClick={() => navigate('/map')} className="flex flex-col items-center text-xs font-medium text-gray-500">
          <Map size={24} />
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
