import React from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';
import Story from '../../components/Story';
import MessageList from '../../components/MessageList';
import NewMessage from '../../components/NewMessage';

const Home = () => {
    return (
        <View style={styles.container}>
            <Story />
            <MessageList />
            <NewMessage />
        </View>
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