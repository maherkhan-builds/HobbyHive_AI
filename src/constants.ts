import { Hobby, HobbyCategory, SkillLevel, User } from './types';

export const COLORS = {
  deepIndigo: 'var(--color-indigo-deep)',
  vibrantCoral: 'var(--color-coral-vibrant)',
  freshLime: 'var(--color-lime-fresh)',
  softLavender: 'var(--color-lavender-soft)',
  lightBackground: 'var(--color-background-light)',
};

export const FONT_CLASSES = {
  sans: 'font-sans',
  display: 'font-display',
  mono: 'font-mono',
};

export const MOCK_HOBBIES: Hobby[] = [
  { id: '1', name: 'Urban Beekeeping', icon: 'bee', category: HobbyCategory.OUTDOOR, trending: true },
  { id: '2', name: 'Rooftop Gardening', icon: 'plant', category: HobbyCategory.OUTDOOR },
  { id: '3', name: 'Indie Board Games', icon: 'dice', category: HobbyCategory.GAMING, trending: true },
  { id: '4', name: 'Street Photography', icon: 'camera', category: HobbyCategory.CREATIVE },
  { id: '5', name: 'Latte Art', icon: 'coffee', category: HobbyCategory.CREATIVE },
  { id: '6', name: 'Calligraphy', icon: 'pen', category: HobbyCategory.CREATIVE },
  { id: '7', name: 'Homebrewing', icon: 'beer', category: HobbyCategory.COMMUNITY },
  { id: '8', name: 'Stargazing', icon: 'star', category: HobbyCategory.OUTDOOR },
  { id: '9', name: 'Coding Challenges', icon: 'code', category: HobbyCategory.TECH },
  { id: '10', name: 'Yoga in the Park', icon: 'yoga', category: HobbyCategory.WELLNESS, trending: true },
];

export const MOCK_USERS: User[] = [
  {
    id: 'user1',
    name: 'Alice Smith',
    avatar: 'https://picsum.photos/seed/alice/100/100',
    location: { latitude: 34.0522, longitude: -118.2437, city: 'Los Angeles' },
    interests: [MOCK_HOBBIES[0], MOCK_HOBBIES[3]],
    skillLevel: SkillLevel.ENTHUSIAST,
    activityStreaks: 5,
    reputationScore: 120,
  },
  {
    id: 'user2',
    name: 'Bob Johnson',
    avatar: 'https://picsum.photos/seed/bob/100/100',
    location: { latitude: 34.0550, longitude: -118.2500, city: 'Los Angeles' },
    interests: [MOCK_HOBBIES[2], MOCK_HOBBIES[8]],
    skillLevel: SkillLevel.EXPERT,
    activityStreaks: 10,
    reputationScore: 250,
  },
  {
    id: 'user3',
    name: 'Charlie Brown',
    avatar: 'https://picsum.photos/seed/charlie/100/100',
    location: { latitude: 34.0480, longitude: -118.2400, city: 'Los Angeles' },
    interests: [MOCK_HOBBIES[1], MOCK_HOBBIES[9]],
    skillLevel: SkillLevel.BEGINNER,
    activityStreaks: 2,
    reputationScore: 80,
  },
];

export const MOCK_MEETUPS = [
  {
    id: 'meetup1',
    name: 'Beginner Beekeeping Workshop',
    description: 'Learn the basics of urban beekeeping and hive maintenance.',
    hobby: MOCK_HOBBIES[0],
    location: { latitude: 34.0530, longitude: -118.2450, address: 'Downtown Park', city: 'Los Angeles' },
    dateTime: '2026-03-15T10:00:00Z',
    organizer: MOCK_USERS[0],
    attendees: [MOCK_USERS[2]],
    maxAttendees: 10,
    image: 'https://picsum.photos/seed/beekeeping/400/200?blur=2',
  },
  {
    id: 'meetup2',
    name: 'Indie Board Game Night',
    description: 'Casual evening of strategy and fun with new board games.',
    hobby: MOCK_HOBBIES[2],
    location: { latitude: 34.0560, longitude: -118.2520, address: 'Local Cafe', city: 'Los Angeles' },
    dateTime: '2026-03-18T19:00:00Z',
    organizer: MOCK_USERS[1],
    attendees: [MOCK_USERS[0]],
    maxAttendees: 8,
    image: 'https://picsum.photos/seed/boardgames/400/200?blur=2',
  },
];
