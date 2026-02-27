export interface User {
  id: string;
  name: string;
  avatar: string;
  location: Location;
  interests: Hobby[];
  skillLevel: SkillLevel;
  activityStreaks: number;
  reputationScore: number;
}

export interface Hobby {
  id: string;
  name: string;
  icon: string;
  category: HobbyCategory;
  trending?: boolean;
}

export enum HobbyCategory {
  OUTDOOR = 'Outdoor',
  CREATIVE = 'Creative',
  GAMING = 'Gaming',
  TECH = 'Tech',
  WELLNESS = 'Wellness',
  COMMUNITY = 'Community',
  OTHER = 'Other',
}

export enum SkillLevel {
  BEGINNER = 'Beginner',
  ENTHUSIAST = 'Enthusiast',
  EXPERT = 'Expert',
}

export interface Meetup {
  id: string;
  name: string;
  description: string;
  hobby: Hobby;
  location: Location;
  dateTime: string; // ISO string
  organizer: User;
  attendees: User[];
  maxAttendees?: number;
  image?: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  mainHobby: Hobby;
  members: User[];
  meetups: Meetup[];
  imageUrl?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface FeedItem {
  id: string;
  type: 'meetup' | 'post' | 'trend';
  content: Meetup | Post | Hobby;
  timestamp: string; // ISO string
}

export interface Post {
  id: string;
  author: User;
  communityId?: string;
  text: string;
  imageUrl?: string;
  likes: number;
  comments: Comment[];
  polls?: Poll;
}

export interface Comment {
  id: string;
  author: User;
  text: string;
  timestamp: string; // ISO string
}

export interface Poll {
  question: string;
  options: { id: string; text: string; votes: number }[];
  totalVotes: number;
  expiresAt: string; // ISO string
}
