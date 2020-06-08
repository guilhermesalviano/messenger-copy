import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Topbar from './src/components/Topbar';
import Home from './src/pages/Home';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Topbar />
      <Routes />
    </>
  );
}