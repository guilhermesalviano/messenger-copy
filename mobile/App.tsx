import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Topbar from './src/components/Topbar';
import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Topbar />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
