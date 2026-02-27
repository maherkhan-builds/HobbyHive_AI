import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { COLORS, FONT_CLASSES, MOCK_HOBBIES } from '../constants';
import { Hobby } from '../types';
import { PlusCircle, Map, MessageCircle, User, Search, Calendar, Clock, Users, Tag } from 'lucide-react';

export default function MeetupCreationScreen() {
  const navigate = useNavigate();
  const [meetupName, setMeetupName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [maxAttendees, setMaxAttendees] = useState<number | ''>('');

  const handleCreateMeetup = () => {
    console.log({
      meetupName,
      description,
      selectedHobby,
      dateTime,
      location,
      maxAttendees,
    });
    // In a real app, send this data to a backend for AI suggestions and meetup creation
    navigate('/feed'); // Navigate to feed after creation
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
        className="p-6 pb-4 bg-white shadow-sm"
      >
        <h1 className={`text-3xl font-bold ${FONT_CLASSES.display}`} style={{ color: COLORS.deepIndigo }}>
          Create Meetup
        </h1>
        <p className="text-gray-600 text-sm mt-1">Organize your next hobby gathering.</p>
      </motion.header>

      <main className="flex-grow p-6 space-y-6 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div>
            <label htmlFor="meetupName" className="block text-sm font-medium text-gray-700">Meetup Name</label>
            <input
              type="text"
              id="meetupName"
              value={meetupName}
              onChange={(e) => setMeetupName(e.target.value)}
              placeholder="e.g., Downtown Beekeeping Session"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Tell us more about your meetup..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>

          <div>
            <label htmlFor="hobby" className="block text-sm font-medium text-gray-700">Hobby</label>
            <div className="mt-1 grid grid-cols-3 gap-2">
              {MOCK_HOBBIES.map((hobby) => (
                <button
                  key={hobby.id}
                  className={`flex items-center justify-center p-2 rounded-lg text-sm transition-all duration-200
                    ${selectedHobby?.id === hobby.id
                      ? 'ring-2 ring-offset-2' : 'bg-gray-100 hover:bg-gray-200'}
                  `}
                  style={{
                    borderColor: selectedHobby?.id === hobby.id ? COLORS.vibrantCoral : 'transparent',
                    backgroundColor: selectedHobby?.id === hobby.id ? COLORS.softLavender : 'white',
                    color: selectedHobby?.id === hobby.id ? COLORS.deepIndigo : COLORS.deepIndigo,
                    boxShadow: selectedHobby?.id === hobby.id ? `0 0 0 2px ${COLORS.vibrantCoral}` : 'none'
                  }}
                  onClick={() => setSelectedHobby(hobby)}
                >
                  <Tag size={16} className="mr-1" /> {hobby.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700">Date & Time</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Calendar size={20} className="text-gray-400" />
                </div>
                <input
                  type="datetime-local"
                  id="dateTime"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Map size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Central Park, NYC"
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="maxAttendees" className="block text-sm font-medium text-gray-700">Max Attendees (Optional)</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Users size={20} className="text-gray-400" />
              </div>
              <input
                type="number"
                id="maxAttendees"
                value={maxAttendees}
                onChange={(e) => setMaxAttendees(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="e.g., 10"
                min="1"
                className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center justify-center py-3 px-6 rounded-full text-white font-semibold text-lg mt-6
              ${!meetupName || !selectedHobby || !dateTime || !location ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
            `}
            style={{ background: `linear-gradient(to right, ${COLORS.vibrantCoral}, ${COLORS.deepIndigo})` }}
            onClick={handleCreateMeetup}
            disabled={!meetupName || !selectedHobby || !dateTime || !location}
          >
            <PlusCircle size={20} className="mr-2" /> Create Meetup
          </motion.button>
        </div>
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
