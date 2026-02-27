/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { COLORS, FONT_CLASSES } from './constants';
import OnboardingScreen from './screens/OnboardingScreen';
import DiscoveryFeedScreen from './screens/DiscoveryFeedScreen';
import LocalMapViewScreen from './screens/LocalMapViewScreen';
import MeetupCreationScreen from './screens/MeetupCreationScreen';
import CommunityChatScreen from './screens/CommunityChatScreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';

export default function App() {
  return (
    <BrowserRouter>
      <div
        className={`min-h-screen ${FONT_CLASSES.sans}`}
        style={{ backgroundColor: COLORS.lightBackground }}
      >
        <Routes>
          <Route path="/" element={<OnboardingScreen />} />
          <Route path="/feed" element={<DiscoveryFeedScreen />} />
          <Route path="/map" element={<LocalMapViewScreen />} />
          <Route path="/create-meetup" element={<MeetupCreationScreen />} />
          <Route path="/chat" element={<CommunityChatScreen />} />
          <Route path="/profile" element={<ProfileSettingsScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
