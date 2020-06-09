import React from 'react';
import { StyleSheet, Text, View, NativeModules,SafeAreaView } from 'react-native';
import Topbar from '../../components/Topbar';
import Story from '../../components/Story';
import MessageList from '../../components/MessageList';
import NewMessage from '../../components/NewMessage';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Topbar />
            {/* <Story /> */}
            <MessageList />
            <NewMessage />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100%'
    },
});
  

export default Home;