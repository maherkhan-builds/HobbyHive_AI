import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { COLORS, FONT_CLASSES, MOCK_USERS } from '../constants';
import { MessageCircle, Map, PlusCircle, User, Search, Send } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: string;
  avatar: string;
  text: string;
  timestamp: string;
}

const MOCK_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'msg1',
    sender: 'Alice Smith',
    avatar: MOCK_USERS[0].avatar,
    text: 'Hey everyone! Excited for the beekeeping workshop this weekend!',
    timestamp: '2026-02-27T09:00:00Z',
  },
  {
    id: 'msg2',
    sender: 'Bob Johnson',
    avatar: MOCK_USERS[1].avatar,
    text: 'Me too, Alice! I just got my new smoker ready. 🐝',
    timestamp: '2026-02-27T09:05:00Z',
  },
  {
    id: 'msg3',
    sender: 'Charlie Brown',
    avatar: MOCK_USERS[2].avatar,
    text: 'Is it beginner-friendly? I\'m new to this!',
    timestamp: '2026-02-27T09:10:00Z',
  },
  {
    id: 'msg4',
    sender: 'Alice Smith',
    avatar: MOCK_USERS[0].avatar,
    text: 'Absolutely, Charlie! We\'ll cover all the basics. Looking forward to seeing you there!',
    timestamp: '2026-02-27T09:15:00Z',
  },
];

export default function CommunityChatScreen() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(MOCK_CHAT_MESSAGES);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: `msg${chatMessages.length + 1}`,
        sender: 'Current User', // Placeholder for current user
        avatar: 'https://picsum.photos/seed/currentuser/100/100', // Placeholder avatar
        text: message.trim(),
        timestamp: new Date().toISOString(),
      };
      setChatMessages((prev) => [...prev, newMessage]);
      setMessage('');
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
        className="p-6 pb-4 bg-white shadow-sm"
      >
        <h1 className={`text-3xl font-bold ${FONT_CLASSES.display}`} style={{ color: COLORS.deepIndigo }}>
          Beekeeping Chat
        </h1>
        <p className="text-gray-600 text-sm mt-1">Group chat for the Urban Beekeeping meetup.</p>
      </motion.header>

      {/* Chat Messages */}
      <main className="flex-grow p-4 space-y-4 overflow-y-auto">
        {chatMessages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-start ${msg.sender === 'Current User' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender !== 'Current User' && (
              <img
                src={msg.avatar}
                alt={msg.sender}
                className="w-8 h-8 rounded-full mr-3"
                referrerPolicy="no-referrer"
              />
            )}
            <div
              className={`p-3 rounded-xl max-w-[70%]
                ${msg.sender === 'Current User'
                  ? 'bg-gradient-to-br from-indigo-400 to-indigo-600 text-white'
                  : 'bg-white text-gray-800 shadow-sm'}
              `}
            >
              <p className="font-medium text-sm">{msg.sender}</p>
              <p className="text-sm mt-1">{msg.text}</p>
              <span className="block text-right text-xs mt-1 opacity-75">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            {msg.sender === 'Current User' && (
              <img
                src={msg.avatar}
                alt={msg.sender}
                className="w-8 h-8 rounded-full ml-3"
                referrerPolicy="no-referrer"
              />
            )}
          </motion.div>
        ))}
      </main>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-100 p-4 flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
          className="flex-grow rounded-full border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSendMessage}
          className="ml-3 p-2 rounded-full text-white"
          style={{ backgroundColor: COLORS.vibrantCoral }}
        >
          <Send size={24} />
        </motion.button>
      </div>

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
        <button onClick={() => navigate('/chat')} className="flex flex-col items-center text-xs font-medium" style={{ color: COLORS.deepIndigo }}>
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
